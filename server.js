const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routeURLs = require("./routes/route");
const path = require("path");
const cors = require("cors");

const app = express();

dotenv.config();
 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/api", routeURLs);

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.resolve(__dirname, "./client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(process.env.PORT || 4000, () => {
  console.log(`lets get this shit bro`);
});
