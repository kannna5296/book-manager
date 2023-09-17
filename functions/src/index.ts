import * as functions from "firebase-functions";
import * as express from "express";
import * as path from "path";
import * as basicAuth from "express-basic-auth";

const app = express();
app.use(
  basicAuth({
    challenge: true,
    users: {
      admin: "admin456",
    },
  })
);
app.use(express.static(path.join(__dirname, "src")));

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

exports.app = functions.https.onRequest(app);
