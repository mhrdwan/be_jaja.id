const moment = require("moment");
require("moment/locale/id");
const momentTimezone = require("moment-timezone");
moment.locale("id");
const now = momentTimezone.tz("Asia/Jakarta");

const waktuSekarang = now.format("HH:mm:ss");
const hariIni = now.format("YYYY-MM-DD");

module.exports = { waktuSekarang, hariIni };
