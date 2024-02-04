import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
  session: {
    type: Object,
    required: true,
  },
});

const Session = model("Session", sessionSchema);

export default Session;
