const log = console.log;
const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday"
// };

// //note - bookJSON belos is a string... it is not a JSON object. Trying to access bookJSON.title will not work; However, book.title is "Ego is the enemy".
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// //read the file and gather our binary data
// const dataBuffer = fs.readFileSync("1-json.json");
// //convert our data to a string
// const dataJSON = dataBuffer.toString();
// //parsed our string data into an object
// const data = JSON.parse(dataJSON);
// //accessed a property from our data
// log(data.author);

const dataJSON = fs.readFileSync("1-json.json").toString();
const parsedData = JSON.parse(dataJSON);

parsedData.name = "Walter";
parsedData.age = 28;

const data = JSON.stringify(parsedData);

fs.writeFileSync("1-json.json", data);
