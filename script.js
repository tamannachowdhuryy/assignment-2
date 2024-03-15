/**
Author(s): Sumayia Rashid, Tamanna Chowdhury, Zeeshan Ahmed Gondal
Course: CSCI-39548 Johnny Lai
Assignment: #2

* This file contains functions that allows you to create, and modify a 2 dimensional grid.
*/

// Declaration of global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

/**
 * This function adds a new row to the grid.
 * @note Time complexity is O(n), where n is the number of columns. The complexity is due to iterating through each column to append cells to the new row. If there are no columns, it adjusts the count to reflect the addition of a new column.
 * @author Sumayia Rashid
**/
function addR() {
    //Grab the grid HTML element
    let grid = document.getElementById("grid");

    //Create a new row 
    let row = document.createElement("tr");

    //Add the row element to the grid element
    grid.appendChild(row);
    
    //Base case; return if there are no columns
    if (numCols == 0){
        numCols++;
    } 
    //Iterate through columns and add rows Add appropriate columns
    for (let i = 0; i < numCols; i++) {
        let col = document.createElement("td");
        col.onclick = function () { this.style.backgroundColor = colorSelected; };
        row.appendChild(col);
    }

    //Add created row
    grid.appendChild(row);

    //Update and increment row global variable
    numRows++;
}

/**
 * This function adds a new column to every existing row in the grid.
 * @note Time complexity is O(n), where n is the number of rows. The complexity primarily comes from iterating through each row to append a new column.
 * @author Sumayia Rashid
**/
function addC() {
        //Base case; return if there are no rows
        if (numRows === 0) {
            addR();
            return;
        }
    
        //Grab the HTML element
        let allRows = document.getElementById("grid").querySelectorAll("tr");
    
        //Iterate through rows and add columns
        for (let i = 0; i < numRows; i++) {
            let col = document.createElement("td");
            col.onclick = function () { this.style.backgroundColor = colorSelected; };
            allRows[i].appendChild(col);
        }
    
        //Update and increment column global variable
        numCols++;
}

/**
 * This function removes the last row that exists.
 * @note Time complexity O(1), ignoring DOM manipulation. Not dependent on how many rows exist.
 * @author Tamanna Chowdhury
**/
function removeR() {
    var grid = document.getElementById("grid"); // Get the grid table element
    //Delete a cell(s) going up
    if (grid.rows.length > 1) {
        grid.deleteRow(grid.rows.length - 1);
        numRows--;  // Modified this, numRows was previously not being decremented when removeR() was called.
    }
}

/**
 * This function removes the last column that exists by removing the last cell that exists in each row.
 * @note Time complexity O(n), dependent on how many rows exist.
 * @author Tamanna Chowdhury
**/
function removeC() {
    var grid = document.getElementById("grid"); // Get the grid table element
    // Delete a cell(s) going left
    for (var i = 0; i < grid.rows.length; i++) {
        var lastCellIndex = grid.rows[i].cells.length - 1;

        if (lastCellIndex >= 0) {
            grid.rows[i].deleteCell(lastCellIndex);
        }
    }
    
    numCols--; // Modified this, numCols was previously not being decremented when removeC() was called.
}

/**
 * This is a mutator function, it modifies the global variable for the current color selected.
 * @author Johnny Lai
**/
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

/**
 * This function fills all of the uncolored cells in the grid.
 * @note Nested loop, time complexity O(n^2), iterates through row & column to check each cell. O(1) for conditional comparison.
 * @author Zeeshan Ahmed Gondal
**/
function fillU() {
    var grid = document.getElementById("grid"); 

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            var cell = grid.rows[i].cells[j];

            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected; // Set the cell's color
            }
        }
    }
}

/**
 * This function updates the color for all of the cells in the grid, depending on global var colorSelected.
 * @note Nested loop, time complexity O(n^2), iterates through row & column to update each cell to the specified color.
 * @author Zeeshan Ahmed Gondal
**/
function fillAll() {
    var grid = document.getElementById("grid"); 

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            var cell = grid.rows[i].cells[j];

            cell.style.backgroundColor = colorSelected; // Set the cell's color
        }
    }
}

/**
 * This function updates the color for all of the cells in the grid to the default value.
 * @note Nested loop, time complexity O(n^2), iterates through row & column to update each cell to default values.
 * @author Tamanna Chowdhury
**/
function clearAll() {
    var grid = document.getElementById("grid"); // Get the grid table element
    // for every row and column
    for (let row of grid.rows) {
        for (let cell of row.cells) {
            // clear the cell color
            cell.style.backgroundColor = "";
        }
    }
}