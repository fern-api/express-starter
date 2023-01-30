import { Request } from "express";
import { FernApi } from "../api";

export class ImdbService extends FernApi.imdb.AbstractImdbService {
  public async createMovie(
    request: Request<never, string, FernApi.CreateMovieRequest, never>
  ): Promise<string> {
    const id = request.body.title.toLowerCase().replaceAll(" ", "-");

    // TODO, add movie to database

    return id;
  }

  public async getMovie(
    request: Request<{ movieId: string }, FernApi.Movie, never, never, never>
  ): Promise<FernApi.Movie> {
    if (request.params.movieId === "goodwill-hunting") {
      return {
        id: request.params.movieId,
        title: "Goodwill Hunting",
        rating: 4.9,
      };
    }
    throw new FernApi.MovieDoesNotExistError();
  }
}
