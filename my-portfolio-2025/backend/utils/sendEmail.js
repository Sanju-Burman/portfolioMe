import nodemailer from 'nodemailer';

const sendEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your SMTP
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: message,
    });
};

export default sendEmail;
