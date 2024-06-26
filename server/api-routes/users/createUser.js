import nodemailer from "nodemailer";
import createUser from "../../controllers/user/createUser.js";
import express from "express";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com", // SMTP server address for Yahoo Mail
  port: 465, // SMTP port (SSL) for Yahoo Mail
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // Your Yahoo email address
    pass: process.env.EMAIL_PASS, // Your Yahoo email password
  },
  debug: true, // Enable debug mode for detailed SMTP communication
});

const router = express.Router();

// Route for creating a new user
router.post("/", async (req, res) => {
  try {
    // Extract user data from the request body
    const userData = req.body;

    // Call the user controller function to create the new user
    const newUser = await createUser(userData);

    // Send welcome email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender email address
      to: newUser.email, // Recipient email address (assuming newUser.email contains the user's email)
      subject: "Welcome to Against The Grains!",
      html: `<h2 style="color:blue;font-size:20px;">
      <em>Thank you for registering. This is a fictitious company and this email is for demonstration purposes only. We promise, we won't share your information! 😊</em>
    </h2>`,
    });

    // Send a success response with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    // Handle errors
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
