import { combineReducers } from "redux";

import { usersReducer } from "./usersReducer";
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";
import { albumsReducer } from "./albumsReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  usersReducer,
  postsReducer,
  commentsReducer,
  albumsReducer,
  photosReducer
});