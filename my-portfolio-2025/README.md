# portfolioMe
# 🌌 Sanju Burman's Developer Portfolio

Welcome to my professional portfolio website! This project showcases my skills, projects, education, and contact information in a modern, responsive design. Built with the MERN stack and optimized for hiring managers and tech recruiters.

## 🚀 Tech Stack

| Frontend        | Backend         | Database  | Tools & Services       |
|-----------------|-----------------|-----------|-------------------------|
| React.js        | Node.js         | MongoDB   | VS Code, Postman       |
| HTML5, CSS3     | Express.js      | Mongoose  | Git, GitHub, Cloudinary |
| React Icons     | Nodemailer      |           | Vite                   |

---

## 📸 Features

- 🌙 Light/Dark Theme Toggle with Galaxy Background
- 📱 Fully Responsive (Mobile, Tablet, Laptop)
- 📬 Contact Form with Email Integration (Nodemailer)
- 🛠️ Skill Cards with Familiarity Bars and Tech Icons
- 🗂️ Projects Timeline with Images, GitHub & Live Demo Links
- 🎓 Education Timeline
- 📄 Resume Download Button
- 🔗 LinkedIn & GitHub Integration
- 🧭 Smooth Scroll & Active Navigation Highlight

---

## 📁 Project Structure

frontend/src/
├── api/
├── components/
│ ├── Navbar/
│ ├── Home/
│ ├── Skills/
│ ├── Projects/
│ ├── Education/
│ ├── Contact/
│ └── Footer/
├── assets/
├── styles/
├── hooks/
├── context/
├── App.jsx
└── main.jsx

backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── validators/
└── server.js

---

## 🔧 Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sanju-Burman/portfolioMe.git
    cd portfolioMe
    ```

2.  **Install all dependencies (frontend & backend):**

    ```bash
    npm run install:all
    ```

3.  **Run the application concurrently:**

    ```bash
    npm run dev
    ```

---

## 📬 Environment Variables

Create a `.env` file in the `backend` folder (you can copy `backend/.env.example`):

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
AUTH_EMAIL=your_smtp_email@example.com
AUTH_EMAIL_PASS=your_smtp_app_password
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
MY_RECEIVER_EMAIL=your_personal_email@example.com
JWT_SECRET=your_super_secret_jwt_key
CLIENT_ORIGIN=http://localhost:5173
NODE_ENV=development
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_OWNER_USER_ID=your_mongodb_admin_user_id
VITE_OWNER_EMAIL=your_personal_email@example.com
```
---
## 📄 Resume
You can find and download my resume directly from the homepage using the “Download CV” button.

---
## 🌐 Live Demo
Live Demo: https://portfolio-me-lilac-eta.vercel.app/

---
## 📬 Contact
If you're hiring or would like to collaborate, feel free to connect:

---
💼 LinkedIn: Sanju Burman

💻 GitHub: @Sanju-Burman

📧 Email: aashusondhiya8@gmail.com

---

## 📜 License
This project is licensed under the MIT License.
