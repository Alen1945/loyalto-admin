import {
  GET_LIST_MOVIE_START,
  GET_LIST_MOVIE_SUCCESS,
  GET_LIST_MOVIE_ERROR,
} from "./actionTypes";
import { getData } from "../../helpers/CRUD";
export const getListMovie = (page: number | string) => async (
  dispatch: any
) => {
  await dispatch({
    type: GET_LIST_MOVIE_START,
  });
  try {
    const listGenre = await getData(
      `/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`
    );
    if (listGenre.status === 200) {
      await dispatch({
        type: GET_LIST_MOVIE_SUCCESS,
        payload: {
          results: listGenre.data.results,
          metadata: {
            dates: listGenre.data.dates,
            page: listGenre.data.page,
            total_pages: listGenre.data.total_pages,
            total_results: listGenre.data.total_results,
          },
        },
      });
    } else {
      throw new Error("something error");
    }
  } catch (err) {
    await dispatch({
      type: GET_LIST_MOVIE_ERROR,
    });
    console.log(err);
  }
};
