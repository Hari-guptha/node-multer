const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.set("viewengine","ejs");
app.use(express.static("views"))

app.get("/",(req,res)=>{
    res.render('upload.ejs')
})


const storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null,'images')
    },
    filename: (req,file, cb)=>{
        console.log(file)
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload =multer({storage:storage})



app.post('/upload',upload.single("image"),(req,res)=>{
    res.send("image uploaded")
})


app.listen(3001,()=>{
    console.log("listening on 3001")
})