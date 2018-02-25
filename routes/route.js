exports.city = function(req, res) {
    var cityLabel = "";
    var city = "";
    if (req.params.city == "london" || req.params.city == "") {
      city = "london";
      cityLabel = "London";
    } else if (req.params.city == "paris") {
      city = "paris";
      cityLabel = "Paris";
    } else if (req.params.city == "newyork") {
      city = "newyork";
      cityLabel = "New York";
    } else if (req.params.city == "madrid") {
      city = "madrid";
      cityLabel = "Madrid";
    }
    var cityURL =
      "https://pixabay.com/api/?key=8158793-b6b28f3581a06e835f99844f5&q=" +
      city +
      "&image_type=photo";
    res.render("city", {
      City: cityURL,
      Label: cityLabel
    });
  }