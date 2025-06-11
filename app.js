const express = require("express");
const { ObjectId } = require("mongodb"); // <<< BU YERDA KERAKLI QATOR
const app = express();

const db = require("./server").db();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View sozlamalari
app.set("views", "views");
app.set("view engine", "ejs");

// Routing
app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new ObjectId(id) }, // <<< ObjectId to'g'ri ishlatildi
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user }); // "user" o'zgaruvchisi ham e'lon qilinmagan bo'lishi mumkin!
});

module.exports = app;
