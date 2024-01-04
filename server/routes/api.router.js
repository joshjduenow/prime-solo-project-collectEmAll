const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const router = express.Router();

router.get("/:id", (req, res) => {
  
  axios({
    method: "GET",
    url: `https://api.pokemontcg.io/v2/cards?api_key=${API_KEY}&&q=select=name,number,images,cardmarket`,
  })
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((error) => {
      console.log("Error in GET from apiRouter,", error);
      res.sendStatus(500);
    });
});

module.exports = router;
