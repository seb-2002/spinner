let spinnerArray = [
  "|               ",
  "/               ",
  "-               ",
  "\\              ",
  "|               ",
  "/               ",
  "-               ",
  "\\              ",
  "\n"
];

let timer = 100;
for (let character of spinnerArray) {
  setTimeout(() => {
   process.stdout.write("\r"+character);
  }, timer);
  timer += 200;
}


// let timer = 0;
// for (let character of characters) {
//   setTimeout(() => {
//   }, timer);
//   timer += 200;
// };

