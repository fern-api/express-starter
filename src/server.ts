import express from "express";
import { register } from "./api";
import { ImdbService } from "./services/imdb";

const PORT = 8080;

const app = express();

register(app, {
  imdb: new ImdbService(),
});

app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
