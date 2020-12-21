const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
//productDesignFiles
let storageProdDesFil = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/" + "productDesignFiles/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});
//productFiles
let storageProdFil = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/" + "productFiles/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});
//projectFiles
let storageProjFil = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/" + "projectFiles/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});
//semiProductFiles
let storageSemiProdFil = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/" + "semiProductFiles/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});
//semiProductDesginFiles
let storageSemiProdDesFil = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/" + "semiProductDesignFiles/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFileProdDesFil = multer({
    storage: storageProdDesFil,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileProdFil = multer({
    storage: storageProdFil,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileProjFil = multer({
    storage: storageProjFil,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileSemiProdFil = multer({
    storage: storageSemiProdFil,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileSemiProdDesFil = multer({
    storage: storageSemiProdDesFil,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddlewareProdDesFil = util.promisify(uploadFileProdDesFil);
let uploadFileMiddlewareProdFil = util.promisify(uploadFileProdFil);
let uploadFileMiddlewareProjFil = util.promisify(uploadFileProjFil);
let uploadFileMiddlewareSemiProdDesFil = util.promisify(uploadFileSemiProdDesFil);
let uploadFileMiddlewareSemiProdFil = util.promisify(uploadFileSemiProdFil);
module.exports = {
    uploadFileMiddlewareProdDesFil,
    uploadFileMiddlewareProdFil,
    uploadFileMiddlewareProjFil,
    uploadFileMiddlewareSemiProdDesFil,
    uploadFileMiddlewareSemiProdFil
};