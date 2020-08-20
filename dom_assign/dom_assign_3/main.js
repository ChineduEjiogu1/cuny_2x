let rows = 0;
let columns = 0;

const table = document.getElementById("my-table");

const addRowButton = document.getElementById("add-row-button");

const addRow = () =>{
    const newRow = document.createElement("tr");
    if(columns === 0){
        const newCell = document.createElement("td");
        newRow.appendChild(newCell);
        columns = 1;
    }else{
        for(let i = 0; i < columns; i++){
            const newCell = document.createElement("td");
            newRow.appendChild(newCell);
        }
    }
    table.appendChild(newRow);
    rows++;
    
};

const addColumn = () => {
    if(rows === 0){
        const newRow = document.createElement("tr");
        const newCell = document.createElement("td");
        newRow.appendChild(newCell);
        table.appendChild(newRow);
        rows = 1;
    }else{
        currentRows = document.getElementsByTagName("tr");
        const rowArr = Array.from(currentRows);
        rowArr.forEach((row) =>{
            const newCell = document.createElement("td");
            row.appendChild(newCell);
        });
        rows++;
    }
    columns++;
}


addRowButton.addEventListener('click', (event)=>{
    console.log("clicked add row");
    addRow();
});

const addColumnButtom = document.getElementById("add-column-button");

addColumnButtom.addEventListener('click', (event)=>{
    console.log("clicked add column");
    addColumn();
});

const removeRow = () => {
    if(rows === 0) return;

    const currentRows = document.getElementsByTagName("tr");
    const rowArr = Array.from(currentRows);
    const lastRow = rowArr[rowArr.length - 1];

    lastRow.remove();

    rows--;
};

const removeRowButton = document.getElementById("add-remove-row-button");

removeRowButton.addEventListener("click",(event)=>{
    console.log("clicked remove row");
    removeRow();
});

// to removeColumn
const removeColumn = () => {
    // check if columns, return if false
    if (columns === 0) return;
    // grab currentRows
    // loop over currentRows
    const currentRows = document.getElementsByTagName("tr");
    const rowArr = Array.from(currentRows);
    // remove the last child element of each Row
    rowArr.forEach((row) => {
      row.lastElementChild.remove();
    });
    // decrease column count
    columns--;
  };
  
  // target the remove column button
  const removeColumnButton = document.getElementById("remove-column-button");
  
  // add eventlistener to removeColumnButton
  removeColumnButton.addEventListener("click", (event) => {
    console.log("clicked remove column");
    removeColumn();
  });