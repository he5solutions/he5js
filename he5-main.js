/*
He5 Js - Initiated by He5 Solutions - he5.in

#he5id ( id="he5id" )
.he5class ( class="myClass" )

*/

let He5 = {};


// Common Functions
He5.generatePassword = function(length=16) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

He5.getRandomNumber = function(max = 10, min = 0) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min)) + min;
};

He5.getRandomFromArray = function(arrayValue){
    return arrayValue[He5.getRandomNumber(arrayValue.length - 1)];
}

He5.encodeBase64 = function(input) {
    return btoa(input);
};

He5.decodeBase64 = function(input) {
    return atob(input);
};

He5.redirect = function(url, newTab=false){
    let target = "_self";
    if(newTab)
    {
        target = "_blank";
    }
    window.open(url, target);
};

He5.hide = function(elementName){
    const elements = document.querySelectorAll(elementName);
    elements.forEach(element => {
        element.style.display = "none";
    });
};

He5.unHide = function(elementName){
    const elements = document.querySelectorAll(elementName);
    elements.forEach(element => {
        element.style.display = "block";
    });
};

He5.copyToClipBoard = function(copyText) {
  return navigator.clipboard.writeText(copyText)
    .then(() => {
      return true;
    })
    .catch(err => {
      console.error("Error copying text: ", err);
      return false;
    });
};

He5.reLoad = function(){
    location.reload();
}

He5.trimString = function(string, maxLength){
    return string.length > maxLength ? string.substring(0, maxLength) : string;
}

He5.getUrlParams = function(url = window.location.href) {
    // Create a URL object for easier manipulation
    const urlObj = new URL(url);

    // Use URLSearchParams to parse query string
    const params = new URLSearchParams(urlObj.search);

    // Convert params to an object
    const result = {};
    for (const [key, value] of params.entries()) {
       result[key] = decodeURIComponent(value);
    }
    return result;
}

He5.getUrlParamValue = function(paramName){
    return He5.getUrlParams()[paramName];
}


///Table Handling
He5.downloadTableAsCSV = function(tableId, filename = "he5jstabletocsv", neglectColumns = [], filters = new Map()) {
    const table = document.getElementById(tableId);
    let csvContent = "";
    // Loop through table rows
    rowLoop:
    for (let row of table.rows) {
        let rowData = [];
        let rowValues = row.cells;
        let c = 0;
        for (let i = 0; i < rowValues.length; i++) {
          if(neglectColumns.includes(i))
          {
            continue;
          }
          let cell = rowValues[i];
          let content = cell.textContent;
          //filters OR Condition
          for (const [key, value] of filters){
            if((i == key) && (content == value))
            {
                continue rowLoop;
            }
          }
          // Escape commas and wrap text in quotes if needed
          let cellText = content.includes(",") ? `"${content}"` : content;
          rowData.push(cellText);
        }
        csvContent += rowData.join(",") + "\n"; // Join cells with commas and add a newline
    }

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename+".csv";
    document.body.appendChild(link); // Append link to the body for compatibility
    link.click();
    document.body.removeChild(link); // Clean up link element
    window.URL.revokeObjectURL(link.href); // Release the object URL
};
