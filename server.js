require("dotenv").config({ path: ".env" });
 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Chatkit = require("@pusher/chatkit-server");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view





    const chatkit = new Chatkit.default({
      instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
      key: process.env.CHATKIT_SECRET_KEY,
    });

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/users', (req, res) => {
      console.log('user route hit')
      const { userId } = req.body;

      chatkit
        .createUser({
          id: userId,
          name: userId,
        })
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          if (err.error === 'services/chatkit/user_already_exists') {
            console.log(`User already exists: ${userId}`);
            res.sendStatus(200);
          } else {
            console.log('error is here')
            res.status(err.status).json(err);
          }
        });
    });

    app.post('/authenticate', (req, res) => {
      const authData = chatkit.authenticate({
        userId: req.query.user_id,
      });
      res.status(authData.status).send(authData.body);
    });

    app.use(routes);    
    app.set('port', process.env.PORT || 3001);

    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lifechat",  {useNewUrlParser: true, useUnifiedTopology: true});
 

    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });