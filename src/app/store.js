import { configureStore } from "@reduxjs/toolkit";
import PhotoReducer from "features/Photo/PhotoSlice";

const rootReducer = {
  photo: PhotoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
