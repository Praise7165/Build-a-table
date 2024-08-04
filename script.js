'Use strict';


// For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>).
// Givenheaders set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names.


// Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];







function constructTable(listOfObjects, id) {
    
    let tableEl = document.createElement('table');
    let keys = Object.keys(listOfObjects[0]);
    let tHeaderRow = document.createElement('tr');



    keys.forEach(key => {
        let tHeader = document.createElement('th');
        tHeader.textContent = key;
        tHeaderRow.appendChild(tHeader);
    });

    tableEl.appendChild(tHeaderRow);



    listOfObjects.forEach(item => {

        let itemValues = Object.values(item);
        let tRow = document.createElement('tr');

        itemValues.forEach(value => {

            let tData = document.createElement('td');
            tData.textContent = value;
    
            tRow.appendChild(tData);  

            if (typeof value === 'number') tData.style.textAlign = 'right';

        });

        tableEl.appendChild(tRow);
    });

    /*
    listOfObjects.forEach(object => {
        let tRow = document.createElement("tr");
        keys.forEach(key => {
          let tData = document.createElement("td");
          tData.textContent = object[key];
          if (typeof object[key] == "number") {
            tData.style.textAlign = "right";
          }
          tRow.appendChild(tData);
        });
        tableEl.appendChild(tRow);
    });

    */

    return tableEl;

}




// Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
// Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

document.querySelector('#mountains').appendChild(constructTable(MOUNTAINS));


