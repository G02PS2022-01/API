/* const express = require("express");

const Content = require("../models/CT");

const router = express.Router();

router.post("/content", async (req, res) => {
  try {
    if (await Content.findOne({ content }))
      return res.status(400).send({ erro: "Content exists" });

    const content = await Content.create(req.body);

    return res.send({ quest });
  } catch (err) {
    return res.status(400).send({ error: "Registrain failed" });
  }
});

module.exports = (app) => app.content("/auth", router);
*/
