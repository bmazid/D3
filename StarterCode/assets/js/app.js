// @TODO: YOUR CODE HERE!
var svgWidth = 900;
var svgHeight = 700;

var margin = {
  top: 20,
  right: 40,
  bottom: 100,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("../data/data.csv", function(err, data) {
 if (err) throw err;
 console.log(data)
})


// d3.csv("data.csv", function(error, data) {
// 	console.log(data)
// })