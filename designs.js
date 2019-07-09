// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const color = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight').value;
const width = document.querySelector('#inputWidth').value;

//Sets initial grid
makeGrid(height, width);
//Makes grid after inputs
sizePicker.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});
function makeGrid(high, wide) {
for (let h = 0; h < high; h++) {
    let col = canvas.insertRow(h);
    for (let w = 0; w < wide; w++) {
        let row = col.insertCell(releaseEvents);
        //colors cells
        row.addEventListener('click', (e) => {
            row.style.backgroundColor = color.value;
        });
    }
}
}
