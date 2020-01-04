var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm +
  "&api-key=LAgw99sW6tbshUwhkEUUbZ8xyx2rLRVS";
$("#searchButton").on("click", function() {
  var searchTerm = $("#searchTerm").val();
  var numRecords = $("#numRecords").val();
  var startYear = $("#startYear").val();
  var endYear = $("#endYear").val();
  console.log(searchTerm);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(searchQuery) {
    console.log(searchQuery);
    var results = searchQuery.response.docs;
    console.log(results);
    for (var i = 0; i < results.length; ++i) {
      var displayArticles = $("<div>");
      var article = $("<p>");
      article.text(JSON.stringify(results[i]));
      displayArticles.append(article);
      $("#topArticles").append(displayArticles);
    }
  });
});
