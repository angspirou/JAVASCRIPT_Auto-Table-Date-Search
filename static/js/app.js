// from data.js
var tableData = data;

// Get a reference to the table body from the html page
var tbody = d3.select("tbody");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CREATE TABLE using data.js file
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// For each sighting...
data.forEach((sighting) => {

    // Append a row onto the table
    var row = tbody.append("tr");

    // For each value found on each sighting...
    Object.entries(sighting).forEach(([key, value]) => {
        
        // Append a cell to the table to hold each value
        var cell = tbody.append("td");

        // Have the table's cell contain the value found per sighting
        cell.text(value);
    });
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CREATE FILTER BUTTON
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Get a reference of the filter button from the html page
var button = d3.select("#filter-btn");

// Create function that runs filter when button is clicked on
button.on("click", function() {

    // Prevent the page from refreshing on click
    d3.event.preventDefault();

    // Clear the existing output
        // Without this, new queries will just append to the bottom of the table
    tbody.html("");

    // Get a reference to the datetime id from the html code
        // This is where the user will be inputting their date to search
    var inputElement = d3.select("#datetime");

    // Get the value property of the input from the user
    var inputValue = inputElement.property("value");
    
    // Have user's date input match with a datetime from the data file 
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    
    // Reference the tbody element in the html code
    var tbodyfiltered = d3.select("tbody");

    // For each piece of the filtered date...
    filteredData.forEach((sightingsByDate) => {

        // Append a row onto the filtered table 
        var rowByDate = tbodyfiltered.append("tr");

        // For each value found that matches with the user's input...
        Object.entries(sightingsByDate).forEach(([key, value]) => {
            
            // Append a cell to the table to hold the value
            var cellByDate = tbodyByDate.append("td");
            
            // Have the cell contain the filtered value from the data set 
            cellByDate.text(value);
        });
     });
});