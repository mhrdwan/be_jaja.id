var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _asal_produk = require("./asal_produk");
var _banner_game = require("./banner_game");
var _banner_slider = require("./banner_slider");
var _banner_toko = require("./banner_toko");
var _blogs = require("./blogs");
var _blogs_author = require("./blogs_author");
var _blogs_categori = require("./blogs_categori");
var _cara_pembayaran = require("./cara_pembayaran");
var _customer = require("./customer");
var _customer_address = require("./customer_address");
var _customer_follower = require("./customer_follower");
var _customer_koin_history = require("./customer_koin_history");
var _customer_npl = require("./customer_npl");
var _customer_payouts = require("./customer_payouts");
var _customer_refund = require("./customer_refund");
var _customer_rekening = require("./customer_rekening");
var _customer_saldo = require("./customer_saldo");
var _customer_saldo_detail = require("./customer_saldo_detail");
var _customer_token = require("./customer_token");
var _customer_view = require("./customer_view");
var _daftar_kurir = require("./daftar_kurir");
var _daftar_merek = require("./daftar_merek");
var _daftar_model = require("./daftar_model");
var _data_pengguna = require("./data_pengguna");
var _db_digital = require("./db_digital");
var _db_event = require("./db_event");
var _db_event_detail = require("./db_event_detail");
var _db_komplain = require("./db_komplain");
var _db_komplain_detail = require("./db_komplain_detail");
var _db_komplain_kategori = require("./db_komplain_kategori");
var _db_payment_method = require("./db_payment_method");
var _db_payment_method_category = require("./db_payment_method_category");
var _db_setting = require("./db_setting");
var _detail_produk_buku = require("./detail_produk_buku");
var _detail_produk_ebook = require("./detail_produk_ebook");
var _dokumen_mass_upload = require("./dokumen_mass_upload");
var _etalase_toko = require("./etalase_toko");
var _feed = require("./feed");
var _feed_comment = require("./feed_comment");
var _feed_like = require("./feed_like");
var _flashsale = require("./flashsale");
var _inf_lokasi = require("./inf_lokasi");
var _inf_pengiriman_produk = require("./inf_pengiriman_produk");
var _info_jaja = require("./info_jaja");
var _informasi_alamata = require("./informasi_alamata");
var _informasi_bank = require("./informasi_bank");
var _informasi_pengiriman = require("./informasi_pengiriman");
var _jauto_bank = require("./jauto_bank");
var _jauto_bunga = require("./jauto_bunga");
var _jauto_config = require("./jauto_config");
var _jauto_log = require("./jauto_log");
var _jauto_merek = require("./jauto_merek");
var _jauto_order = require("./jauto_order");
var _jauto_order_detail = require("./jauto_order_detail");
var _jauto_produk = require("./jauto_produk");
var _jauto_produk_grades = require("./jauto_produk_grades");
var _jauto_produk_images = require("./jauto_produk_images");
var _jauto_produk_jenis = require("./jauto_produk_jenis");
var _jauto_produk_kategori = require("./jauto_produk_kategori");
var _jauto_produk_kategori_to_merek = require("./jauto_produk_kategori_to_merek");
var _jauto_produk_packages = require("./jauto_produk_packages");
var _jauto_slider = require("./jauto_slider");
var _jauto_testdrive = require("./jauto_testdrive");
var _jauto_wilayah = require("./jauto_wilayah");
var _kategori_produk = require("./kategori_produk");
var _kebijakan_privasi = require("./kebijakan_privasi");
var _ketentuan_ganti_rugi = require("./ketentuan_ganti_rugi");
var _ketentuan_pengembalian = require("./ketentuan_pengembalian");
var _ketentuan_pengiriman = require("./ketentuan_pengiriman");
var _ketentuan_transaksi = require("./ketentuan_transaksi");
var _kuota_voucher = require("./kuota_voucher");
var _label_mobile = require("./label_mobile");
var _lelang_merk = require("./lelang_merk");
var _lelang_seri = require("./lelang_seri");
var _log_aktivitas = require("./log_aktivitas");
var _log_testing = require("./log_testing");
var _m_wil_kota = require("./m_wil_kota");
var _m_wil_provinsi = require("./m_wil_provinsi");
var _mas_upload_test = require("./mas_upload_test");
var _monitor_pengunjung = require("./monitor_pengunjung");
var _monitor_pengunjung_toko = require("./monitor_pengunjung_toko");
var _monitor_produk = require("./monitor_produk");
var _monitor_toko = require("./monitor_toko");
var _nomor_telepon = require("./nomor_telepon");
var _notifikasi = require("./notifikasi");
var _notifikasi_firebase = require("./notifikasi_firebase");
var _online_booking = require("./online_booking");
var _package_toko = require("./package_toko");
var _pencairan_dana = require("./pencairan_dana");
var _pengaturan_beranda = require("./pengaturan_beranda");
var _pengaturan_flashsale = require("./pengaturan_flashsale");
var _pengaturan_lelang = require("./pengaturan_lelang");
var _pengaturan_saldo = require("./pengaturan_saldo");
var _pengiriman = require("./pengiriman");
var _persetujuan_produk = require("./persetujuan_produk");
var _product_cart_voucher_toko = require("./product_cart_voucher_toko");
var _produk = require("./produk");
var _produk_cart = require("./produk_cart");
var _produk_cover = require("./produk_cover");
var _produk_flashsale = require("./produk_flashsale");
var _produk_lelang = require("./produk_lelang");
var _produk_lelang_deskripsi = require("./produk_lelang_deskripsi");
var _produk_lelang_detail = require("./produk_lelang_detail");
var _produk_rating = require("./produk_rating");
var _produk_report = require("./produk_report");
var _produk_stok = require("./produk_stok");
var _produk_tag = require("./produk_tag");
var _produk_variasi = require("./produk_variasi");
var _produk_video = require("./produk_video");
var _produk_view = require("./produk_view");
var _produk_wishlist = require("./produk_wishlist");
var _promo_jaja = require("./promo_jaja");
var _promo_reward = require("./promo_reward");
var _promo_reward_detail = require("./promo_reward_detail");
var _promo_toko = require("./promo_toko");
var _promosi = require("./promosi");
var _resi_data = require("./resi_data");
var _ro_city = require("./ro_city");
var _ro_kecamatan = require("./ro_kecamatan");
var _ro_province = require("./ro_province");
var _ro_wilayah = require("./ro_wilayah");
var _role = require("./role");
var _sensor_kata = require("./sensor_kata");
var _setting = require("./setting");
var _slider_buku = require("./slider_buku");
var _slider_kpop = require("./slider_kpop");
var _sub_kategori = require("./sub_kategori");
var _syarat_ketentuan = require("./syarat_ketentuan");
var _tag = require("./tag");
var _tempebh = require("./tempebh");
var _tentang_jaja_id = require("./tentang_jaja_id");
var _toko = require("./toko");
var _toko_2 = require("./toko_2");
var _toko_admin = require("./toko_admin");
var _toko_bank = require("./toko_bank");
var _toko_banner = require("./toko_banner");
var _toko_follower = require("./toko_follower");
var _toko_freeongkir = require("./toko_freeongkir");
var _toko_info = require("./toko_info");
var _toko_payouts = require("./toko_payouts");
var _toko_pin = require("./toko_pin");
var _toko_saldo = require("./toko_saldo");
var _trafik_pencarian = require("./trafik_pencarian");
var _transaksi = require("./transaksi");
var _transaksi_detail = require("./transaksi_detail");
var _transaksi_history = require("./transaksi_history");
var _transaksi_kurir = require("./transaksi_kurir");
var _transaksi_status = require("./transaksi_status");
var _transaksi_token = require("./transaksi_token");
var _transaksi_toko = require("./transaksi_toko");
var _voucher_customer = require("./voucher_customer");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var asal_produk = _asal_produk(sequelize, DataTypes);
  var banner_game = _banner_game(sequelize, DataTypes);
  var banner_slider = _banner_slider(sequelize, DataTypes);
  var banner_toko = _banner_toko(sequelize, DataTypes);
  var blogs = _blogs(sequelize, DataTypes);
  var blogs_author = _blogs_author(sequelize, DataTypes);
  var blogs_categori = _blogs_categori(sequelize, DataTypes);
  var cara_pembayaran = _cara_pembayaran(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customer_address = _customer_address(sequelize, DataTypes);
  var customer_follower = _customer_follower(sequelize, DataTypes);
  var customer_koin_history = _customer_koin_history(sequelize, DataTypes);
  var customer_npl = _customer_npl(sequelize, DataTypes);
  var customer_payouts = _customer_payouts(sequelize, DataTypes);
  var customer_refund = _customer_refund(sequelize, DataTypes);
  var customer_rekening = _customer_rekening(sequelize, DataTypes);
  var customer_saldo = _customer_saldo(sequelize, DataTypes);
  var customer_saldo_detail = _customer_saldo_detail(sequelize, DataTypes);
  var customer_token = _customer_token(sequelize, DataTypes);
  var customer_view = _customer_view(sequelize, DataTypes);
  var daftar_kurir = _daftar_kurir(sequelize, DataTypes);
  var daftar_merek = _daftar_merek(sequelize, DataTypes);
  var daftar_model = _daftar_model(sequelize, DataTypes);
  var data_pengguna = _data_pengguna(sequelize, DataTypes);
  var db_digital = _db_digital(sequelize, DataTypes);
  var db_event = _db_event(sequelize, DataTypes);
  var db_event_detail = _db_event_detail(sequelize, DataTypes);
  var db_komplain = _db_komplain(sequelize, DataTypes);
  var db_komplain_detail = _db_komplain_detail(sequelize, DataTypes);
  var db_komplain_kategori = _db_komplain_kategori(sequelize, DataTypes);
  var db_payment_method = _db_payment_method(sequelize, DataTypes);
  var db_payment_method_category = _db_payment_method_category(sequelize, DataTypes);
  var db_setting = _db_setting(sequelize, DataTypes);
  var detail_produk_buku = _detail_produk_buku(sequelize, DataTypes);
  var detail_produk_ebook = _detail_produk_ebook(sequelize, DataTypes);
  var dokumen_mass_upload = _dokumen_mass_upload(sequelize, DataTypes);
  var etalase_toko = _etalase_toko(sequelize, DataTypes);
  var feed = _feed(sequelize, DataTypes);
  var feed_comment = _feed_comment(sequelize, DataTypes);
  var feed_like = _feed_like(sequelize, DataTypes);
  var flashsale = _flashsale(sequelize, DataTypes);
  var inf_lokasi = _inf_lokasi(sequelize, DataTypes);
  var inf_pengiriman_produk = _inf_pengiriman_produk(sequelize, DataTypes);
  var info_jaja = _info_jaja(sequelize, DataTypes);
  var informasi_alamata = _informasi_alamata(sequelize, DataTypes);
  var informasi_bank = _informasi_bank(sequelize, DataTypes);
  var informasi_pengiriman = _informasi_pengiriman(sequelize, DataTypes);
  var jauto_bank = _jauto_bank(sequelize, DataTypes);
  var jauto_bunga = _jauto_bunga(sequelize, DataTypes);
  var jauto_config = _jauto_config(sequelize, DataTypes);
  var jauto_log = _jauto_log(sequelize, DataTypes);
  var jauto_merek = _jauto_merek(sequelize, DataTypes);
  var jauto_order = _jauto_order(sequelize, DataTypes);
  var jauto_order_detail = _jauto_order_detail(sequelize, DataTypes);
  var jauto_produk = _jauto_produk(sequelize, DataTypes);
  var jauto_produk_grades = _jauto_produk_grades(sequelize, DataTypes);
  var jauto_produk_images = _jauto_produk_images(sequelize, DataTypes);
  var jauto_produk_jenis = _jauto_produk_jenis(sequelize, DataTypes);
  var jauto_produk_kategori = _jauto_produk_kategori(sequelize, DataTypes);
  var jauto_produk_kategori_to_merek = _jauto_produk_kategori_to_merek(sequelize, DataTypes);
  var jauto_produk_packages = _jauto_produk_packages(sequelize, DataTypes);
  var jauto_slider = _jauto_slider(sequelize, DataTypes);
  var jauto_testdrive = _jauto_testdrive(sequelize, DataTypes);
  var jauto_wilayah = _jauto_wilayah(sequelize, DataTypes);
  var kategori_produk = _kategori_produk(sequelize, DataTypes);
  var kebijakan_privasi = _kebijakan_privasi(sequelize, DataTypes);
  var ketentuan_ganti_rugi = _ketentuan_ganti_rugi(sequelize, DataTypes);
  var ketentuan_pengembalian = _ketentuan_pengembalian(sequelize, DataTypes);
  var ketentuan_pengiriman = _ketentuan_pengiriman(sequelize, DataTypes);
  var ketentuan_transaksi = _ketentuan_transaksi(sequelize, DataTypes);
  var kuota_voucher = _kuota_voucher(sequelize, DataTypes);
  var label_mobile = _label_mobile(sequelize, DataTypes);
  var lelang_merk = _lelang_merk(sequelize, DataTypes);
  var lelang_seri = _lelang_seri(sequelize, DataTypes);
  var log_aktivitas = _log_aktivitas(sequelize, DataTypes);
  var log_testing = _log_testing(sequelize, DataTypes);
  var m_wil_kota = _m_wil_kota(sequelize, DataTypes);
  var m_wil_provinsi = _m_wil_provinsi(sequelize, DataTypes);
  var mas_upload_test = _mas_upload_test(sequelize, DataTypes);
  var monitor_pengunjung = _monitor_pengunjung(sequelize, DataTypes);
  var monitor_pengunjung_toko = _monitor_pengunjung_toko(sequelize, DataTypes);
  var monitor_produk = _monitor_produk(sequelize, DataTypes);
  var monitor_toko = _monitor_toko(sequelize, DataTypes);
  var nomor_telepon = _nomor_telepon(sequelize, DataTypes);
  var notifikasi = _notifikasi(sequelize, DataTypes);
  var notifikasi_firebase = _notifikasi_firebase(sequelize, DataTypes);
  var online_booking = _online_booking(sequelize, DataTypes);
  var package_toko = _package_toko(sequelize, DataTypes);
  var pencairan_dana = _pencairan_dana(sequelize, DataTypes);
  var pengaturan_beranda = _pengaturan_beranda(sequelize, DataTypes);
  var pengaturan_flashsale = _pengaturan_flashsale(sequelize, DataTypes);
  var pengaturan_lelang = _pengaturan_lelang(sequelize, DataTypes);
  var pengaturan_saldo = _pengaturan_saldo(sequelize, DataTypes);
  var pengiriman = _pengiriman(sequelize, DataTypes);
  var persetujuan_produk = _persetujuan_produk(sequelize, DataTypes);
  var product_cart_voucher_toko = _product_cart_voucher_toko(sequelize, DataTypes);
  var produk = _produk(sequelize, DataTypes);
  var produk_cart = _produk_cart(sequelize, DataTypes);
  var produk_cover = _produk_cover(sequelize, DataTypes);
  var produk_flashsale = _produk_flashsale(sequelize, DataTypes);
  var produk_lelang = _produk_lelang(sequelize, DataTypes);
  var produk_lelang_deskripsi = _produk_lelang_deskripsi(sequelize, DataTypes);
  var produk_lelang_detail = _produk_lelang_detail(sequelize, DataTypes);
  var produk_rating = _produk_rating(sequelize, DataTypes);
  var produk_report = _produk_report(sequelize, DataTypes);
  var produk_stok = _produk_stok(sequelize, DataTypes);
  var produk_tag = _produk_tag(sequelize, DataTypes);
  var produk_variasi = _produk_variasi(sequelize, DataTypes);
  var produk_video = _produk_video(sequelize, DataTypes);
  var produk_view = _produk_view(sequelize, DataTypes);
  var produk_wishlist = _produk_wishlist(sequelize, DataTypes);
  var promo_jaja = _promo_jaja(sequelize, DataTypes);
  var promo_reward = _promo_reward(sequelize, DataTypes);
  var promo_reward_detail = _promo_reward_detail(sequelize, DataTypes);
  var promo_toko = _promo_toko(sequelize, DataTypes);
  var promosi = _promosi(sequelize, DataTypes);
  var resi_data = _resi_data(sequelize, DataTypes);
  var ro_city = _ro_city(sequelize, DataTypes);
  var ro_kecamatan = _ro_kecamatan(sequelize, DataTypes);
  var ro_province = _ro_province(sequelize, DataTypes);
  var ro_wilayah = _ro_wilayah(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var sensor_kata = _sensor_kata(sequelize, DataTypes);
  var setting = _setting(sequelize, DataTypes);
  var slider_buku = _slider_buku(sequelize, DataTypes);
  var slider_kpop = _slider_kpop(sequelize, DataTypes);
  var sub_kategori = _sub_kategori(sequelize, DataTypes);
  var syarat_ketentuan = _syarat_ketentuan(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var tempebh = _tempebh(sequelize, DataTypes);
  var tentang_jaja_id = _tentang_jaja_id(sequelize, DataTypes);
  var toko = _toko(sequelize, DataTypes);
  var toko_2 = _toko_2(sequelize, DataTypes);
  var toko_admin = _toko_admin(sequelize, DataTypes);
  var toko_bank = _toko_bank(sequelize, DataTypes);
  var toko_banner = _toko_banner(sequelize, DataTypes);
  var toko_follower = _toko_follower(sequelize, DataTypes);
  var toko_freeongkir = _toko_freeongkir(sequelize, DataTypes);
  var toko_info = _toko_info(sequelize, DataTypes);
  var toko_payouts = _toko_payouts(sequelize, DataTypes);
  var toko_pin = _toko_pin(sequelize, DataTypes);
  var toko_saldo = _toko_saldo(sequelize, DataTypes);
  var trafik_pencarian = _trafik_pencarian(sequelize, DataTypes);
  var transaksi = _transaksi(sequelize, DataTypes);
  var transaksi_detail = _transaksi_detail(sequelize, DataTypes);
  var transaksi_history = _transaksi_history(sequelize, DataTypes);
  var transaksi_kurir = _transaksi_kurir(sequelize, DataTypes);
  var transaksi_status = _transaksi_status(sequelize, DataTypes);
  var transaksi_token = _transaksi_token(sequelize, DataTypes);
  var transaksi_toko = _transaksi_toko(sequelize, DataTypes);
  var voucher_customer = _voucher_customer(sequelize, DataTypes);

  produk.belongsTo(asal_produk, { as: "asal_produk_asal_produk", foreignKey: "asal_produk"});
  asal_produk.hasMany(produk, { as: "produks", foreignKey: "asal_produk"});
  customer_address.belongsTo(customer, { as: "id_customer_customer", foreignKey: "id_customer"});
  customer.hasMany(customer_address, { as: "customer_addresses", foreignKey: "id_customer"});
  customer_follower.belongsTo(customer, { as: "id_customer_customer", foreignKey: "id_customer"});
  customer.hasMany(customer_follower, { as: "customer_followers", foreignKey: "id_customer"});
  feed.belongsTo(customer, { as: "id_customer_customer", foreignKey: "id_customer"});
  customer.hasMany(feed, { as: "feeds", foreignKey: "id_customer"});
  toko.belongsTo(customer, { as: "id_user_customer", foreignKey: "id_user"});
  customer.hasMany(toko, { as: "tokos", foreignKey: "id_user"});
  voucher_customer.belongsTo(customer, { as: "id_customer_customer", foreignKey: "id_customer"});
  customer.hasMany(voucher_customer, { as: "voucher_customers", foreignKey: "id_customer"});
  produk.belongsTo(daftar_merek, { as: "merek_daftar_merek", foreignKey: "merek"});
  daftar_merek.hasMany(produk, { as: "produks", foreignKey: "merek"});
  produk.belongsTo(kategori_produk, { as: "id_kategori_kategori_produk", foreignKey: "id_kategori"});
  kategori_produk.hasMany(produk, { as: "produks", foreignKey: "id_kategori"});
  detail_produk_ebook.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(detail_produk_ebook, { as: "detail_produk_ebooks", foreignKey: "id_produk"});
  feed.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(feed, { as: "feeds", foreignKey: "id_produk"});
  inf_pengiriman_produk.belongsTo(produk, { as: "id_detail_produk", foreignKey: "id_detail"});
  produk.hasMany(inf_pengiriman_produk, { as: "inf_pengiriman_produks", foreignKey: "id_detail"});
  informasi_pengiriman.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(informasi_pengiriman, { as: "informasi_pengirimans", foreignKey: "id_produk"});
  monitor_produk.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(monitor_produk, { as: "monitor_produks", foreignKey: "id_produk"});
  persetujuan_produk.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(persetujuan_produk, { as: "persetujuan_produks", foreignKey: "id_produk"});
  produk_cover.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(produk_cover, { as: "produk_covers", foreignKey: "id_produk"});
  produk_stok.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(produk_stok, { as: "produk_stoks", foreignKey: "id_produk"});
  produk_tag.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(produk_tag, { as: "produk_tags", foreignKey: "id_produk"});
  produk_variasi.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(produk_variasi, { as: "produk_variasis", foreignKey: "id_produk"});
  produk_video.belongsTo(produk, { as: "id_produk_produk", foreignKey: "id_produk"});
  produk.hasMany(produk_video, { as: "produk_videos", foreignKey: "id_produk"});
  voucher_customer.belongsTo(promo_jaja, { as: "id_voucher_promo_jaja", foreignKey: "id_voucher"});
  promo_jaja.hasMany(voucher_customer, { as: "voucher_customers", foreignKey: "id_voucher"});
  voucher_customer.belongsTo(promo_toko, { as: "id_voucher_toko_promo_toko", foreignKey: "id_voucher_toko"});
  promo_toko.hasMany(voucher_customer, { as: "voucher_customers", foreignKey: "id_voucher_toko"});
  admin.belongsTo(role, { as: "role_role", foreignKey: "role"});
  role.hasMany(admin, { as: "admins", foreignKey: "role"});
  produk_tag.belongsTo(tag, { as: "id_tag_tag", foreignKey: "id_tag"});
  tag.hasMany(produk_tag, { as: "produk_tags", foreignKey: "id_tag"});
  banner_toko.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(banner_toko, { as: "banner_tokos", foreignKey: "id_toko"});
  customer_follower.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(customer_follower, { as: "customer_followers", foreignKey: "id_toko"});
  daftar_merek.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(daftar_merek, { as: "daftar_mereks", foreignKey: "id_toko"});
  feed.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(feed, { as: "feeds", foreignKey: "id_toko"});
  monitor_toko.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(monitor_toko, { as: "monitor_tokos", foreignKey: "id_toko"});
  produk.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(produk, { as: "produks", foreignKey: "id_toko"});
  produk_video.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(produk_video, { as: "produk_videos", foreignKey: "id_toko"});
  resi_data.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(resi_data, { as: "resi_data", foreignKey: "id_toko"});
  toko_bank.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(toko_bank, { as: "toko_banks", foreignKey: "id_toko"});
  toko_payouts.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(toko_payouts, { as: "toko_payouts", foreignKey: "id_toko"});
  toko_pin.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(toko_pin, { as: "toko_pins", foreignKey: "id_toko"});
  toko_saldo.belongsTo(toko, { as: "id_toko_toko", foreignKey: "id_toko"});
  toko.hasMany(toko_saldo, { as: "toko_saldos", foreignKey: "id_toko"});
  toko_payouts.belongsTo(toko_bank, { as: "id_toko_bank_toko_bank", foreignKey: "id_toko_bank"});
  toko_bank.hasMany(toko_payouts, { as: "toko_payouts", foreignKey: "id_toko_bank"});
  transaksi_detail.belongsTo(transaksi, { as: "id_data_transaksi", foreignKey: "id_data"});
  transaksi.hasMany(transaksi_detail, { as: "transaksi_details", foreignKey: "id_data"});

  return {
    admin,
    asal_produk,
    banner_game,
    banner_slider,
    banner_toko,
    blogs,
    blogs_author,
    blogs_categori,
    cara_pembayaran,
    customer,
    customer_address,
    customer_follower,
    customer_koin_history,
    customer_npl,
    customer_payouts,
    customer_refund,
    customer_rekening,
    customer_saldo,
    customer_saldo_detail,
    customer_token,
    customer_view,
    daftar_kurir,
    daftar_merek,
    daftar_model,
    data_pengguna,
    db_digital,
    db_event,
    db_event_detail,
    db_komplain,
    db_komplain_detail,
    db_komplain_kategori,
    db_payment_method,
    db_payment_method_category,
    db_setting,
    detail_produk_buku,
    detail_produk_ebook,
    dokumen_mass_upload,
    etalase_toko,
    feed,
    feed_comment,
    feed_like,
    flashsale,
    inf_lokasi,
    inf_pengiriman_produk,
    info_jaja,
    informasi_alamata,
    informasi_bank,
    informasi_pengiriman,
    jauto_bank,
    jauto_bunga,
    jauto_config,
    jauto_log,
    jauto_merek,
    jauto_order,
    jauto_order_detail,
    jauto_produk,
    jauto_produk_grades,
    jauto_produk_images,
    jauto_produk_jenis,
    jauto_produk_kategori,
    jauto_produk_kategori_to_merek,
    jauto_produk_packages,
    jauto_slider,
    jauto_testdrive,
    jauto_wilayah,
    kategori_produk,
    kebijakan_privasi,
    ketentuan_ganti_rugi,
    ketentuan_pengembalian,
    ketentuan_pengiriman,
    ketentuan_transaksi,
    kuota_voucher,
    label_mobile,
    lelang_merk,
    lelang_seri,
    log_aktivitas,
    log_testing,
    m_wil_kota,
    m_wil_provinsi,
    mas_upload_test,
    monitor_pengunjung,
    monitor_pengunjung_toko,
    monitor_produk,
    monitor_toko,
    nomor_telepon,
    notifikasi,
    notifikasi_firebase,
    online_booking,
    package_toko,
    pencairan_dana,
    pengaturan_beranda,
    pengaturan_flashsale,
    pengaturan_lelang,
    pengaturan_saldo,
    pengiriman,
    persetujuan_produk,
    product_cart_voucher_toko,
    produk,
    produk_cart,
    produk_cover,
    produk_flashsale,
    produk_lelang,
    produk_lelang_deskripsi,
    produk_lelang_detail,
    produk_rating,
    produk_report,
    produk_stok,
    produk_tag,
    produk_variasi,
    produk_video,
    produk_view,
    produk_wishlist,
    promo_jaja,
    promo_reward,
    promo_reward_detail,
    promo_toko,
    promosi,
    resi_data,
    ro_city,
    ro_kecamatan,
    ro_province,
    ro_wilayah,
    role,
    sensor_kata,
    setting,
    slider_buku,
    slider_kpop,
    sub_kategori,
    syarat_ketentuan,
    tag,
    tempebh,
    tentang_jaja_id,
    toko,
    toko_2,
    toko_admin,
    toko_bank,
    toko_banner,
    toko_follower,
    toko_freeongkir,
    toko_info,
    toko_payouts,
    toko_pin,
    toko_saldo,
    trafik_pencarian,
    transaksi,
    transaksi_detail,
    transaksi_history,
    transaksi_kurir,
    transaksi_status,
    transaksi_token,
    transaksi_toko,
    voucher_customer,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
