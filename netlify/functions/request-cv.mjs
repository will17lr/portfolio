import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import nodemailer from "nodemailer";

const allowedOrigin = "https://will17lr.github.io";

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function getEnv(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name];
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9+\s().-]{8,20}$/.test(phone);
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Méthode non autorisée." }, 405);
  }

  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const jobTitle = String(body.jobTitle || "").trim();
    const recruitment = String(body.recruitment || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim();
    const consent = Boolean(body.consent);

    if (
  !name ||
  !company ||
  !jobTitle ||
  !recruitment ||
  !email ||
  !phone ||
  !consent
) {
  return jsonResponse(
    {
      error:
        "Nom, entreprise, poste occupé, recrutement en cours, email, téléphone et consentement sont obligatoires.",
    },
    400
  );
}

if (!isValidEmail(email)) {
  return jsonResponse({ error: "Adresse email invalide." }, 400);
}

if (!isValidPhone(phone)) {
    return jsonResponse({ error: "Numéro de téléphone invzlide." }, 400);
}

    cloudinary.config({
      cloud_name: getEnv("CLOUDINARY_CLOUD_NAME"),
      api_key: getEnv("CLOUDINARY_API_KEY"),
      api_secret: getEnv("CLOUDINARY_API_SECRET"),
      secure: true,
    });

    const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60;

    const cvUrl = cloudinary.utils.private_download_url(
      getEnv("CLOUDINARY_CV_PUBLIC_ID"),
      "pdf",
      {
        resource_type: "raw",
        type: "private",
        expires_at: expiresAt,
        attachment: true,
      }
    );

    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST"),
      port: Number(getEnv("SMTP_PORT")),
      secure: getEnv("SMTP_SECURE") === "true",
      auth: {
        user: getEnv("SMTP_USER"),
        pass: getEnv("SMTP_PASS"),
      },
    });

    await transporter.sendMail({
      from: `"Wilfried Vogler" <${getEnv("SMTP_FROM")}>`,
      to: email,
      subject: "Votre lien temporaire pour télécharger mon CV",
      html: `
        <p>Bonjour ${name},</p>

        <p>Merci pour votre intérêt.</p>

        <p>Voici le lien temporaire pour télécharger mon CV :</p>

        <p>
          <a href="${cvUrl}">Télécharger le CV de Wilfried Vogler</a>
        </p>

        <p>Ce lien expire dans environ 1 heure.</p>

        <p>Cordialement,<br>Wilfried Vogler</p>
      `,
    });

    await transporter.sendMail({
      from: `"Portfolio Wilfried" <${getEnv("SMTP_FROM")}>`,
      to: getEnv("OWNER_EMAIL"),
      subject: "Nouvelle demande de CV depuis le portfolio",
      html: `
        <h2>Nouvelle demande de CV</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Message :</strong> ${message || "Aucun message"}</p>
      `,
    });

    return jsonResponse({
      success: true,
      message: "Votre demande a bien été envoyée. Le lien du CV arrive par email.",
    });
  } catch (error) {
    console.error(error);

    return jsonResponse(
      { error: "Erreur serveur. La demande n’a pas pu être envoyée." },
      500
    );
  }
}