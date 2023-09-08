export const PORT = 5555;

export const mongoDBURL =
  "mongodb+srv://root:root@cluster0.9igfx4g.mongodb.net/books-collection?retryWrites=true&w=majority";

export const mongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const mongoDBConnectionSuccess = () => {
  console.log("MongoDB connection SUCCESS");
};

export const mongoDBConnectionFailure = (error) => {
  console.log("MongoDB connection FAILURE");
  console.log(error);
};

// More ideas
// https://www.freecodecamp.org/news/how-to-build-a-restful-api-with-node-js-and-express-js/
