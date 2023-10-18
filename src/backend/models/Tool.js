import mongoose from "mongoose";

const {Schema}=mongoose;

const ToolSchema= new Schema(
    {
        name:{type:String,required:true},
        logo:{type:String,required:true},
    }
)

export default mongoose.models.Tool || mongoose.model("Tool", ToolSchema);