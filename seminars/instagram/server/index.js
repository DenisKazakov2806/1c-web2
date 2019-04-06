let express = require("express");
let vjm = require("vue-jwt-mongo");

let SECRET = "C13C1A4A694D57787E491A015964C26A4B928866033F88C453B5BDB01595EB3D";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: SECRET
});

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

app.listen(80);