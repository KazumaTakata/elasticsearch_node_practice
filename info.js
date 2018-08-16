var client = require("./connection.js");

client.count({ index: "gov", type: "constituencies" }, function(
  err,
  resp,
  status
) {
  console.log("constituencies", resp);
});
