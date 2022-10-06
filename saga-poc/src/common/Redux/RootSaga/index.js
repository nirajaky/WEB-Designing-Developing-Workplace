import { call, put, takeEvery } from "@redux-saga/core/effects";
import { handleSetError, handleSetLoading } from "../Reducer/Action";
import API from "../API";
import transformBlobToJson from "../Util";

let pendingRequest = 0;

export function* handleRequest(action) {
  const { payload } = action;
  const { method, url, body, handleSuccess, responseType } = payload;
  pendingRequest += 1;
  /* istanbul ignore next */
  if (pendingRequest === 1) yield put(handleSetLoading(true));
  yield put(handleSetError(null));
  try {
    const data = yield call(API, method, url, body, responseType);
    yield put(handleSuccess(data));
  } catch (error) {
    const errorResponse =
      responseType === "blob"
        ? JSON.parse(yield call(transformBlobToJson, error.response.data))
        : null;
    const errorObject = error.response
      ? {
          method,
          url,
          status:
            responseType === "blob"
              ? errorResponse.status
              : error.response.data.status,
          error:
            responseType === "blob"
              ? errorResponse.error
              : error.response.data.error,
          message:
            responseType === "blob"
              ? errorResponse.message
              : error.response.data.message,
          timestamp:
            responseType === "blob"
              ? errorResponse.timestamp
              : error.response.data.timestamp,
          path:
            responseType === "blob"
              ? errorResponse.path
              : error.response.data.path,
        }
      : { method, url, message: error.message };
    yield put(handleSetError(errorObject));
  }
  pendingRequest -= 1;
  /* istanbul ignore next */
  if (pendingRequest === 0) yield put(handleSetLoading(false));
}

function* RootSaga() {
  yield takeEvery("API_REQUEST", handleRequest);
}

export default RootSaga;
