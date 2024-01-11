import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getSaved() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/saved/",
    });
    yield put({
      type: "SET_SAVED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get saved from server", error);
  }
}
function* addToSaved(action) {
  console.log("are you working?", action);
  try {
    const cardResponse = yield axios({
      method: "POST",
      url: "/api/saved",
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to post saved card to server:", error);
  }
}
function* savedToCollection(action) {
  console.log("action.payload:", action.payload);
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/saved/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "FETCH_SAVED",
    });
  } catch (error) {
    console.log("Unable to update archive to my collection from server", error);
  }
}

function* deleteFromSaved(action) {
  try {
    const cardResponse = yield axios({
      method: "DELETE",
      url: `/api/saved/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "FETCH_SAVED",
    });
  } catch (error) {
    console.log("Unable to delete card from server", error);
  }
}
export default function* savedSaga() {
  yield takeLatest("FETCH_SAVED", getSaved);
  yield takeLatest("ADD_SAVED", addToSaved);
  yield takeLatest("DELETE_FROM_SAVED", deleteFromSaved);
  yield takeLatest("ADD_TO_COLLECTION", savedToCollection);


}
