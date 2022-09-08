import { combineReducers } from "redux";
import { loaderSlice } from "../loader/loaderSlice";
import { picturesSlice } from "../pictures/picturesSlice";
import errorReducer from "../error/slice";

const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  images: picturesSlice.reducer,
  error: errorReducer,
});

export default rootReducer;
