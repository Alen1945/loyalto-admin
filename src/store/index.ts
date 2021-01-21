import { createStore, applyMiddleware, compose } from "redux";
import thunMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import genreReducers, { genreReducersProps } from "./reducers/genreReducers";
import movieReducers, { movieReducersProps } from "./reducers/movieReducers";

export interface RootState {
  genreReducers: genreReducersProps;
  movieReducers: movieReducersProps;
}
const rootReducer = combineReducers({
  genreReducers,
  movieReducers,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunMiddleware))
);
