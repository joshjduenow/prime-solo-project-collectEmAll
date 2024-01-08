import { createStore, combineReducers, applyMiddleware } from "redux";
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";

function* getAllCards() {
  try {
    const cardResponse = yield axios({
      method: "GET",
      url: "/api/card/",
    });
    yield put({
      type: "SET_CARD",
      payload: cardResponse.data,
    });
  } catch (error) {
    console.log("Unable to get card from server", error);
  }
}

export default function* cardSaga() {
  yield takeLatest("GET_CARDS", getAllCards);
}
//   yield takeLatest("SAGA/ADD_CARD", postNewCard);
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
