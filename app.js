const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routes);


app.listen(3000);