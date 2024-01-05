// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { takeEvery, put, takeLatest } from "redux-saga/effects";
// import axios from "axios";
// import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";


// // const express = require('express');
// const router = express.Router();
// // const pool = require('../modules/pool')

const cardReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARD':
            return action.payload;
        default:
            return state;
    }
  }
export default cardReducer

// router.get('/', (req, res) => {
//     const query = `
//       SELECT * FROM "all_cards"
//     `;
//     pool.query(query)
//       .then(result => {
//         res.send(result.rows);
//       })
//       .catch(err => {
//         console.log('ERROR: Get all movies', err);
//         res.sendStatus(500)
//       })
  
//   });
