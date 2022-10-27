import nodemailer from 'nodemailer'
export default (req,res)=> {
  const {name , email , message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
      from: email,
      to:  process.env.EMAIL ,
      subject: `info from '${name}'`,
      html:`'${message}'`
  }
  transporter.sendMail(mailOptions, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Mail sended", result.response)
    }
  })
}