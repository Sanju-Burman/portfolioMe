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
            <h2 className="contact heading">Share Your Thought 👇</h2>
            <div>
                <div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Thoughts..." rows="5" value={formData.message} onChange={handleChange} required />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};