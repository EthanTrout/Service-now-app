const express = require("express");
const path =require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const NoteableFields = require("./Models/noteablefields");
 const TableBios = require("./Models/tablebios");

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Sams-App');
  console.log('connected to db Sams-app')
}

const app =express();

app.engine("ejs",ejsMate)
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/tables",async (req,res)=>{
    const tablebios = await TableBios.find({});
    
    res.render("tables/index",{tablebios})
})

app.get("/tables/:name",async (req,res)=>{
    const name = req.params.name;
    const table = await TableBios.findOne({u_table_name:name},{});
    const fields = await NoteableFields.find({u_table_name:name},{})
    const description =(table.u_description)
    const tag =[];
    for(let letter of description){
        
    };
    res.render("tables/show",{table,fields})
})

app.listen(3000,()=>{
    console.log("serving on port 3000")
})