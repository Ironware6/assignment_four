let table = document.getElementById("table-manipulator");
table.addEventListener("click", (event) => {event.preventDefault()}); 

function myFunction(c) {
    document.getElementById("table").style.backgroundColor = c;
}
function clearAll() {
    document.getElementById("table").style.backgroundColor = white;
}


function appendCol() {
    let tbl = document.getElementById('table'),
        i;

    for (i = 0; i < tbl.rows.length; i++) {
        let cell = tbl.rows[i];
        createCell(cell.insertCell(tbl.rows[i].cells.length), 0, 'col');
    }
}

function appendRow(){
	let grid=  document.getElementById('table'),
		row = grid.insertRow(grid.rows.length),
		i;

	for(i = 0; i < grid.rows[0].cells.length; i++)
		createCell(row.insertCell(i), 0, 'row');

}

function createCell(cell, text, style){
	let div = document.createElement('div'),
		txt = document.createTextNode(text);

	div.appendChild(txt);
	div.setAttribute('class', style);
	div.setAttribute('className', style);
	cell.appendChild(div);
}


function deleteRows(){
	let tbl = document.getElementById('table'),
	lastRow = tbl.rows.length -1;

	tbl.deleteRow(lastRow);
}

function deleteCols(){
	let tbl = document.getElementById('table');
	let lastCol = tbl.rows.length;
	let i;

	console.log(lastCol);
	 for(i = 0; i < lastCol; i++){
	 	tbl.rows[i].deleteCell(0);
	 }
}

