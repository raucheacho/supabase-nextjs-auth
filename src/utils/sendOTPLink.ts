import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function sendOTPLink(
  email: string,
  type: any,
  request: NextRequest,
) {
  const supabaseAdmin = getSupabaseAdminClient();

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type,
    },
  );

  const user = linkData.user;

  if (error || !user) {
    return false;
  }

  const { hashed_token } = linkData.properties;

  // Création du lien de vérification
  const constructedLink = new URL(
    `/auth/verify?hashed_token=${hashed_token}&type=${type}`,
    request.url,
  );

  const isProd = process.env.NODE_ENV === "production";

  // Configuration du transporteur d'emails
  const transporter = nodemailer.createTransport(
    isProd
      ? {
        host: "smtp.resend.com",
        port: 465,
        secure: true,
        auth: {
          user: "resend",
          pass: process.env.RESEND_SMTP_KEY,
        },
      }
      : {
        host: "127.0.0.1",
        port: 1025,
        secure: false,
      },
  );

  // Contenu de l’email selon le type de lien
  let mailSubject = "";
  let initialSentence = "";
  let sentenceEnding = "";

  if (type === "signup") {
    mailSubject = "Activez votre compte";
    initialSentence = "Bonjour, vous vous êtes inscrit avec succès !";
    sentenceEnding = "activer votre compte";
  } else if (type === "recovery") {
    mailSubject = "Demande de nouveau mot de passe";
    initialSentence =
      "Bonjour, vous avez demandé à changer votre mot de passe !";
    sentenceEnding = "le modifier";
  } else {
    mailSubject = "Lien magique de connexion demandé";
    initialSentence =
      "Bonjour, vous avez demandé un lien magique pour vous connecter !";
    sentenceEnding = "vous connecter";
  }

  // Envoi de l’e-mail
  await transporter.sendMail({
    from: "abonne-toi@stp.merci",
    to: email,
    subject: mailSubject,
    html: `
    <h1>${initialSentence}</h1>
    <p>Cliquez <a href="${constructedLink.toString()}">ici</a> pour ${sentenceEnding}.</p>
    `,
  });

  return true;
}
