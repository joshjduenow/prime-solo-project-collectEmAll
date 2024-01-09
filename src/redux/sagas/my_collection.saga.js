import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* getMyCollection() {
    try {
      const cardResponse = yield axios({
        method: "GET",
        url: "/api/my_collection_card/",
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
      const cardResponse = yield axios({
        method: "POST",
        url: "/api/my_collection_card/",
        data: {
          newCard: action.payload,
        },
      });
    } catch (error) {
      console.log("Unable to post new card to server:", error);
    }
  }
  function* setFaveCard(action) {
    try {
      const cardResponse = yield axios({
        method: "PUT",
        url: `/api/my_collection_card/${action.payload.id}`,
        data: { my_collection_card_id: action.payload.favorite},
      });
  
      yield put({
        type: "SAGA/SET_FAVORITE",
      });
    } catch (error) {
      console.log("Unable to update giffy fav category from server", error);
    }
  }

  function* deleteFromCollection(action) {
    try {
      const cardResponse = yield axios({
        method: "DELETE",
        url: `/api/my_collection_card/${action.payload.id}`,
        data: action.payload,
      });
  
      yield put({
        type: "SET_COLLECTION",
      });
    } catch (error) {
      console.log("Unable to update giffy fav category from server", error);
    }
  }
  export default function* cardSaga() {
    yield takeLatest("SET_COLLECTION", getMyCollection);
    yield takeLatest("ADD_COLLECTION", addToMyCollection);
    yield takeLatest("SET_FAVORITE", setFaveCard);
    yield takeLatest("DELETE_FROM_COLLECTION", deleteFromCollection);

    
  }