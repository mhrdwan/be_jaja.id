const saltRounds = 10;
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
async function buatHashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.error(err);
  }
}

async function comparePassword(password, passwordhash) {
  try {
    password = String(password);
    const hash = await bcrypt.compare(password, passwordhash);
    return hash;
  } catch (err) {
    console.error(err);
  }
}

///function kirim email
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mh.ridwan48@gmail.com",
    pass: "aord zpja sbfo qicm",
  },
});
async function kirimEmai({ from, to, subject, text, bodyHtml }) {
  try {
    const info = await transporter.sendMail({
      from: `"Verifikasi Email Jaja.id" <${from}>`,
      to,
      subject,
      text,
      html: bodyHtml,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = { buatHashPassword, comparePassword, kirimEmai };
