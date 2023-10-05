import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReduce from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReduce,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
