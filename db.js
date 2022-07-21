const Sequelize = require("sequelize");
const sequelize = new Sequelize("bus-app", "root", "password-goes-here", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
