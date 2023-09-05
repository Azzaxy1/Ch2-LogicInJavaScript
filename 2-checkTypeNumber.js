const checkTypeNumber = (givenNumber) => {
  //* Validasi data
  if (givenNumber === undefined || givenNumber === null) {
    return "ERROR: Bro Where is the parameter?";
  }

  if (typeof givenNumber !== "number") {
    return "ERROR: Invalid data type";
  }

  //* GANJIL OR GENAP
  if (givenNumber % 2 === 0) {
    return "GENAP"; // Mengembalikan "GENAP" jika angka genap
  } else {
    return "GANJIL"; // Mengembalikan "GANJIL" jika angka ganjil
  }
};

console.log(checkTypeNumber(10)); // Output: "GENAP"
console.log(checkTypeNumber(3)); // Output: "GANJIL"
console.log(checkTypeNumber("3")); // Output: "ERROR"
console.log(checkTypeNumber({})); // Output: "ERROR"
console.log(checkTypeNumber([])); // Output: "ERROR"
console.log(checkTypeNumber()); // Output: "ERROR"
