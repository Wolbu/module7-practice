import { getImages } from "../../api/api";
import { onLoader, offLoader } from "../loader/loaderSlice";
import { initPicturesAction, addPicturesAction } from "./picturesSlice";
import { setError, resetError } from "../error/slice";

export const getImagesOperations = () => {
  return async (dispatch) => {
    try {
      dispatch(resetError());
      dispatch(onLoader());
      const images = await getImages();
      dispatch(initPicturesAction(images));

      dispatch(offLoader());
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(offLoader());
    }
  };
};

export const addPicturesOperation = (page) => {
  return async (dispatch) => {
    try {
      dispatch(resetError());
      dispatch(onLoader());
      const images = await getImages("", page);
      dispatch(addPicturesAction(images));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(offLoader());
    }
  };
};
