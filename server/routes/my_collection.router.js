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
  ("user_id", "name", "card_number", "image", "favorite")
  VALUES
  (${[req.user.id]}, $2, $3, $4)`;
  const sqlValues = [req.body.name, req.body.card_number, req.body.image, req.body.favorite];
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

router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const sqlText = `
  UPDATE "my_collection_card"
    SET "favorite" = $1
    WHERE "id" = '${req.params.id}';`;

  const sqlValues = [req.body.category_id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in collection.router PUT,", err);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const sqlText = `
    DELETE FROM "my_collection_card"
      WHERE "id" = ${req.params.id};`;
  pool
    .query(sqlText)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in collection.router DELETE,", err);
      res.sendStatus(500);
    });
});

module.exports = router;
