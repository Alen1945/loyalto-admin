import { createStore, applyMiddleware, compose } from "redux";
import thunMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import genreReducers, { genreReducersProps } from "./reducers/genreReducers";

export interface RootState {
  genreReducers: genreReducersProps;
}
const rootReducer = combineReducers({
  genreReducers,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunMiddleware))
);
