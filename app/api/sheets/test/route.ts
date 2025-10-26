import { NextResponse } from 'next/server'
import { appendSubmissionToSheet } from '@/lib/googleSheets'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const reference = `TEST${Date.now().toString().slice(-6)}`
    await appendSubmissionToSheet({
      senderName: 'Test Sender',
      senderPhone: '+212600000000',
      senderEmail: 'test-sender@example.com',
      senderAddress: '1 Rue Test',
      senderPostalCode: '20000',
      senderCity: 'Casablanca',
      senderCountry: 'maroc',
      receiverName: 'Test Receiver',
      receiverPhone: '+490000000000',
      receiverEmail: 'test-receiver@example.com',
      receiverAddress: '2 Test Strasse',
      receiverPostalCode: '10115',
      receiverCity: 'Berlin',
      receiverCountry: 'allemagne',
    }, reference)

    return NextResponse.json({ ok: true, reference })
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Sheets test failed' }, { status: 500 })
  }
}
