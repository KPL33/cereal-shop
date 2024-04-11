import nodemailer from "nodemailer";

const sendEmail = (recipientEmail) => {
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

  transporter.sendMail(
    {
      to: recipientEmail,
      from: process.env.EMAIL_USER,
      subject: "Welcome to Against The Grains!",
      html: `<h2 style="color:blue;font-size:20px;">
      <em>Thank you for registering. This is a fictitious company and this email is for demonstration purposes only.</em>
    </h2>`,
    },
    (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    }
  );
};

export default sendEmail;
