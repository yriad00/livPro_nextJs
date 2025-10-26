import { NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/email'
import { appendSubmissionToSheet } from '@/lib/googleSheets'

export const runtime = 'nodejs'

type Country = 'maroc' | 'allemagne' | ''

export interface Submission {
  senderName: string
  senderPhone: string
  senderEmail: string
  senderAddress: string
  senderPostalCode: string
  senderCity: string
  senderCountry: Country
  receiverName: string
  receiverPhone: string
  receiverEmail?: string
  receiverAddress: string
  receiverPostalCode: string
  receiverCity: string
  receiverCountry: Country
}

function validate(body: any): { ok: boolean; message?: string } {
  const required = [
    'senderName', 'senderPhone', 'senderEmail', 'senderAddress', 'senderPostalCode', 'senderCity', 'senderCountry',
    'receiverName', 'receiverPhone', 'receiverAddress', 'receiverPostalCode', 'receiverCity', 'receiverCountry',
  ]
  for (const key of required) {
    if (!body || typeof body[key] !== 'string' || body[key].trim() === '') {
      return { ok: false, message: `Champ manquant ou invalide: ${key}` }
    }
  }
  return { ok: true }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Submission
    const v = validate(body)
    if (!v.ok) {
      return NextResponse.json({ ok: false, error: v.message }, { status: 400 })
    }

    const reference = `LIV${Date.now().toString().slice(-6)}`

    const tasks: Array<Promise<unknown>> = []
    const results: { email?: string; sheet?: string } = {}
    const resultsInfo: {
      email?: { status: 'sent' | 'error' | 'skipped'; errorMessage?: string; meta?: Record<string, any> }
      sheet?: { status: 'appended' | 'error' | 'skipped'; errorMessage?: string; meta?: Record<string, any> }
    } = {}

    const parseGoogleError = (err: any) => {
      const message =
        err?.response?.data?.error?.message ||
        err?.errors?.[0]?.message ||
        err?.message ||
        'Unknown Google API error'
      const code = err?.code || err?.response?.status
      return { message, code }
    }

    // Send Email (if env configured)
    tasks.push(
      sendNotificationEmail(body, reference)
        .then(() => {
          results.email = 'sent'
          resultsInfo.email = {
            status: 'sent',
            meta: {
              host: process.env.SMTP_HOST,
              port: process.env.SMTP_PORT,
              from: process.env.EMAIL_FROM || process.env.SMTP_USER,
              to: process.env.EMAIL_TO,
            },
          }
        })
        .catch((err) => {
          const msg = err?.message || 'unknown'
          results.email = `error: ${msg}`
          resultsInfo.email = {
            status: 'error',
            errorMessage: msg,
            meta: {
              host: process.env.SMTP_HOST,
              port: process.env.SMTP_PORT,
              from: process.env.EMAIL_FROM || process.env.SMTP_USER,
              to: process.env.EMAIL_TO,
            },
          }
          console.error('[EMAIL_ERROR]', msg, err)
        })
    )

    // Append to Google Sheet (if env configured)
    tasks.push(
      appendSubmissionToSheet(body, reference)
        .then(() => {
          results.sheet = 'appended'
          resultsInfo.sheet = {
            status: 'appended',
            meta: {
              spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
              sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME || 'Submissions',
            },
          }
        })
        .catch((err) => {
          const g = parseGoogleError(err)
          const msg = `${g.message}${g.code ? ` (code ${g.code})` : ''}`
          results.sheet = `error: ${msg}`
          resultsInfo.sheet = {
            status: 'error',
            errorMessage: msg,
            meta: {
              spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
              sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME || 'Submissions',
            },
          }
          console.error('[SHEETS_ERROR]', msg, err)
        })
    )

    await Promise.all(tasks)

    const statusOk = results.email !== undefined || results.sheet !== undefined
    const partial = [results.email, results.sheet].some((v) => (v || '').startsWith('error'))

    return NextResponse.json({ ok: statusOk, reference, results, resultsInfo, partial }, { status: statusOk ? (partial ? 207 : 200) : 500 })
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Unexpected error' }, { status: 500 })
  }
}
