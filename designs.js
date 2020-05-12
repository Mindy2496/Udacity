// Select color input
const colorPicker = document.getElementById('colorPicker').value;
// Select size input
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
const sizePicker = document.getElementById('sizePicker');
//const myTable = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
  //console.log("so far so good"); //testing purposes
});

function makeGrid (height, width) {
  const myTable = document.getElementById('pixelCanvas');
  //resets  myTable when Submit is clicked again
  myTable.innerHTML = "";
  //create table rows and columns
  for (i = 1; i<=height; i++){
    var tableRows = document.createElement('tr');
    for (x = 1; x<=width; x++) {
    var tableCells = document.createElement('td');
    tableRows.appendChild(tableCells);
    myTable.appendChild(tableRows);
    //fills cells with color picked
    tableCells.addEventListener('click', function(event){
      tableCells.style.backgroundColor = colorPicker.value;
    });
      };
    };
};
