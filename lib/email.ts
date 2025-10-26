import nodemailer from 'nodemailer'
import type { Submission } from '@/app/api/send/route'

function getTransporter() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  })
}

export async function sendNotificationEmail(data: Submission, reference: string) {
  const transporter = getTransporter()
  const to = process.env.EMAIL_TO
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER

  if (!transporter || !to || !from) {
    throw new Error('Email not configured (missing SMTP or EMAIL_* envs)')
  }

  const subject = `Nouvelle demande d'envoi ${reference}`
  const text = `Référence: ${reference}\n\n` +
    `Expéditeur\n` +
    `- Nom: ${data.senderName}\n` +
    `- Téléphone: ${data.senderPhone}\n` +
    `- Email: ${data.senderEmail}\n` +
    `- Adresse: ${data.senderAddress}, ${data.senderPostalCode} ${data.senderCity} (${data.senderCountry})\n\n` +
    `Destinataire\n` +
    `- Nom: ${data.receiverName}\n` +
    `- Téléphone: ${data.receiverPhone}\n` +
    `- Email: ${data.receiverEmail || '-'}\n` +
    `- Adresse: ${data.receiverAddress}, ${data.receiverPostalCode} ${data.receiverCity} (${data.receiverCountry})\n`

  const html = `
    <h2>Nouvelle demande d'envoi ${reference}</h2>
    <h3>Expéditeur</h3>
    <ul>
      <li><strong>Nom:</strong> ${data.senderName}</li>
      <li><strong>Téléphone:</strong> ${data.senderPhone}</li>
      <li><strong>Email:</strong> ${data.senderEmail}</li>
      <li><strong>Adresse:</strong> ${data.senderAddress}, ${data.senderPostalCode} ${data.senderCity} (${data.senderCountry})</li>
    </ul>
    <h3>Destinataire</h3>
    <ul>
      <li><strong>Nom:</strong> ${data.receiverName}</li>
      <li><strong>Téléphone:</strong> ${data.receiverPhone}</li>
      <li><strong>Email:</strong> ${data.receiverEmail || '-'}</li>
      <li><strong>Adresse:</strong> ${data.receiverAddress}, ${data.receiverPostalCode} ${data.receiverCity} (${data.receiverCountry})</li>
    </ul>
  `

  await transporter.sendMail({ from, to, subject, text, html })
}
