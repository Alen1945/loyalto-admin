import { createStore, applyMiddleware, compose } from "redux";
import thunMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import genreReducers, { genreReducersProps } from "./reducers/genreReducers";
import movieReducers, { movieReducersProps } from "./reducers/movieReducers";
import detailMovieReducers, {
  detailMovieReducersProps,
} from "./reducers/detailMovieReducers";

export interface RootState {
  genreReducers: genreReducersProps;
  movieReducers: movieReducersProps;
  detailMovieReducers: detailMovieReducersProps;
}
const rootReducer = combineReducers({
  genreReducers,
  movieReducers,
  detailMovieReducers,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunMiddleware))
);
