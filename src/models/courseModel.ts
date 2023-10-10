import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
      required: true,
      type: String
  },
  description: {
      required: true,
      type: String
  },
  cover: {
    required: true,
    type: String
  },
  rating: {
    required: true,
    type: Number
  },
  price: {
    required: true,
    type: Number
  },
  createdOn: {
    type: { type: Date, default: Date.now }
  },
  link: {
    required: true,
    type: String
  },
  type: {
    required: true,
    type: String
  },
  comments: {
    required: false,
    type: [{ body: String, date: Date }]
  }
});

export const courses = mongoose.models.course ?? mongoose.model("course", schema);