import { type } from "os";
import {
  GET_DETAIL_MOVIE_START,
  GET_DETAIL_MOVIE_SUCCESS,
  GET_DETAIL_MOVIE_ERROR,
} from "../actions/actionTypes";

export interface detailMovieReducersProps {
  isLoading: boolean;
  detailMovie: any;
}
const initialState: detailMovieReducersProps = {
  isLoading: false,
  detailMovie: {},
};
const genreReducers = (
  state: detailMovieReducersProps = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_DETAIL_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detailMovie: action?.payload,
      };
    case GET_DETAIL_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default genreReducers;
