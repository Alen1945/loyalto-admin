import {
  GET_LIST_GENRE_START,
  GET_LIST_GENRE_SUCCESS,
  GET_LIST_GENRE_ERROR,
} from "./actionTypes";
import { getData } from "../../helpers/CRUD";
export const getListGenre = () => async (dispatch: any) => {
  await dispatch({
    type: GET_LIST_GENRE_START,
  });
  try {
    const listGenre = await getData(
      "/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
    );
    if (listGenre.status == 200) {
      await dispatch({
        type: GET_LIST_GENRE_SUCCESS,
        payload: listGenre.data.genres,
      });
    } else {
      throw new Error("something error");
    }
  } catch (err) {
    await dispatch({
      type: GET_LIST_GENRE_ERROR,
    });
    console.log(err);
  }
};
