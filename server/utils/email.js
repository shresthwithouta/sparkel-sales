import nodemailer from 'nodemailer'

const createTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null
  }
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

const send = async (options) => {
  const transporter = createTransporter()
  if (!transporter) {
    console.log('[Email] Not configured — skipping:', options.subject)
    return
  }
  await transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || 'Sparkel Sales'}" <${process.env.EMAIL_USER}>`,
    ...options,
  })
}

export const sendOrderConfirmation = async ({ to, name, orderId, items, total, paymentMethod }) => {
  const itemRows = items
    .map(i => `<tr><td style="padding:6px 0">${i.name}</td><td style="padding:6px 0;text-align:right">×${i.quantity}</td><td style="padding:6px 0;text-align:right">₹${(i.price * i.quantity).toLocaleString('en-IN')}</td></tr>`)
    .join('')

  await send({
    to,
    subject: `Order Confirmed — Sparkel Sales (#${orderId})`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#1e3a5f;padding:32px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;letter-spacing:2px">SPARKEL SALES</h1>
          <p style="color:#94a3b8;margin:8px 0 0;font-size:11px;letter-spacing:1px">AUTHORIZED KUTCHINA DEALER</p>
        </div>
        <div style="padding:32px">
          <h2 style="font-size:18px;color:#1e3a5f">Hi ${name}, your order is confirmed!</h2>
          <p style="color:#64748b;font-size:14px">Thank you for choosing Sparkel Sales. Our team will contact you shortly to confirm delivery and installation details.</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:20px;margin:24px 0">
            <p style="margin:0 0 4px;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px">Order ID</p>
            <p style="margin:0;font-size:14px;font-weight:700;color:#1e3a5f">#${orderId}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <thead><tr style="border-bottom:2px solid #e2e8f0"><th style="text-align:left;padding:8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b">Item</th><th style="text-align:right;padding:8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b">Qty</th><th style="text-align:right;padding:8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b">Price</th></tr></thead>
            <tbody>${itemRows}</tbody>
            <tfoot><tr style="border-top:2px solid #e2e8f0"><td colspan="2" style="padding:12px 0;font-weight:700;font-size:15px">Total</td><td style="padding:12px 0;text-align:right;font-weight:700;font-size:15px;color:#e63946">₹${total.toLocaleString('en-IN')}</td></tr></tfoot>
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#64748b">Payment: <strong>${paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI / QR Code'}</strong></p>
        </div>
        <div style="background:#f1f5f9;padding:20px;text-align:center;font-size:11px;color:#94a3b8">
          Sparkel Sales — Authorized Kutchina Dealer
        </div>
      </div>
    `,
  })
}

export const sendOrderStatusUpdate = async ({ to, name, orderId, status }) => {
  const statusMessages = {
    processing: 'Your order is being processed.',
    shipped: 'Great news — your order is on its way!',
    delivered: 'Your order has been delivered successfully.',
    cancelled: 'Your order has been cancelled. Contact us if you have any questions.',
  }

  await send({
    to,
    subject: `Order Update — ${status.charAt(0).toUpperCase() + status.slice(1)} (#${orderId})`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#1e3a5f;padding:32px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;letter-spacing:2px">SPARKEL SALES</h1>
        </div>
        <div style="padding:32px">
          <h2 style="font-size:18px;color:#1e3a5f">Hi ${name}, your order has been updated</h2>
          <p style="font-size:15px;color:#334155">${statusMessages[status] || `Order status updated to: ${status}`}</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:20px;margin:24px 0">
            <p style="margin:0 0 4px;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px">Order ID</p>
            <p style="margin:0;font-size:14px;font-weight:700;color:#1e3a5f">#${orderId}</p>
            <p style="margin:8px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px">Status</p>
            <p style="margin:4px 0 0;font-size:14px;font-weight:700;color:#e63946;text-transform:capitalize">${status}</p>
          </div>
        </div>
        <div style="background:#f1f5f9;padding:20px;text-align:center;font-size:11px;color:#94a3b8">
          Sparkel Sales — Authorized Kutchina Dealer
        </div>
      </div>
    `,
  })
}

export const sendInquiryNotification = async ({ adminEmail, inquiryName, inquiryEmail, inquiryPhone, product, message }) => {
  await send({
    to: adminEmail,
    subject: `New Inquiry from ${inquiryName}${product ? ` — ${product}` : ''}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#1e3a5f;padding:32px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;letter-spacing:2px">SPARKEL SALES</h1>
          <p style="color:#94a3b8;margin:8px 0 0;font-size:11px;letter-spacing:1px">NEW INQUIRY RECEIVED</p>
        </div>
        <div style="padding:32px">
          <table style="width:100%;font-size:14px;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748b;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${inquiryName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0;font-weight:600">${inquiryEmail}</td></tr>
            ${inquiryPhone ? `<tr><td style="padding:8px 0;color:#64748b">Phone</td><td style="padding:8px 0;font-weight:600">${inquiryPhone}</td></tr>` : ''}
            ${product ? `<tr><td style="padding:8px 0;color:#64748b">Product</td><td style="padding:8px 0;font-weight:600">${product}</td></tr>` : ''}
          </table>
          <div style="margin-top:20px;background:#f8fafc;border-left:4px solid #e63946;padding:16px;border-radius:0 4px 4px 0">
            <p style="margin:0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#334155">${message}</p>
          </div>
        </div>
      </div>
    `,
  })
}

export const sendInquiryAck = async ({ to, name }) => {
  await send({
    to,
    subject: 'We received your inquiry — Sparkel Sales',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#1e3a5f;padding:32px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;letter-spacing:2px">SPARKEL SALES</h1>
        </div>
        <div style="padding:32px">
          <h2 style="font-size:18px;color:#1e3a5f">Hi ${name}, we've received your inquiry!</h2>
          <p style="font-size:14px;color:#64748b;line-height:1.6">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
          <p style="font-size:14px;color:#64748b;line-height:1.6">If you need immediate assistance, please call us directly.</p>
        </div>
        <div style="background:#f1f5f9;padding:20px;text-align:center;font-size:11px;color:#94a3b8">
          Sparkel Sales — Authorized Kutchina Dealer
        </div>
      </div>
    `,
  })
}
