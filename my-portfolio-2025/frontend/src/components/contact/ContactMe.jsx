export const ContactMe = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "John", email: "john@example.com", message: "Hi!" })
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit} id="contact">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message...."></textarea>
            <button type="submit">Send</button>
        </form>
    );
};
