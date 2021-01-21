import { type } from "os";
import {
  GET_LIST_GENRE_START,
  GET_LIST_GENRE_SUCCESS,
  GET_LIST_GENRE_ERROR,
} from "../actions/actionTypes";

export interface genreReducersProps {
  isLoading: boolean;
  listGenre: any;
}
const initialState: genreReducersProps = {
  isLoading: false,
  listGenre: [],
};
const genreReducers = (
  state: genreReducersProps = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_LIST_GENRE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LIST_GENRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listGenre: action?.payload,
      };
    case GET_LIST_GENRE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default genreReducers;
