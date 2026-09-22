// src/services/pdf.service.js
import { PDFDocument, StandardFonts } from "pdf-lib";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = "uploads/extraits";
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const embedImage = async (pdfDoc, url) => {
    const ext = path.extname(url).toLowerCase();
    const bytes = await fs.promises.readFile(url);
    return ext === '.png' ? pdfDoc.embedPng(bytes) : pdfDoc.embedJpg(bytes);
};

const pdfService = {

    genererExtrait: async (demande, greffier, procureur, condamnations) => {
        const pdfDoc = await PDFDocument.create();
        //ici c'est le format d'une image A4 le 595,842
        const page = pdfDoc.addPage([595, 842]); 

        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        let y = 780;
        page.drawText("REPUBLIQUE DU CAMEROUN", { x: 190, y, size: 12, font: fontBold });
        y -= 20;
        page.drawText("EXTRAIT DE CASIER JUDICIAIRE - BULLETIN N°3", { x: 90, y, size: 14, font: fontBold });
        y -= 40;

        const lignes = [
            `Numéro de demande : ${demande.numeroDemande}`,
            `Nom : ${demande.nom}`,
            `Prénom : ${demande.prenom}`,
            `Né(e) le : ${new Date(demande.dateNaisssance).toLocaleDateString('fr-FR')} à ${demande.lieuNaissance}`,
            `Fils/Fille de : ${demande.nomPere} et de ${demande.nomMere}`,
            `Profession : ${demande.profession}`,
            `Domicile : ${demande.domicile}`,
            `Nationalité : ${demande.nationalite}`
        ];
        for (const ligne of lignes) {
            page.drawText(ligne, { x: 60, y, size: 11, font });
            y -= 22;
        }
         
        if (condamnations.length === 0) {
            page.drawText("Le présent bulletin ne mentionne aucune condamnation.", { x: 60, y, size: 11, font });
            y -= 20;
        } else{
            page.drawText("Le présent bulletin mentionne la/les condamnation(s) suivante(s) :", { x: 60, y, size: 11, font: fontBold });
            y -= 20;
            for (const c of condamnations) {
            page.drawText(
                `- ${c.infraction}, ${c.tribunal}, le ${new Date(c.dateCondamnation).toLocaleDateString('fr-FR')} (${c.peine})`,
                { x: 70, y, size: 10, font }
            );
            y -= 18;
          }
        }

        // y -= 20;
        // page.drawText("Le présent bulletin ne mentionne aucune condamnation.", { x: 60, y, size: 11, font });

        //gestion de la sugnature et du cahet

        y = 100;
        if (greffier.signatureUrl) {
            const img = await embedImage(pdfDoc, greffier.signatureUrl);
            page.drawImage(img, { x: 60, y, width: 100, height: 50 });
        }
        if (greffier.cachetUrl) {
            const img = await embedImage(pdfDoc, greffier.cachetUrl);
            page.drawImage(img, { x: 60, y: y - 60, width: 80, height: 80 });
        }
        page.drawText("Le Greffier en Chef", { x: 60, y: y - 75, size: 10, font });

        if (procureur.signatureUrl) {
            const img = await embedImage(pdfDoc, procureur.signatureUrl);
            page.drawImage(img, { x: 350, y, width: 100, height: 50 });
        }
        if (procureur.cachetUrl) {
            const img = await embedImage(pdfDoc, procureur.cachetUrl);
            page.drawImage(img, { x: 350, y: y - 60, width: 80, height: 80 });
        }
        page.drawText("Le Procureur de la République", { x: 350, y: y - 75, size: 10, font });

       

        const pdfBytes = await pdfDoc.save();
        const filePath = path.join(OUTPUT_DIR, `${demande.numeroDemande}.pdf`);
        await fs.promises.writeFile(filePath, pdfBytes);

        return filePath;
    }
};

export default pdfService;