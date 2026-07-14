import { useState } from "react";
import "./Contact.css";
import { portfolioApi } from "../../api/portfolio";

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
                setResponse("Message sent successfully (Demo Mode)! In production, set VITE_OWNER_USER_ID in .env.");
                setFormData({ name: "", email: "", message: "" });
                setLoading(false);
            }, 1000);
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
            setResponse("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setResponse(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <h2 className="heading">Contact Me</h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <p><strong>Email:</strong> sanjuburman01@gmail.com</p>
                    <p><strong>Phone:</strong> +91 8085319797</p>
                    <p><strong>Address:</strong> Jabalpur, Madhya Pradesh, India</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {response && <p className="response-msg">{response}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactMe;