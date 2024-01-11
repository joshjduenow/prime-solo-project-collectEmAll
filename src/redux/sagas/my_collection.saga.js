import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMyCollection() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/card_collection/",
    });
    yield put({
      type: "SET_COLLECTION",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get collection from server", error);
  }
}
function* addToMyCollection(action) {
    console.log("are you working?", action)
  try {
    const cardResponse = yield axios({
      method: "POST",
      url: "/api/card_collection",
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new card to server:", error);
  }
}
function* collectionToArchived(action) {
  console.log("action.payload:", action.payload);
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/card_collection/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "FETCH_ARCHIVED",
    });
  } catch (error) {
    console.log("Unable to update archive to my collection from server", error);
  }
}

function* deleteFromCollection(action) {
  try {
    const cardResponse = yield axios({
      method: "DELETE",
      url: `/api/card_collection/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "FETCH_COLLECTION",
    });
  } catch (error) {
    console.log("Unable to delete card from server", error);
  }
}
export default function* collectionSaga() {
  yield takeLatest("FETCH_COLLECTION", getMyCollection);
  yield takeLatest("ADD_COLLECTION", addToMyCollection);
  yield takeLatest("DELETE_FROM_COLLECTION", deleteFromCollection);
  yield takeLatest("COLLECTION_TO_ARCHIVED", collectionToArchived);

}
