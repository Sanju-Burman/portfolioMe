import { useState } from "react";
import "./contact.css";

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await fetch("http://localhost:5000/api/contact", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData)
        // });
        // const data = await res.json();
        // console.log(data);
        console.log(formData);
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="contact heading">Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message..." rows="5" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};