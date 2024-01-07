// JSON object
const object = "Some JSON";

// Get length from object
const keys = Object.keys(object)
const length = keys.length;

// Get table HTML
const table = document.getElementById("table");

// Create table header
const header = table.createTHead();
const START_INDEX = 0;
const headerRow = header.insertRow(START_INDEX);
for (let j = START_INDEX; j < length + 1; j++) {

    let cell = headerRow.insertCell(j);
    cell.classList.add("header-data");

    if (j === START_INDEX) {
        cell.innerHTML = "Tm";
    }

    else {
        cell.innerHTML = keys[j - 1];

        if (j === length) {
            cell.classList.add("last-column");
        }
    }
}

// Create rows and columns for table body
const body = table.createTBody();

for (let i = START_INDEX; i < length + 1; i++) {

    let row = body.insertRow(i);

    let cell = row.insertCell(START_INDEX);
    cell.classList.add("left");
    // If body row is the footer or not
    if (i === length - 1) {
        cell.classList.add("second-last-row");
    }
    if (i === length) {
        cell.innerHTML = "Tm";
        cell.classList.add("last-row");
    }
    else {
        cell.innerHTML = keys[i];

    }

    for (let j = START_INDEX; j < length; j++) {

        let cell = row.insertCell(j + 1);

        if (j === length - 1) {
            cell.classList.add("last-column");
        }
        if (i === length - 1) {
            cell.classList.add("second-last-row");
        }
        if (i === length) {
            cell.classList.add("last-row");
        }


        // Get team i
        let team = keys[i];

        // create footer
        if (i === length) {
            cell.innerHTML = keys[j];
        }

        else {
            // if team and opponent are not equal
            if (i != j) {
                let versusTeam = keys[j];
                cell.innerHTML = object[team][versusTeam].W;
                cell.classList.add("wins");
            }
            
            else {
                cell.innerHTML = "--";
                cell.classList.add("wins");
            }
        }
    }
}