import nodemailer from "nodemailer";

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

const sendContactFormEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send the contact email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender email address
      to: "gitajob@yahoo.com", // Recipient email address (replace with your recipient)
      subject: "New message from contact form",
      html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    });

    // Send response
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

export default sendContactFormEmailController;
