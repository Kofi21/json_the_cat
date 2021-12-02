const request = require("request");
const args = process.argv.slice(2);

let breed = args[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    // console.log("error:", error);
    // console.log("statusCode:", response && response.statusCode);
    // console.log("body:", body);

    const data = JSON.parse(body);
    console.log(data[0].description);
  }
);
