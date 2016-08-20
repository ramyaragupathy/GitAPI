
//fcacde1ad790ecc51f6263878dcc28d0c5793969 -> access token
//https://api.github.com/repos/mapbox/mapping/issues -> works
var request = require('request');

var options = {
  url: 'https://api.github.com/repos/mapbox/travel/issues?access_token=fcacde1ad790ecc51f6263878dcc28d0c5793969',
  headers: {
    'User-Agent': 'ramyaragupathy'
  }
};


//https://api.github.com/users/username/repos?callback=? -> for embedding data in web pages



request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var JSON_result = JSON.parse(body); //string to json. JSON.stringify to convert json to string
    console.log(JSON_result.length);

}
});
