const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASSWORD // Your email password
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email address
    subject: `Contact form submission from ${name}`,
    text: message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString())
    }
    res.status(200).send('Email sent: ' + info.response)
  })
})

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
