import nodemailer from 'nodemailer'

// Cached transporter to avoid re-creating on every call during dev HMR
let cachedTransporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (cachedTransporter) return cachedTransporter

  const user = process.env.ZOHO_USER
  const pass = process.env.ZOHO_PASS

  if (!user || !pass) {
    throw new Error('Missing ZOHO_USER/ZOHO_PASS environment variables')
  }

  cachedTransporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  })

  return cachedTransporter
}

export async function sendMail(subject: string, htmlBody: string) {
  const transporter = getTransporter()

  const from = 'info@sdblabel.com'
  const to = 'info@sdblabel.com'

  await transporter.sendMail({
    from,
    to,
    subject,
    html: htmlBody,
  })
}
