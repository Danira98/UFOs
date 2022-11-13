// // Import the data from data.js
// const tableData = data;

// //Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
// function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a,b) {
    return a+b;
}

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

 // To clear working area of console, type clear()

//  Arrow function

printHello = () => "Hello there!";

// Converted to a n arrow function
addition = (a,b) => a + b;

// Converted to an arrow function
doubleAddition = (c,d) => addition(c,d)*2;

function buildTable(data){
    tbody.html("");
}

data.forEach((dataRow) => {
let row = tbody.append("tr");
Object.values(dataRow).forEach((val) => {
let cell = row.append("td");
cell.text(val);
        }
    );
});

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