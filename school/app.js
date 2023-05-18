const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4100;
app.use(bodyParser.json());
app.use(morgan("dev"));

const db = [
  {
    name: "Emeka Alabi",
    id: 1,
  },
];
app.get("/", (req, res) => {
  res.send("Welcome to Ronaldo School");
});

app.post("/webhook/studentAdded", (req, res) => {
  let data = req.body;
  db.push({ name: data.name, id: db.length + 1 });
  console.log(db);
  res.send("Webhook data recieved");
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
