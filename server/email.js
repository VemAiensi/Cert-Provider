import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import env from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
app.use(cors());

// Setting up environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
env.config({ path: path.resolve(__dirname, "..", ".env") });
console.log(process.env.EMAIL, process.env.PASSWORD);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
const upload = multer();

app.post("/send-email", upload.single("image"), async (req, res) => {
  try {
    const { to, subject, html } = req.body;

    // Email options
    const mailOptions = {
      from: "vemaiensi.marasigan@neu.edu.ph", // Replace with your Gmail address
      to: to,
      subject: subject,
      html: html,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: "image/png",
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.get("/form-response", async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.FORM_ENDPOINT}?formId=${process.env.FORM_ID}`
    );

    if (!response.ok) throw new Error("Failed to fetch attendees");
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching attendees:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
