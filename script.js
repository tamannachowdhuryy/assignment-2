// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
   
}

// Remove a column
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

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
