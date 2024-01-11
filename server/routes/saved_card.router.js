const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Router to get my collection
router.get("/", (req, res) => {
  console.log("req.user", req.user);
  const sqlText = `
  SELECT 
	"card_collection"."id",
	"card_collection"."user_id",
	"card_collection"."name",
	"card_collection"."card_number",
	"card_collection"."image",
	"card_collection"."category_id",
	"categories"."type" as "category_type"
FROM "card_collection"
	LEFT JOIN "categories"
	on "card_collection"."category_id" = "categories"."id"
WHERE "category_id" = 2
ORDER BY "card_collection"."category_id";
    `;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in saved.router GET,", err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("req.body:", req.body);
  const sqlText = `
  INSERT INTO "card_collection"
  ("user_id", "name", "card_number", "image", "category_id")
  VALUES
  ($1, $2, $3, $4, 2);`;
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
      console.log("Error in saved.router POST,", err);
      res.sendStatus(500);
    });
});
router.put("/:id", (req, res) => {
  console.log("req.params:", req.params);
    const sqlText = `
    UPDATE "card_collection"
      SET "category_id" = 1
      WHERE "id" = $1;`;
  
    const sqlValues = [req.params.id];
    pool
      .query(sqlText, sqlValues)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log("Error in update.router PUT,", err);
        res.sendStatus(500);
      });
  });

router.delete("/:id", (req, res) => {
  const sqlText = `
    DELETE FROM "card_collection"
      WHERE "id" = ${req.params.id} AND "user_id" = ${[req.user.id]};`;
  pool
    .query(sqlText)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in saved.router DELETE,", err);
      res.sendStatus(500);
    });
});

module.exports = router;
