module.exports = app => {
    const file = require("../controllers/file.controller.js");

    var router = require("express").Router();

    router.post("/uploadProdDesFil", file.uploadProdDesFil);
    router.post("/uploadProdFil", file.uploadProdFil);
    router.post("/uploadSemiProdDesFil", file.uploadSemiProdDesFil);
    router.post("/uploadSemiProdFil", file.uploadSemiProdFil);
    router.post("/uploadProjFil", file.uploadProjFil);
    router.get("/getListProdDesFiles", file.getListProdDesFiles);
    router.get("/getListProdFiles", file.getListProdFiles);
    router.get("/getListSemiProdDesFiles", file.getListSemiProdDesFiles);
    router.get("/getListSemiProdFiles", file.getListSemiProdFiles);
    router.get("/getListProjFiles", file.getListProjFiles);
    router.get("/downloadProdDesFil/:name", file.downloadProdDesFil);
    router.get("/downloadProdFil/:name", file.downloadProdFil);
    router.get("/downloadSemiProdDesFil/:name", file.downloadSemiProdDesFil);
    router.get("/downloadSemiProdFil/:name", file.downloadSemiProdFil);
    router.get("/downloadProjFil/:name", file.downloadProjFil);
    
    app.use('/api/file', router);
};
