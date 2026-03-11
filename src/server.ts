import cors from "cors";
import express from "express";
import multer from "multer";
import path from "path";
import { register } from "./api/generated";
import imdb from "./services/imdb";

const PORT = process.env.PORT ?? 8080;

const app = express();

//enable cors
app.use(cors());

register(
  app,
  {
    imdb,
  },
  {
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "../");
      },
      filename: (req, file, cb) => {
        cb(
          null,
          `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
        );
      },
    }),
    limits: {
      fileSize: 1024 * 1024 * 100, // 100MB file size limit for videos
    },
  },
);

app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
