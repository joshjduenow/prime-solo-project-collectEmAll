const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Router to get my collection
router.get("/", (req, res) => {
  console.log("req.user", req.user);
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

router.post("/collection_card", (req, res) => {
  console.log("req.body:", req.body)
  const sqlText = `
  INSERT INTO "my_collection_card"
  ("user_id", "name", "card_number", "image")
  VALUES
  ($1, $2, $3, $4)`;
  const sqlValues = [
    req.user.id,
    req.body.name,
    req.body.number,
    req.body.images.small,
  ];
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
  const sqlText = `
  UPDATE "my_collection_card"
    SET "favorite" = $1
    WHERE "id" = '${req.params.id}' AND "user_id" = ${[req.user.id]};`;

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
      WHERE "id" = ${req.params.id} AND "user_id" = ${[req.user.id]};`;
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
