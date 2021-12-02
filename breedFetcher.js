const request = require("request");
// const args = process.argv.slice(2);

const fetchBreedDescription = function (breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null);
      return;
    }
    if (error) {
      console.log("API Error", error.message);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
