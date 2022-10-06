import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../RootReducer";
import RootSaga from "../RootSaga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(RootSaga);

export default Store;
