var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const BusUpdate = require("./app");
function getRandomNumber() {
  return (generatedNumber = 37 + Math.random());
}
function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}
const file = require("fs");

io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} has connected`);

  function change() {
    let randomIndex = getRandomIndex();
    file.readFile("staj.json", "utf-8", (err, data) => {
      data = JSON.parse(data);
      const randomNumber1 = getRandomNumber();
      const randomNumber2 = getRandomNumber();
      data.sefer[randomIndex].lat = randomNumber1;
      data.sefer[randomIndex].lon = randomNumber2;
      socket.emit("sendData", {
        lat: data.sefer[randomIndex].lat,
        lon: data.sefer[randomIndex].lon,
        index: randomIndex,
      });
      BusUpdate.findByPk(randomIndex)
        .then((bus) => {
          bus.lat = randomNumber1;
          bus.lon = randomNumber2;
          return bus.save();
        })
        .then((result) => {
          console.log("Updated");
        })
        .catch((err) => {});
      data = JSON.stringify(data);
      file.writeFile("staj.json", data, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  setInterval(change, 2000);
});
http.listen(4000, () => {
  console.log("Listening on port 4000");
});
