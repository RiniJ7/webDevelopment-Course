import express from "express";
const app = express();
//the port number of the server is defined here
const port = 3000;

//the .listen method is applied on app constant. It consist of a port number and a call back function
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
