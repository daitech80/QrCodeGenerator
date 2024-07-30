//qrcode generator  by  Node JS  / Express and EJS 


const express = require("express");
const ejs = require('ejs')
const path = require('path')
const qrcode = require('qrcode');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.use(express.static('public'))
app.get("/", (req, res, next) => {
    res.render("generate");

});
app.post("/index", (req, res, next) => {
    const textMasgebat =req.body.text;
    qrcode.toDataURL(textMasgebat, (err, src) => {
        res.render('qrcodeScan', {
            qrGen: src,
        });
    })
   

});

app.listen(port, 
    console.log(`the server runnimg on port ${port}`));
