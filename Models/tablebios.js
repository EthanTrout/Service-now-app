const mongoose = require ("mongoose");
const {Schema} = mongoose;

const tablebiosSchema = new Schema({
    u_table_name:{
        type:String,
        required:true
    },
    u_description:{
        type:String,
        required:true
        
    },
    u_field_label:{
        type:String,
        
    },
   
   
})

const TableBios = mongoose.model("TableBios",tablebiosSchema)

module.exports = TableBios;