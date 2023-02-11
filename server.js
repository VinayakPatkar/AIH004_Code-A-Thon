const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/Code-A-thon",{useNewUrlParser: true},{useUnifiedTopology: true})
mongoose.set('strictQuery', true);

const noteSchema = {
    name: String,
    email: String,
    gender: String,
    age: String,
    address: String,
    date: String
}

const Note = mongoose.model("Note", noteSchema)
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/book",function(req,res){
    res.sendFile(__dirname + "/Book_online.html");
})
app.post("/book", function(req,res){
    let newNote = new Note({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
        date: req.body.date
    });
    newNote.save();
    //res.redirect('/');
})

app.listen(3000, function(){
    console.log("server is runing on 3000");
})