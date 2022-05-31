import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
dotenv.config();



const PORT = process.env.PORT;

/* const CONNECTION_URL = "mongodb+srv://Uche:Xavierdominic0327@cluster0.hok6s.mongodb.net/portfolio-website?retryWrites=true&w=majority"
 */


app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  //http://localhost:5000/posts
  app.use("/posts", postRoutes);
  
  mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() =>
      app.listen(PORT, () =>
        console.log(`Database connected and server running on port: `, PORT),
      ),
    )
    .catch((error) => console.log(error));
  