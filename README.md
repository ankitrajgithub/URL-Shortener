🔗 URL Shortener with QR Code
A full-stack URL Shortener application built using MERN stack.
It allows users to shorten long URLs, track clicks, and generate QR codes.

🚀 Features:
🔗 Shorten long URLs
📊 Track number of clicks
🕒 Auto timestamps (createdAt, updatedAt)
📱 Generate QR Code for short URL
⚡ Fast and simple UI
🌐 REST API backend

🏗 Project Structure:

URL-Shortener/
│
├── frontend/     → React + Tailwind CSS
├── backend/      → Node.js + Express + MongoDB
└── README.md

🖥️ Frontend

⚙️ Tech Stack
React
Tailwind CSS
Axios
react-qr-code

📂 Setup Frontend:
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

🛠️ Backend

⚙️ Tech Stack:
Node.js
Express.js
MongoDB
Mongoose
Nanoid

📂 Setup Backend:
cd backend
npm install
npm run dev


Backend runs on:
http://localhost:5000

🔐 Environment Variables (Backend)

Create a .env file inside backend/:
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000

📌 API Endpoints:

1️⃣ Create Short URL
POST /api/url

Request Body:
{
  "originalUrl": "https://example.com"
}

Response:
{
  "originalUrl": "...",
  "shortUrl": "abc123",
  "clicks": 0
}

2️⃣ Redirect to Original URL
GET /:shortUrl

Redirects to original URL

Increments click count

🧠 How It Works:
User submits a long URL.
Backend validates using:
new URL(originalUrl);
Generates unique ID using nanoid.
Stores in MongoDB.
Redirect route tracks clicks.
Frontend generates QR code using:
<QRCode value={shortUrl} size={180} />

📊 Database Schema:
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

🌍 Future Improvements:
User authentication
Analytics dashboard
Custom short URLs
Expiration time for links
Rate limiting
Deployment (Render / Vercel / Railway)