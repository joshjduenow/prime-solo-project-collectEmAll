import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* getMyCollection() {
    try {
      const cardResponse = yield axios({
        method: "GET",
        url: "/api/my_collection/",
      });
      yield put({
        type: "SET_COLLECTION",
        payload: cardResponse.data,
      });
    } catch (error) {
      console.log("Unable to get collection from server", error);
    }
  }
  function* addToMyCollection(action) {
    try {
      const response = yield axios({
        method: "POST",
        url: "/api/my_collection/",
        data: {
          newFavorite: action.payload,
        },
      });
    } catch (error) {
      console.log("Unable to post giphy to server:", error);
    }
  }

  export default function* cardSaga() {
    yield takeLatest("SET_COLLECTION", getMyCollection);
    yield takeLatest("ADD_COLLECTION", addToMyCollection);
    
  }