const upload = {
    updatePassword: async (req, res) => {
    try {
        const { ancienMotDePasse, nouveauMotDePasse } = req.body;

        if (!ancienMotDePasse || !nouveauMotDePasse) {
            return res.status(httpCode.BAD_REQUEST).json({ message: 'Tous les champs sont requis' });
        }

        const user = await prisma.users.findUnique({ where: { id: req.user.id } });
        if (!user) {
            return res.status(httpCode.NOT_FOUND).json({ message: 'Utilisateur introuvable' });
        }

        const motDePasseValide = await bcrypt.compare(ancienMotDePasse, user.motDePasse);
        if (!motDePasseValide) {
            return res.status(httpCode.UNAUTHORIZED).json({ message: 'Ancien mot de passe incorrect' });
        }

        const hashPassword = await bcrypt.hash(nouveauMotDePasse, 10);

        await prisma.users.update({
            where: { id: user.id },
            data: { motDePasse: hashPassword }
        });

        return res.status(httpCode.OK).json({ message: 'Mot de passe mis à jour avec succès' });

    } catch (error) {
        return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
},

uploadSignatureCachet: async (req, res) => {
    try {
        if (!req.files || (!req.files['signature'] && !req.files['cachet'])) {
            return res.status(httpCode.BAD_REQUEST).json({ message: "Veuillez fournir votre signature et/ou votre cachet" });
        }

        const dataMaj = {};
        if (req.files['signature']) {
            dataMaj.signatureUrl = req.files['signature'][0].path;
        }
        if (req.files['cachet']) {
            dataMaj.cachetUrl = req.files['cachet'][0].path;
        }

        const user = await prisma.users.update({
            where: { id: req.user.id },
            data: dataMaj
        });

        return res.status(httpCode.OK).json({
            message: 'Signature et/ou cachet enregistrés avec succès',
            signatureUrl: user.signatureUrl,
            cachetUrl: user.cachetUrl
        });

    } catch (error) {
        return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
}