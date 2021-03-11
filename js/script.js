// A few useful methods, properties, and events for this assignment:
// - `getElementById()`
// - `getElementsByTagName()`
// - `createElement()`
// - `appendChild()`
// - `onclick`
// - `node.children`
// - `node.lastElementChild`

let numRows = 1;
let numCols = 1;
let colorSelected;

function selected() {
    colorSelected = document.getElementById("colorPicker").value;
    document.getElementById("initial-box").style.backgroundColor = colorSelected;
}

function addR() 
{
    //gets the grid in the DOM and appends a new row
    let thisGrid = document.getElementById("grid")
    let addRow = document.createElement("tr")

    if (numCols == 0) { //for loop to create 1 box if there are no columns
        var box = document.createElement("td");
        box.onclick = function() {
            this.style.backgroundColor = document.getElementById("colorPicker").value;
        };
        addRow.appendChild(box);
        numCols++;
    } else { //for loop to create a cell for each row for as many columns that there are
        for(let i = 0; i < numCols; i++) {
            var box = document.createElement("td");
            box.onclick = function() {
                this.style.backgroundColor = document.getElementById("colorPicker").value;
            };
            addRow.appendChild(box);
        }
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
        // let columnCell = document.createElement("td");
        var box = document.createElement("td");
        box.onclick = function() {
            this.style.backgroundColor = document.getElementById("colorPicker").value;
        };
        allRows[countRows].appendChild(box);

        countRows++;
    }
    //increases the num of cols
    numCols++;
}

function deleteR() {
    alert("Clicked Delete Row")
}

function deleteC() {
    alert("Clicked Delete Column")
}

function fillUC() {
    alert("Clicked Fill All Uncolored")
}

function fillAll() {
    alert("Clicked FIll All")
}

function clearAll() {
    //change all grids color into intial color = "teal"
    let clearcolor = document.querySelectorAll('td').forEach(td => td.style.backgroundColor = "white");
}