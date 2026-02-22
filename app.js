const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log(data);
});


fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});