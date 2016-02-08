module.exports = function(input) {
  var query = ""
  for (var k in input) {
    if (query === "") {
      query += "?"
    } else {
      query += "&"
    }
    query = k + "=" + input[k]
  }
  return iopipe.define("https://hacker-news.firebaseio.com/v0/topstories.json".concat,
                       ,JSON.parse)(query)
}
module.exports.iopipe = {
  "in": "FirebaseQuery"
  ,"out": "[]HNitem.id"
}
