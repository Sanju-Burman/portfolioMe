import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

export const handleContact = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const contact = await Contact.create({ name, email, message });
        await sendEmail({ name, email, message });
        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
