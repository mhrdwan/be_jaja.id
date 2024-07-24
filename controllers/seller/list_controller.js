const { format } = require("sequelize/lib/utils");
const { jauto_order, jauto_order_detail } = require("../../models");
const { suksesMessage, errorMessage } = require("../../core/message");

async function getListOrders(req, res, next) {
  jauto_order.hasMany(jauto_order_detail, {
    foreignKey: "id_order",
    targetKey: "id",
  });
  try {
    const response = await jauto_order.findAll({
      include: [
        {
          model: jauto_order_detail,
          required: true,
        },
      ],
    });
    const mapping = response.map((i) => {
        return {
            id: i.id,
            data: {
                invoice: i.invoice,
                detail: i.jauto_order_details.map((j) => {
                    return {
                        angsuran_bulanan: j.angsuran_bulanan,
                        angsuran_bunga: j.angsuran_bunga,
                        angsuran_pokok: j.angsuran_pokok,
                        angsuran_pertama: j.angsuranPertama,
                        biaya_administrasi: j.biayaAdministrasi,
                        bunga: j.bunga,
                        tenor_tahun: j.tenorTahun,
                    };
                })
            }
        };
    });

    res.status(200).json({
        message: suksesMessage().message,
        code: suksesMessage().code,
        data: mapping
    });
    res.status(200).json(mapping);
  } catch (error) {
    res.status(403).json({
        message: errorMessage().message,
        code: errorMessage().code,
    });

  }

}

module.exports = getListOrders;
