// JSON object
const object = {

    'BRO': {
    
    'BSN': { 'W': 10, 'L': 12 },
    
    'CHC': { 'W': 15, 'L': 7 },
    
    'CIN': { 'W': 15, 'L': 7 },
    
    'NYG': { 'W': 14, 'L': 8 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 15, 'L': 7 },
    
    'STL': { 'W': 11, 'L': 11 }
    
    },
    
    'BSN': {
    
    'BRO': { 'W': 12, 'L': 10 },
    
    'CHC': { 'W': 13, 'L': 9 },
    
    'CIN': { 'W': 13, 'L': 9 },
    
    'NYG': { 'W': 13, 'L': 9 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 12, 'L': 10 },
    
    'STL': { 'W': 9, 'L': 13 }
    
    },
    
    'CHC': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CIN': { 'W': 12, 'L': 10 },
    
    'NYG': { 'W': 7, 'L': 15 },
    
    'PHI': { 'W': 16, 'L': 6 },
    
    'PIT': { 'W': 8, 'L': 14 },
    
    'STL': { 'W': 10, 'L': 12 }
    
    },
    
    'CIN': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CHC': { 'W': 10, 'L': 12 },
    
    'NYG': { 'W': 13, 'L': 9 },
    
    'PHI': { 'W': 13, 'L': 9 },
    
    'PIT': { 'W': 13, 'L': 9 },
    
    'STL': { 'W': 8, 'L': 14 }
    
    },
    
    'NYG': {
    
    'BRO': { 'W': 8, 'L': 14 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CHC': { 'W': 15, 'L': 7 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'PHI': { 'W': 12, 'L': 10 },
    
    'PIT': { 'W': 15, 'L': 7 },
    
    'STL': { 'W': 13, 'L': 9 }
    
    },
    
    'PHI': {
    
    'BRO': { 'W': 8, 'L': 14 },
    
    'BSN': { 'W': 8, 'L': 14 },
    
    'CHC': { 'W': 6, 'L': 16 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'NYG': { 'W': 10, 'L': 12 },
    
    'PIT': { 'W': 13, 'L': 9 },
    
    'STL': { 'W': 8, 'L': 14 }
    
    },
    
    'PIT': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 10, 'L': 12 },
    
    'CHC': { 'W': 14, 'L': 8 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'NYG': { 'W': 7, 'L': 15 },
    
    'PHI': { 'W': 9, 'L': 13 },
    
    'STL': { 'W': 6, 'L': 16 }
    
    },
    
    'STL': {
    
    'BRO': { 'W': 11, 'L': 11 },
    
    'BSN': { 'W': 13, 'L': 9 },
    
    'CHC': { 'W': 12, 'L': 10 },
    
    'CIN': { 'W': 14, 'L': 8 },
    
    'NYG': { 'W': 9, 'L': 13 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 16, 'L': 6 }
    
    }};

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

    if (j === START_INDEX) {
        cell.innerHTML = "Tm";
    }

    else {
        cell.innerHTML = keys[j - 1];
    }
}

// Create rows and columns for table body
const body = table.createTBody();

for (let i = START_INDEX; i < length + 1; i++) {

    let row = body.insertRow(i);

    let cell = row.insertCell(START_INDEX);
    // If body row is the footer or not
    if (i === length) {
        cell.innerHTML = "Tm";
    }
    else {
        cell.innerHTML = keys[i];
    }

    for (let j = START_INDEX; j < length; j++) {

        let cell = row.insertCell(j + 1);

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
            }
            
            else {
                cell.innerHTML = "--";
            }
        }
    }
}