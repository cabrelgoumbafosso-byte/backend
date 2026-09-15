import multer from "multer";
import fs from 'fs'
import path from "path";


const UPLOAD_DIR = 'uploads/pieces_jointes';

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const userId = req.user ? req.user.id : 'anonymous';
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${userId}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Format de fichier non supporté. Veuillez uploader un PDF, PNG ou JPG.'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } 
});

export default upload

// import multer from "multer";
// import path from "path"

// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, "uploads/signatures")
//     },
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname) // .png
//         cb(null, `${req.user.id}-${file.fieldname}-${Date.now()}${ext}`)
//     }
// })

// const  fileFilter = (req, file, cb)=>{
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
//          cb(null, true)   
//     }else{
//          cb(new Error("Seulement PNG / JPG accepté"), false)
//     }
// }


// const upload = multer({storage, fileFilter, limits:{fileSize: 2 * 1024 * 1024}})

// export default upload