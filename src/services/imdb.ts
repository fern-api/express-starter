// this `FernApi` export is generated from your organization name in fern.config.json:
import { FernApi } from "../api";
import { ImdbService } from "../api/generated/api/resources/imdb/service/ImdbService";

export default new ImdbService({
  createMovie: (req, res) => {
    const id = req.body.title.toLowerCase().replaceAll(" ", "-");

    // TODO, add movie to database

    return res.send(id);
  },
  getMovie: (req, res) => {
    if (req.params.movieId === "goodwill-hunting") {
      res.send({
        id: req.params.movieId,
        title: "Goodwill Hunting",
        rating: 4.9,
      });
    } else {
      throw new FernApi.MovieDoesNotExistError();
    }
  },
  uploadMovie: async (req, res) => {
    console.log("Request:", {
      file: req.file,
      body: req.body,
      params: req.params,
    });
    // Handle the uploaded movie
    await res.send();
  },
});
