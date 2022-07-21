const sequelize = require("./db");
const Sequelize = require("sequelize");
const Bus = sequelize.define("buses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  bus_id: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  date_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  event: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sub_event: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  event_description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lat: {
    type: Sequelize["DOUBLE PRECISION"],
    allowNull: false,
  },
  lon: {
    type: Sequelize["DOUBLE PRECISION"],
    allowNull: false,
  },
  speed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  svcount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bearing: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  odometer: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  car_no: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  edge_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  route_color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sam_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  direction: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  display_route_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  personel_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  personel_last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  driver_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  c1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  c2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
module.exports = Bus;
