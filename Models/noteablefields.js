const mongoose = require ("mongoose");
const {Schema} = mongoose;

const noteablefieldsSchema = new Schema({
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
    u_field_name:{
        type:String,
        lowercase:true
    },
   
})

const NoteableFields = mongoose.model("NoteableFields",noteablefieldsSchema)

module.exports =NoteableFields;