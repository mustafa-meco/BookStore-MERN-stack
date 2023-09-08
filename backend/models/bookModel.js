import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);

// more ideas
// https://www.freecodecamp.org/news/how-to-build-a-restful-api-with-node-js-and-express-js/
// suggest more ideas
