import express from "express";
import cors from "cors";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDirectory = path.join(__dirname, "data");
const csvFilePath = path.join(dataDirectory, "messages.csv");

// Create data folder if it doesn't exist
if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory, { recursive: true });
}

// CSV writer
const csvWriter = createObjectCsvWriter({
  path: csvFilePath,
  header: [
    { id: "date", title: "Date" },
    { id: "name", title: "Name" },
    { id: "email", title: "Email" },
    { id: "phone", title: "Phone" },
    { id: "message", title: "Message" },
  ],
  append: true,
});

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running.",
  });
});

// Contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    const contactData = {
      date: new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || "-",
      message: message.trim(),
    };

    await csvWriter.writeRecords([contactData]);

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `New Portfolio Message from ${contactData.name}`,
      text: `
You received a new message from your portfolio website.

Name: ${contactData.name}
Email: ${contactData.email}
Phone / WhatsApp: ${contactData.phone}

Message:
${contactData.message}

Received:
${contactData.date}
  `,
    });

    console.log("New contact message saved and email sent:");
    console.log(contactData);

    res.status(201).json({
      success: true,
      message: "Your message has been received.",
    });
  } catch (error) {
    console.error("Failed to save contact message:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save your message.",
    });
  }
});

transporter.verify((error) => {
  if (error) {
    console.error("Gmail connection failed:", error.message);
  } else {
    console.log("Gmail connection is ready.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
