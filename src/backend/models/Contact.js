import mongoose from "mongoose";

const {Schema} =mongoose

const ContactSchema=new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    message:{type:String,require:true},
})

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
