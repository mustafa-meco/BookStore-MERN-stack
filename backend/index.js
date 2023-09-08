import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1, Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2, Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// TODOs
// 1. Add a route for updating a book
// 2. Add a route for deleting a book
// 3. Add a route for searching a book by title
// 4. Add a route for searching a book by author
// 5. Add a route for searching a book by publishYear
// 6. Add a route for searching a book by title and author
// 7. Add a route for searching a book by title and publishYear
// 8. Add a route for searching a book by author and publishYear
// 9. Add a route for searching a book by title, author and publishYear
// 10. Add a route for searching a book by title, author and publishYear
