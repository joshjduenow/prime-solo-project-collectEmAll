const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Router to get card details
router.get("/:id", (req, res) => {
  const idToGet = req.params.id;

  const queryText = `
    SELECT * FROM all_cards
      WHERE all_cards.id = $1;`;

  pool
    .query(queryText, [idToGet])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;
