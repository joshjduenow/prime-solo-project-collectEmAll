import axios from "axios";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { takeEvery, put, takeLatest } from "redux-saga/effects";
// import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

// // const express = require('express');
// const router = express.Router();
// // const pool = require('../modules/pool')

const cards = (state = [], action) => {
  switch (action.type) {
    case "SET_CARD":
      return action.payload;
    default:
      return state;
  }
};

export default cards;
