const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  // Validasi data
  if (!Array.isArray(dataPenjualan)) {
    return "ERROR: Invalid data type";
  }

  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "Tere Liye";
  let maxTerjual = 0;

  for (const penjualan of dataPenjualan) {
    // Validasi apakah data penjualan memiliki properti yang diperlukan
    if (
      !penjualan.hargaBeli ||
      !penjualan.hargaJual ||
      !penjualan.totalTerjual
    ) {
      return "ERROR: Data penjualan tidak lengkap";
    }

    //* Menghitung total modal dan total keuntungan
    totalModal += penjualan.hargaBeli * penjualan.totalTerjual;
    totalKeuntungan +=
      (penjualan.hargaJual - penjualan.hargaBeli) * penjualan.totalTerjual;

    //* Menentukan produk buku terlaris
    if (penjualan.totalTerjual > maxTerjual) {
      maxTerjual = penjualan.totalTerjual;
      produkBukuTerlaris = penjualan.namaProduk;
    }
  }

  //* Menghitung persentase keuntungan
  const persentaseKeuntungan =
    ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";

  // Memformat totalKeuntungan dan totalModal menjadi format Rupiah
  const formatRupiah = (angka) => {
    const reverse = angka.toString().split("").reverse().join("");
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return "Rp. " + ribuan;
  };

  const formattedTotalKeuntungan = formatRupiah(totalKeuntungan);
  const formattedTotalModal = formatRupiah(totalModal);

  //* Mencari penulis terlaris dengan total terjual tertinggi
  for (const data of dataPenjualan) {
    if (data.penulis === "Tere Liye" && data.totalTerjual >= maxTerjual) {
      maxTerjual = data.totalTerjual;
      penulisTerlaris = "Tere Liye";
    }
  }

  return {
    totalKeuntungan: formattedTotalKeuntungan,
    totalModal: formattedTotalModal,
    persentaseKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
