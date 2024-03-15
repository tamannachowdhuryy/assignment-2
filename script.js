// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
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

// Add a column
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

// Remove a row
function removeR() {
    var grid = document.getElementById("grid"); // Get the grid table element
    //Delete a cell(s) going up
    if (grid.rows.length > 1) {
        grid.deleteRow(grid.rows.length - 1);
        numRows--;  // Modified this, numRows was previously not being decremented when removeR() was called.
    }
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