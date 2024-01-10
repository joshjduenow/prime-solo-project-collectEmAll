const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();
const API_KEY = process.env.API_KEY;

router.get("/", (req, res) => {
  axios({
    method: "GET",
    url: `https://api.pokemontcg.io/v2/cards?select=id,name,number,images&&pageSize=15`,
    headers: {
      "X-Api-Key": API_KEY,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Error in GET from card Router,", error);
      res.sendStatus(500);
    });
});
module.exports = router;
