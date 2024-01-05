import { createStore, combineReducers, applyMiddleware } from "redux";
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";

export default function* cardSaga() {
  yield takeLatest("SAGA/GET_ALL_CARDS", getAllCards);
//   yield takeLatest("SAGA/ADD_CARD", postNewCard);
}

function* getAllCards() {
  try {
    const response = yield axios.get("/api/card");

    yield put({
      type: "SET_CARD",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get card from server", error);
  }
}
// function* postNewCard(action) {
//   try {
//     const response = yield axios({
//       method: "POST",
//       url: "/api/mycards",
//       data: {
//         newCard: action.payload,
//       },
//     });
//   } catch (error) {
//     console.log("Unable to post to server:", error);
//   }
// }
