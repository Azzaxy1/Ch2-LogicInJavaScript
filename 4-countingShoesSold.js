const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Rainbow Tosca Carduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = (dataPenjualan) => {
  // Valdiasi for parmeters
  if (!Array.isArray(dataPenjualan) || dataPenjualan.length === 0) {
    return "ERROR: Fill in the dataPenjualanPakAldi parameters.";
  }

  let totalPenjualan = 0;
  // Looping melalui setiap elemen dalam array dataPenjualan
  for (const item of dataPenjualan) {
    totalPenjualan += item.totalTerjual;
  }

  return totalPenjualan;
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
