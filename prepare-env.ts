import fs from 'fs'
const meteoConf = {
    api_key: process.env.API_KEY,
  };
  fs.writeFile(
    "src/config/meteo-france-conf.json",
    JSON.stringify(meteoConf),
    "utf8",
    function (err) {
      if (err) return console.log(err);
    }
  );