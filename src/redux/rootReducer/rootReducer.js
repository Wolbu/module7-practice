import { combineReducers } from "redux";
import { loaderSlice } from "../loader/loaderSlice";
import { picturesSlice } from "../pictures/picturesSlice";
import errorReducer from "../error/slice";
import { picturesApi } from "../pictures/picturesApi";

const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  images: picturesSlice.reducer,
  error: errorReducer,
  [picturesApi.reducerPath]: picturesApi.reducer,
});

export default rootReducer;
