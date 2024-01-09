import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMyCollection() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/collection/",
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
      url: "/api/collection/collection_card",
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new card to server:", error);
  }
}
function* setFaveCard(action) {
  try {
    const cardResponse = yield axios({
      method: "PUT",
      url: `/api/collection/${action.payload.id}`,
      data: { my_collection_card_id: action.payload.favorite },
    });

    yield put({
      type: "SAGA/SET_FAVORITE",
    });
  } catch (error) {
    console.log("Unable to update favorite card from server", error);
  }
}

function* deleteFromCollection(action) {
  try {
    const cardResponse = yield axios({
      method: "DELETE",
      url: `/api/collection/${action.payload.id}`,
      data: action.payload,
    });

    yield put({
      type: "SET_COLLECTION",
    });
  } catch (error) {
    console.log("Unable to delete card from server", error);
  }
}
export default function* collectionSaga() {
  yield takeLatest("FETCH_COLLECTION", getMyCollection);
  yield takeLatest("ADD_COLLECTION", addToMyCollection);
  yield takeLatest("SET_FAVORITE", setFaveCard);
  yield takeLatest("DELETE_FROM_COLLECTION", deleteFromCollection);
}
