import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD
    }
});


const emailService = {
     sendDemandeValidee: async (usermail, username, numeroDemande) => {
        try {
            const mailOptions = {
                from: `Casier Judiciaire Cameroun <${process.env.EMAIL_USER}>`,
                to: usermail,
                subject: "Votre extrait de casier judiciaire est prêt",
                text: `Votre demande ${numeroDemande} a été validée. Vous pouvez désormais la télécharger.`,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #060657; text-align: center;">Votre demande a été traitée avec succès</h2>
                        <p>Bonjour, ${username}</p>
                        <p>Votre demande d'extrait de casier judiciaire portant le numéro <strong>${numeroDemande}</strong> a été validée par le Procureur de la République.</p>
                        <p>Vous pouvez dès à présent vous connecter à la plateforme pour télécharger votre document.</p>
                        <p style="font-size: 0.9em; color: #777;">Cordialement,<br>La plateforme de dématérialisation du casier judiciaire</p>
                    </div>
                `
            };

            const info = await transporter.sendMail(mailOptions);
            console.log(`Mail de validation envoyé à ${usermail}, (id : ${info.messageId})`);
            return info;
        } catch (error) {
            console.error("Echec lors de l'envoie du mail de validation :", error);
        }
    },


    sendDemandeRejetee: async (usermail, username, numeroDemande, motif) => {
        try {
            const mailOptions = {
                from: `Casier Judiciaire Cameroun <${process.env.EMAIL_USER}>`,
                to: usermail,
                subject: "Votre demande de casier judiciaire a été rejetée",
                text: `Votre demande ${numeroDemande} a été rejetée. Motif : ${motif}`,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #C62828; text-align: center;">Votre demande a été rejetée</h2>
                        <p>Bonjour, ${username}</p>
                        <p>Votre demande d'extrait de casier judiciaire portant le numéro <strong>${numeroDemande}</strong> a été rejetée pour le motif suivant :</p>
                        <p style="background:#fdecea; padding:10px; border-radius:4px;">${motif}</p>
                        <p>Vous pouvez soumettre une nouvelle demande en corrigeant les éléments concernés.</p>
                        <p style="font-size: 0.9em; color: #777;">Cordialement,<br>La plateforme de dématérialisation du casier judiciaire</p>
                    </div>
                `
            };

            const info = await transporter.sendMail(mailOptions);
            console.log(`Mail de rejet envoyé à ${usermail}, (id : ${info.messageId})`);
            return info;
        } catch (error) {
            console.error("Echec lors de l'envoie du mail de rejet :", error);
        }
    }
}


export default emailService