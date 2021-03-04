// A few useful methods, properties, and events for this assignment:
// - `getElementById()`
// - `getElementsByTagName()`
// - `createElement()`
// - `appendChild()`
// - `onclick`
// - `node.children`
// - `node.lastElementChild`

let numRows = 0;
let numCols = 0;
let colorSelected;

function addR() 
{
    //gets the grid in the DOM and appends a new row
    let thisGrid = document.getElementById("grid")
    let addRow = document.createElement("tr")

    //for loop to create a cell for each row for as many columns that there are
    for(let i = 0; i < numCols; i++) 
    {
        let rowCell = document.createElement("td");
        
        addRow.appendChild(rowCell);
    }

    //appends and increases the numrows
    thisGrid.appendChild(addRow);
    numRows++;
}

function addC() 
{
    //gets the new grid in the dom and appends new row
    let thisGrid = document.getElementById("grid");
    let allRows = document.querySelectorAll("tr");

    //counter for # of rows
    let countRows = 0;

    //for the amt of rows create a cell in the column
    for(let i = 0; i < numRows; i++) 
    {
        let columnCell = document.createElement("td");
                
        allRows[countRows].appendChild(columnCell);

        countRows++;
    }
//increases the num of cols
    numCols++;
}
 
function removeR() 
{
    //grabs the grid
    let thisGrid = document.getElementById("grid");
    
    //deletes the last row
    thisGrid.deleteRow(numRows-1);

    //decreases num of rows by 1
    numRows--;
}

function removeC() 
{
    //grabs the grid
    let thisGrid = document.getElementById("grid");
    
    let allRows = document.querySelectorAll("tr");

    let countRows = 0;

    //for i < the number of rows, remove the last cell of the last column as we delete the last column
    for(let i = 0; i < numRows; i++) 
    {
        allRows[countRows].removeChild(allRows[countRows].lastChild);

        countRows++;
    }

    //decreases the num of columns by 1
    numCols--;
}

function fillUC() {
    alert("Clicked Fill All Uncolored")
}

function fillAll() {
    alert("Clicked FIll All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function selected() {
    colorSelected = document.getElementById("colorPicker").value;
    console.log(colorSelected);
}