import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb)
        {
            cb(null, "uploads")
        },
        filename:function(req, file, cb)
        {

            cb(null, file.fieldname + "_" + Date.now() + ".jpg")
        }
    })
}).single("user_file");


app.post('/upload', upload, (req, res) =>{
    res.send("file uploaded");
});

app.listen(5000);