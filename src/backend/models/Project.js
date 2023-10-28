import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  logo: { type: String, required: true },
  topColor: { type: String },
  bottomColor: { type: String },
  fontColor: { type: String},
  image: { type: String, required: true },
  category: { type: String,required: true},
  intro: { type: String, required: true },
  body: { type: String, required: true },
  conclusion: { type: String, required: true },
  extra: { type: String },
  tools: [{
        tool: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Tool',
        },
      }],
  gitUrl: { type: String, required: true },
  liveUrl: { type: String, required: true },
});

//If the Post collection does not exist create a new one.
export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
