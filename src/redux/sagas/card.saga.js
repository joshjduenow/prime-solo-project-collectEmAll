import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";

export default function* cardSaga() {
  yield takeLatest("SAGA/GET_CARD", getCard);
  yield takeLatest("SAGA/ADD_CARD", postNewCard);
}

function* getCard(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/card/${action.payload}`,
    });

    yield put({
      type: "SET_CARD",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get giffy from server", error);
  }
}

function* postNewCard(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/favorites",
      data: {
        newFavorite: action.payload,
      },
    });
  } catch (error) {
    console.log("Unable to post giphy to server:", error);
  }
}
