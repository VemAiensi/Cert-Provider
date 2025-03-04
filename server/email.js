import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import env from "dotenv";

const app = express();
app.use(cors());
env.config();
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
