const axios = require("axios");
const Bus = require("./app");
axios
  .get("http://localhost:3000/sefer")
  .then((res) => {
    //10 sayısı daha sonra gelen verinin boyutu kadar olacak
    for (i = 1; i <= 10; i++) {
      Bus.create({
        bus_id: res.data[i].bus_id,
        date_time: res.data[i].date_time,
        event: res.data[i].event,
        sub_event: res.data[i].sub_event,
        event_description: res.data[i].event_description,
        lat: res.data[i].lat,
        lon: res.data[i].lon,
        speed: res.data[i].speed,
        svcount: res.data[i].svcount,
        bearing: res.data[i].bearing,
        status: res.data[i].status,
        odometer: res.data[i].odometer,
        car_no: res.data[i].car_no,
        edge_code: res.data[i].edge_code,
        route_color: res.data[i].route_color,
        sam_id: res.data[i].sam_id,
        direction: res.data[i].direction,
        display_route_code: res.data[i].display_route_code,
        personel_name: res.data[i].personel_name,
        personel_last_name: res.data[i].personel_last_name,
        driver_code: res.data[i].driver_code,
        c1: res.data[i].c1,
        c2: res.data[i].c2,
      });
    }
  })
  .catch((error) => {
    console.error(error);
  });
