import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
  console.log(req.rawHeaders);
  res.send ("<h1>Hello World! Have a good day!<h1>");
});

app.get("/about", (req,res) => {
  console.log(req.rawHeaders);
  res.send ("<h1>About me<h1>");
});

app.get("/contact", (req,res) => {
  console.log(req.rawHeaders);
  res.send ("<h1> Contact me at 123456789 <h1>");
});



app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});