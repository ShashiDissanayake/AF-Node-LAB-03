const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  console.log("File Content:");
  console.log(data);
});