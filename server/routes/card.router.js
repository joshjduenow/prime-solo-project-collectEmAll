const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  const query = `
      SELECT * FROM all_cards
    `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all cards", err);
      res.sendStatus(500);
    });
});

module.exports = router;

// const API_KEY = process.env.API_KEY;

// router.get("/:id", (req, res) => {

//   axios({
//     method: "GET",
//     url: `https://api.pokemontcg.io/v2/cards?api_key=${API_KEY}`,
//   })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log("Error in GET from apiRouter,", error);
//       res.sendStatus(500);
//     });
// });

// query to get card specifics?
// &&q=select=name,number,images
