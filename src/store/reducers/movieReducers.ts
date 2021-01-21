import {
  GET_LIST_MOVIE_START,
  GET_LIST_MOVIE_SUCCESS,
  GET_LIST_MOVIE_ERROR,
} from "../actions/actionTypes";

export interface movieReducersProps {
  isLoading: boolean;
  listMovie: any[];
  metadata: any;
}
const initialState: movieReducersProps = {
  isLoading: false,
  listMovie: [],
  metadata: {},
};
const movieReducers = (
  state: movieReducersProps = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_LIST_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LIST_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listMovie: action?.payload?.results,
        metadata: action?.payload?.metadata,
      };
    case GET_LIST_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default movieReducers;
