import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcom To MERN Stack!");
});

app.use("/books", router);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
