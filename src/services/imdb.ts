import { FernApi } from "../api";
import { ImdbService } from "../api/generated/api/resources/imdb/service/ImdbService";

export default new ImdbService({
  createMovie: (req) => {
    const id = req.body.title.toLowerCase().replaceAll(" ", "-");

    // TODO, add movie to database

    return id;
  },
  getMovie: (req) => {
    if (req.params.movieId === "goodwill-hunting") {
      return {
        id: req.params.movieId,
        title: "Goodwill Hunting",
        rating: 4.9,
      };
    }
    throw new FernApi.MovieDoesNotExistError();
  },
});
