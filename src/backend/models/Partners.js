import mongoose from "mongoose";

const { Schema } = mongoose;

const PartnerSchema = new Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    partnerLogo: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Partners || mongoose.model("Partners", PartnerSchema);