var client = require("./connection.js");

client.indices.putMapping(
  {
    index: "gov",
    type: "constituencies",
    body: {
      properties: {
        constituencyname: {
          type: "keyword",
        },
      },
    },
  },
  function(err, resp, status) {
    if (err) {
      console.log(err);
    } else {
      console.log(resp);
    }
  }
);
