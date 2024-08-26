const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();


const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

   if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }


  // Configure the transporter for your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    ignoreTLS: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD
    }
  });

  transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

  // Setup email data
  let mailOptions = {
    from: {
      name: name,
      address: email
    }, 
    to: process.env.USER_EMAIL,
    subject: subject,
    text: `${message}.
    Email: ${email}`
  };
 
  // Send email
  try {
    console.log(email)
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(`Error sending message: ${`Missing details for ${mailOptions.subject} and ${mailOptions.to}. Info: ${info}`}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});