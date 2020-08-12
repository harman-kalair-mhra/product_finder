const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));

const Main = (request, response) => {
  response.sendfile("src/views/index.html");
};

const gallery = (request, response) => {
  response.sendfile("src/views/gallery.html");
};

app.get("/", Main);
app.get("/gallery/", gallery);

app.get("/mirror/:word", (request, response) => {
  response.send(request.parms.word);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
