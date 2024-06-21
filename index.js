const express = require("express");

const app = express();

app.use(express.json());

app.get("/alerts", (req, res) => {
  const is_active = req.query.is_active;
  console.log(req.params, req.query);

  res.json([
    { name: "alert 1", price: 1000, is_active: is_active },
    { name: "alert 2", price: 2000 },
  ]);
});

app.post("/ads", (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    ...body,
  });
});

app.listen(8002, () => {
  console.log("Express is running.");
});
