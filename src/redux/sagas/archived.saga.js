import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getArchived() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/archived/",
    });
    yield put({
      type: "SET_ARCHIVED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get archived from server", error);
  }
}
function* addToArchived(action) {
  console.log("are you working?", action);
  try {
    const cardResponse = yield axios({
      method: "POST",
      url: "/api/archived/archived_card",
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to post archived card to server:", error);
  }
}

function* deleteFromArchived(action) {
  try {
    const cardResponse = yield axios({
      method: "DELETE",
      url: `/api/archived/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "SET_ARCHIVED",
    });
  } catch (error) {
    console.log("Unable to delete card from archived", error);
  }
}
export default function* archivedSaga() {
  yield takeLatest("FETCH_ARCHIVED", getArchived);
  yield takeLatest("ADD_ARCHIVED", addToArchived);
  yield takeLatest("DELETE_FROM_ARCHIVED", deleteFromArchived);
}
