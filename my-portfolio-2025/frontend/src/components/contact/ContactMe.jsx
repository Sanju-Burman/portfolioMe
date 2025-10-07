import { useState } from "react";
import "./contact.css";

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

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Something went wrong");

            setResponse("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setResponse(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <h2 className="heading">Contact Me</h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <p><strong>Email:</strong> sanjuburman@example.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
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