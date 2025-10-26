import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export const runtime = 'nodejs'

export async function GET() {
  const env = {
    SMTP_HOST: !!process.env.SMTP_HOST,
    SMTP_PORT: !!process.env.SMTP_PORT,
    SMTP_USER: !!process.env.SMTP_USER,
    SMTP_PASS: !!process.env.SMTP_PASS,
    EMAIL_FROM: !!(process.env.EMAIL_FROM || process.env.SMTP_USER),
    EMAIL_TO: !!process.env.EMAIL_TO,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: !!process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    GOOGLE_SHEETS_SPREADSHEET_ID: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_SHEET_NAME: !!(process.env.GOOGLE_SHEETS_SHEET_NAME || 'Submissions'),
  }

  const checks: Record<string, any> = {}

  // SMTP verify (optional)
  try {
    if (env.SMTP_HOST && env.SMTP_PORT && env.SMTP_USER && env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: { user: process.env.SMTP_USER as string, pass: process.env.SMTP_PASS as string },
      })
      await transporter.verify()
      checks.smtp = { ok: true }
    } else {
      checks.smtp = { ok: false, reason: 'missing_env' }
    }
  } catch (e: any) {
    checks.smtp = { ok: false, error: e?.message || 'smtp_verify_failed' }
  }

  // Google Sheets simple access check
  try {
    if (env.GOOGLE_SERVICE_ACCOUNT_EMAIL && env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY as string
      const privateKey = privateKeyRaw.replace(/\\n/g, '\n')
      const auth = new google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
      const sheets = google.sheets({ version: 'v4', auth })
      const res = await sheets.spreadsheets.get({ spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID })
      const sheetTitles = res.data.sheets?.map(s => s.properties?.title) || []
      checks.sheets = { ok: true, sheetTitles }
    } else {
      checks.sheets = { ok: false, reason: 'missing_env' }
    }
  } catch (e: any) {
    checks.sheets = { ok: false, error: e?.message || 'sheets_access_failed' }
  }

  return NextResponse.json({ env, checks })
}
