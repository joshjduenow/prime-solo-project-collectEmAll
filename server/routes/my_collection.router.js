const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Router to get card details
router.get("/", (req, res) => {
  // const idToGet = req.params.id;

  const sqlText = `
    SELECT * FROM "my_collection_card"
    `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in collection.router GET,", err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const sqlText = `
  INSERT INTO "my_collection_card"
  ("user_id", "name", "card_number", "image")
  VALUES
  (${[req.user.id]}, $2, $3, $4)`;
  const sqlValues = [req.body.name, req.body.card_number, req.body.image];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in collection.router POST,", err);
      res.sendStatus(500);
    });
});

module.exports = router;
