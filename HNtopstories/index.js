module.exports = function(input, context) {
  var query = ""
  for (var k in input) {
    if (query === "") {
      query += "?"
    } else {
      query += "&"
    }
    query = k + "=" + input[k]
  }
  iopipe.exec("https://hacker-news.firebaseio.com/v0/topstories.json" + query,
              ,JSON.parse
              ,context.done)
}
