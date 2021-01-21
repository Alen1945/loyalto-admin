import {
  GET_DETAIL_MOVIE_START,
  GET_DETAIL_MOVIE_SUCCESS,
  GET_DETAIL_MOVIE_ERROR,
} from "./actionTypes";
import { getData } from "../../helpers/CRUD";
export const getDetailMovie = (idMovie: number | string) => async (
  dispatch: any
) => {
  await dispatch({
    type: GET_DETAIL_MOVIE_START,
  });
  try {
    console.log(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=2fccde01a371b106b09a241d6d1d5b49`
    );
    const detailMovie = await getData(
      `/3/movie/${idMovie}?api_key=2fccde01a371b106b09a241d6d1d5b49`
    );
    if (detailMovie.status === 200) {
      await dispatch({
        type: GET_DETAIL_MOVIE_SUCCESS,
        payload: detailMovie.data,
      });
    } else {
      throw new Error("something error");
    }
  } catch (err) {
    await dispatch({
      type: GET_DETAIL_MOVIE_ERROR,
    });
    console.log(err);
  }
};
