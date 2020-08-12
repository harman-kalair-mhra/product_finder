var express = require("express");
var app = express();
var port = 4000;
app.use(express.static("public"));
var Main = function (request, response) {
    response.sendfile("src/views/index.html");
};
var gallery = function (request, response) {
    response.sendfile("src/views/gallery.html");
};
app.get("/", Main);
app.get("/gallery/", gallery);
app.get("/mirror/:word", function (request, response) {
    response.send(request.parms.word);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app-server.js.map