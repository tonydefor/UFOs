// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Create a function to hold and display the table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

// Create a function for filtering table we just made
function handleClick() {
    let date = d3.select("datetime").property("value");
// Create a new variable to save the default filter
    let filteredData = tableData;

// Check to see if a data was entered and filter 
// the data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime == date);
    };
    // Rebuild the table using the filtered data
    // NOTE: If no data was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);