const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: true,
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

const sendContactMessageMail = (req, res) => {
  const { email, name, message, ipLocal, request, date } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: true,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDIN_USER, // c'est l'adresse à partir de laquelle l'email sera envoyé
    to: process.env.SMTP_SENDIN_USER, // c'est l'adresse à laquelle l'e-mail sera envoyé
    subject: "Nouvelle demande de contact",
    html: `
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>

    </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass * {
            line-height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
        @media only screen and (max-width:480px) {
            @-ms-viewport {
                width: 320px;
            }

            @viewport {
                width: 320px;
            }
        }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->


    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
            }
        }
    </style>


    <style type="text/css">
    </style>

</head>

<body style="background-color:#f9f9f9;">


    <div style="background-color:#f9f9f9;">


        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                <tbody>
                    <tr>
                        <td
                            style="border-bottom:#a42056 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#fff;background-color:#fff;width:100%;">
                <tbody>
                    <tr>
                        <td
                            style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               style="vertical-align:bottom;width:600px;"
            >
          <![endif]-->

                            <div class="mj-column-per-100 outlook-group-fix"
                                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    style="vertical-align:bottom;" width="100%">

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation"
                                                style="border-collapse:collapse;border-spacing:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:248px;">
                                                            <img height="auto" src="https://www.externatic.fr/wp-content/uploads/2020/09/Logo-pour-site-avec-bon-gabarit.png"
                                                                style="border:0;display:block;outline:none;text-decoration:none;width:100%;"
                                                                width="auto" alt="sc" />

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">

                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:28px;font-weight:bold;line-height:1;text-align:center;color:#555;">
                                                Bonjour Admins,
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:left;color:#555;">
                                                Suite à une nouvelle demande de contact, voici les informations de
                                                l'expéditeur. Vous pouvez répondre à cette demande en cliquant
                                                directement sur le bouton ci-dessous.<br>
                                                <br></br>
                                                <b>Nom de l'expéditeur:</b> ${name}<br>
                                                <b>Email de l'expéditeur:</b> ${email}<br>
                                                <b>Contenu du message:</b><br> ${message}<br></br>


                                                <h3> Informations de sécurité </h3>
                                                <b>Adresse IP du l'expéditeur: </b> ${ipLocal}<br>
                                                <b>Requête effectuée: </b> ${request}<br>
                                                <b>Heure de la requête: </b> ${date}<br>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:50px;word-break:break-word;">

                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation" style="border-collapse:separate;line-height:100%;">
                                                <tr>
                                                    <td align="center" bgcolor="#a42056" role="presentation"
                                                        style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;"
                                                        valign="middle">
                                                        <p
                                                            style="background:#a42056;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                                                            Répondre au message
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:left;color:#525252;">
                                                <br>Si jamais le contenu du mail ne s'affiche pas correctement, veuillez
                                                cliquer sur le lien suivant: <a href="{{ https://externatic.Fr }}">lien
                                                    de redirection.</a>
                                                <br>
                                                <br><br>Bien cordialement,<br><br> Groupe Externatic<br>1 Rue Racine,
                                                44000 Nantes<br>02 85 52 26 33<br>
                                                <a href="https://externatic.fr" style="color:#a42056">externatic.fr</a>
                                            </div>

                                        </td>
                                    </tr>

                                </table>

                            </div>

                            <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               style="vertical-align:bottom;width:600px;"
            >
          <![endif]-->

                            <div class="mj-column-per-100 outlook-group-fix"
                                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align:bottom;padding:0;">

                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">

                                                    <tr>
                                                        <td align="center"
                                                            style="font-size:0px;padding:10px;word-break:break-word;">

                                                            <div
                                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;">
                                                                <a href="" style="color:#575757">Cliquez ici</a> pour
                                                                vous désabonner de notre newsletter.
                                                            </div>

                                                        </td>
                                                    </tr>

                                                </table>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


    </div>

</body>

</html>
    `,
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

const sendPasswordResetMail = (req, res) => {
  const { email, name, ipLocal, date } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: "externatic.contact@gmail.com",
      pass: "externatic2023",
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDIN_USER, // c'est l'adresse à partir de laquelle l'email sera envoyé
    to: email, // c'est l'adresse à laquelle l'e-mail sera envoyé
    subject: "Réinitialisation du mot de passe",
    html: `
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>

    </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass * {
            line-height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
        @media only screen and (max-width:480px) {
            @-ms-viewport {
                width: 320px;
            }

            @viewport {
                width: 320px;
            }
        }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->


    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
            }
        }
    </style>


    <style type="text/css">
    </style>

</head>

<body style="background-color:#f9f9f9;">


    <div style="background-color:#f9f9f9;">


        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                <tbody>
                    <tr>
                        <td
                            style="border-bottom:#a42056 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#fff;background-color:#fff;width:100%;">
                <tbody>
                    <tr>
                        <td
                            style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               style="vertical-align:bottom;width:600px;"
            >
          <![endif]-->

                            <div class="mj-column-per-100 outlook-group-fix"
                                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    style="vertical-align:bottom;" width="100%">

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation"
                                                style="border-collapse:collapse;border-spacing:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:248px;">
                                                            <img height="auto"
                                                                src="https://www.externatic.fr/wp-content/uploads/2020/09/Logo-pour-site-avec-bon-gabarit.png"
                                                                style="border:0;display:block;outline:none;text-decoration:none;width:100%;"
                                                                width="auto" alt="sc" />

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">

                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:28px;font-weight:bold;line-height:1;text-align:center;color:#555;">
                                                Bonjour ${name},
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:left;color:#555;">
                                                Une demande de réinitialisation de mot de passe a été effectuée pour
                                                votre compte. Si vous n'avez pas demandé de réinitialisation de mot de
                                                passe, vous pouvez ignorer cet e-mail. Aucune autre action n'est
                                                requise.<br></br>
                                                <br></br>
                                                <b>Identifiant:</b>${email}<br><br>

                                                <h3> Informations de sécurité </h3>
                                                <b>Adresse IP de la demande: </b>${ipLocal}<br>
                                                <b>Heure de la connexion: </b>${date}<br>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:50px;word-break:break-word;">

                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation" style="border-collapse:separate;line-height:100%;">
                                                <tr>
                                                    <td align="center" bgcolor="#a42056" role="presentation"
                                                        style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;"
                                                        valign="middle">
                                                        <!-- <p
                                                            style="background:#a42056;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                                                            Réinitialiser votre mot de passe
                                                        </p> -->
                                                        <a href="https://www.example.com"
                                                            style="background:#a42056;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;display:inline-block;padding:10px 20px;border-radius:4px;">Réinitialiser
                                                            votre mot de passe</a>
                                                    </td>
                                                </tr>

                                            </table>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:left;color:#525252;">
                                                <b>Sécurité:</b>
                                                <p>
                                                    Si jamais vous n'êtes pas à l'origine de cette demande
                                                    veuillez ne pas prendre compte de cet email.
                                                </p>
                                                <br>
                                                <br>Si jamais le contenu du mail ne s'affiche pas correctement, veuillez
                                                cliquer sur le lien suivant: <a href="{{ https://externatic.Fr }}">lien
                                                    de redirection.</a>
                                                <br>
                                                <br><br>Bien cordialement,<br><br> Groupe Externatic<br>1 Rue Racine,
                                                44000 Nantes<br>02 85 52 26 33<br>
                                                <a href="https://externatic.fr" style="color:#a42056">externatic.fr</a>
                                            </div>

                                        </td>
                                    </tr>

                                </table>

                            </div>

                            <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="Margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               style="vertical-align:bottom;width:600px;"
            >
          <![endif]-->

                            <div class="mj-column-per-100 outlook-group-fix"
                                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align:bottom;padding:0;">

                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">

                                                    <tr>
                                                        <td align="center"
                                                            style="font-size:0px;padding:10px;word-break:break-word;">

                                                            <div
                                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;">
                                                                <a href="" style="color:#575757">Cliquez ici</a> pour
                                                                vous désabonner de notre newsletter.
                                                            </div>

                                                        </td>
                                                    </tr>

                                                </table>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


    </div>

</body>

</html>
    `,
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
  sendContactMessageMail,
  sendPasswordResetMail,
};
