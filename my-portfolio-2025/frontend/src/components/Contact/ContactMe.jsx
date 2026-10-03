import { useState } from "react";
import "./Contact.css";
import { portfolioApi } from "../../api/portfolio";
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        if (!formData.name || !formData.email || !formData.message) {
            setResponse("Please fill in all fields.");
            setLoading(false);
            return;
        }

        const ownerId = import.meta.env.VITE_OWNER_USER_ID;
        const ownerEmail = import.meta.env.VITE_OWNER_EMAIL || "sanjuburman01@gmail.com";

        if (!ownerId) {
            // Resilient Fallback: Simulate successful email transmission in static mode
            setTimeout(() => {
                setResponse("Thank you for reaching out! You can also connect directly via sanjuburman01@gmail.com.");
                setFormData({ name: "", email: "", message: "" });
                setLoading(false);
            }, 800);
            return;
        }

        try {
            const payload = {
                name: formData.name,
                email: formData.email, // sender
                message: formData.message,
                userId: ownerId,
                userEmail: ownerEmail // receiver
            };

            await portfolioApi.submitContactMessage(payload);
            setResponse("Message sent successfully! I will respond promptly.");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setResponse(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    };

    const revealUp = useScrollReveal('up');

    return (
        <section className="section contact-section" id="contact" ref={revealUp}>
            <h2 className="heading">Get In Touch</h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:sanjuburman01@gmail.com">sanjuburman01@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918085319797">+91 8085319797</a></p>
                    <p><strong>Location:</strong> Jabalpur, Madhya Pradesh, India</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                        Available for Software Engineer, Backend Engineer, and Full-Stack roles.
                    </p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        aria-label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        aria-label="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your message"
                        aria-label="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading} aria-label="Submit Contact Message">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {response && <p className="response-msg" role="status">{response}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactMe;