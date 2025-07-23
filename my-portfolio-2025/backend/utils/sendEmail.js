const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, message, userEmail }) => {
    if (!name || !email || !message || !userEmail) {
        throw new Error('Missing required email fields');
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `Portfolio Contact <${process.env.AUTH_EMAIL}>`,
        to: `${process.env.MY_RECEIVER_EMAIL},${userEmail}`,
        subject: 'New message from your portfolio',
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:20px;background-color:#f5f5f5;font-family:Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;">
                <tr>
                    <td style="padding:30px;background-color:#4a90e2;text-align:center;">
                        <h1 style="color:#ffffff;margin:0;font-size:24px;">New Portfolio Message</h1>
                    </td>
                </tr>
                <tr>
                    <td style="padding:30px;">
                        <p style="font-size:16px;color:#333333;">You have received a new message:</p>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #eeeeee;">
                                    <strong style="color:#333333;">Name:</strong><br>
                                    <span style="color:#666666;">${name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #eeeeee;">
                                    <strong style="color:#333333;">Email:</strong><br>
                                    <span style="color:#666666;">${email}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:10px 0;">
                                    <strong style="color:#333333;">Message:</strong><br>
                                    <div style="margin-top:10px;padding:15px;background-color:#f9f9f9;border-left:3px solid #4a90e2;color:#555555;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </div>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="font-size:14px;color:#666666;margin-top:30px;">
                            Please respond to <a href="mailto:${email}" style="color:#4a90e2;text-decoration:none;">${email}</a>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding:20px;background-color:#f8f8f8;text-align:center;">
                        <p style="font-size:12px;color:#999999;margin:0;">
                            &copy; ${new Date().getFullYear()} Portfolio Contact
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Email error:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = { sendEmail };