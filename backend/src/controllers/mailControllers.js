const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDIN_USER, // c'est l'adresse à partir de laquelle l'email sera envoyé
    to: email, // c'est l'adresse à laquelle l'e-mail sera envoyé
    subject: "Confirmation de création de compte",
    text: "Bienvenue! Nous vous confirmons la création de votre compte sur la plateforme Externatic! Pour vous connecter, cliquez sur ce lien et entrez votre identifant et mot de passe : http://localhost:3000/login. Bien cordialement, Votre équipe Externatic.",
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message envoyé");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Quelque chose a mal tourné");
    });
};

module.exports = {
  sendContactMail,
};
