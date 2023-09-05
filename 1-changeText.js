const changeWord = (selectedText, changedText, text) => {
  // Memisahkan teks menjadi array berdasarkan selectedText
  const words = text.split(selectedText);

  // Menggabungkan array kembali dengan changedText sebagai pemisah
  const newText = words.join(changedText);

  return newText;
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
