const { Op, fn, col } = require('sequelize');
const { ro_wilayah } = require("../../models");

async function selectWilayah(req, res, next) {
  try {
    const data = await ro_wilayah.findAll({
      attributes: ['kecamatan', [fn('COUNT', col('kelurahan_id')), 'jumlah_kelurahan']],
      group: ['propinsi'],
      order: [[fn('COUNT', col('kelurahan_id')), 'DESC']]
    });
    res.json(data);
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
}

module.exports = { selectWilayah };
