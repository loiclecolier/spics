import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "loic.lecolier@gmail.com",
      from: "loic.lecolier@gmail.com",
      subject: "Spicx - Nouveau message",
      html: `
        <h3>Nouveau message de ${req.body.firstname} ${req.body.name}</h3>
        <ul style="list-style-type: none">
          ${req.body.company !== "" ? "<li><strong>Entreprise</strong> : " + req.body.company + "</li>" : ""}
          <li><strong>Adresse e-mail</strong> : ✉️${req.body.email}</li>
          <li><strong>Message</strong> : ${req.body.message}</li>
        </ul>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;