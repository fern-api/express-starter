import cors from "cors";
import express from "express";
import { register } from "./api/generated";
import imdb from "./services/imdb";

const PORT = process.env.PORT ?? 8080;

const app = express();

//enable cors
app.use(cors());

register(app, {
  imdb,
});

app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
