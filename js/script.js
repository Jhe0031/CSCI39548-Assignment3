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

function addR() {
    alert("Clicked Add Row")
}

function addC() {
    alert("Clicked Add COlumn")
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
    alert("Clicked Clear All")
}

function selected() {
    colorSelected = document.getElementById("colorPicker").value;
    console.log(colorSelected);
}