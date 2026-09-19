import multer from "multer";
import fs from 'fs'
import path from "path";


const UPLOAD_DIR = 'uploads/signatures'

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const userId = req.user ? req.user.id : 'anonymous';
        cb(null, `${userId}-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error("Seules les images PNG ou JPG sont acceptées pour la signature ou le cachet."));
    }
};

const uploadSignatureCachet = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1 * 1024 * 1024 } 
});

export default uploadSignatureCachet