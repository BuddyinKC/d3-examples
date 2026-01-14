/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(data => {
	data.forEach(d => {
		d.height = Number(d.height)
	})
	
	const svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500)

	const bars = svg.selectAll("rect")
		.data(data)

	bars.enter().append("rect")
		.attr("x", (d, i) => (i * 50) + 50)
		.attr("y", 0)
        .attr("width", 40)
		.attr("height", d => d.height)
		.attr("fill", d => {
			if (d.name === "Shanghai Tower") {
				return "green"
			}
			else {
				return "blue"
			}
		})
}).catch(error => {
	console.log(error)
})