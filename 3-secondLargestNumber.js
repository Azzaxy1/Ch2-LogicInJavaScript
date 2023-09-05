const getAngkaTerbesarKedua = (personName) => {
  //* Validasi data undefined or null
  if (personName === undefined || personName === null) {
    return "ERROR: Bro Where is the parameter?";
  }

  //* Validasi array
  if (!Array.isArray(personName)) {
    return "ERROR: Invalid data type.";
  }

  //* Menghapus duplikat dan mengurutkan dalam urutan menurun
  const uniqueSortedNumbers = Array.from(new Set(personName)).sort(
    (a, b) => b - a
  );
  return uniqueSortedNumbers[1];
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8
console.log(getAngkaTerbesarKedua(0)); // Output: Invalid data type
console.log(getAngkaTerbesarKedua()); // Output: ERROR: Bro Where is the parameter?
