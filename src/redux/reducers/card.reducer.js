import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";



const cardReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARD':
            return action.payload;
        default:
            return state;
    }
  }