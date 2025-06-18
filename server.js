const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://shawn:FW2m2ueKnnlyuSfI@cluster0.rgisq4r.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      //console.log(client);// database connection object
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4009;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
