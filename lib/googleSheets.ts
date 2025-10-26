import { google } from 'googleapis'
import type { Submission } from '@/app/api/send/route'

function getJwt() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  if (!clientEmail || !privateKeyRaw) return null

  // Replace literal \n with real newlines if needed
  const privateKey = privateKeyRaw.replace(/\\n/g, '\n')

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

function a1Sheet(name: string) {
  // Always single-quote sheet name and escape single quotes per A1 notation rules
  const escaped = name.replace(/'/g, "''")
  return `'${escaped}'`
}

export async function appendSubmissionToSheet(data: Submission, reference: string) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Submissions'
  const auth = getJwt()
  if (!spreadsheetId || !auth) {
    throw new Error('Google Sheets not configured (missing creds or spreadsheet id)')
  }

  const sheets = google.sheets({ version: 'v4', auth })
  const now = new Date().toISOString()

  // Ensure header row exists (if first row is empty)
  try {
    const header = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${a1Sheet(sheetName)}!1:1`,
    })
    const hasHeader = Array.isArray(header.data.values) && header.data.values.length > 0 && header.data.values[0].some((v) => (v ?? '').toString().trim() !== '')
    if (!hasHeader) {
      const headerRow = [
        'timestamp',
        'reference',
        'senderName', 'senderPhone', 'senderEmail', 'senderAddress', 'senderPostalCode', 'senderCity', 'senderCountry',
        'receiverName', 'receiverPhone', 'receiverEmail', 'receiverAddress', 'receiverPostalCode', 'receiverCity', 'receiverCountry',
      ]
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${a1Sheet(sheetName)}!A1:${String.fromCharCode(64 + headerRow.length)}1`,
        valueInputOption: 'RAW',
        requestBody: { values: [headerRow] },
      })
    }
  } catch (e) {
    // If sheet/tab doesn't exist, this will throw; leave as-is so append below can also throw a clearer error
  }

  const row = [
    now,
    reference,
    // Sender
    data.senderName,
    data.senderPhone,
    data.senderEmail,
    data.senderAddress,
    data.senderPostalCode,
    data.senderCity,
    data.senderCountry,
    // Receiver
    data.receiverName,
    data.receiverPhone,
    data.receiverEmail || '',
    data.receiverAddress,
    data.receiverPostalCode,
    data.receiverCity,
    data.receiverCountry,
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${a1Sheet(sheetName)}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}
