


    var item1 = ["images/Ottawa-table.jpg", "Canada", "Montreal, Quebec, Ottawa, Toronto"];
    var item2 = ["images/Huntsville-table.jpg", "U.S.A.", "San Francisco, Pensacola, Huntsville"];
    
    var image = document.createElement
        
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('tablenorthamerica').appendChild(table);
    
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th' );
    heading_1.innerHTML = "Country";
    heading_1.colSpan = 2;
    
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Cities";
    
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
    
    
    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    
    var img1 = document.createElement('img');
    img1.src = item1[0];
    
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = item1[1];

    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = item1[2];
    
    row_2.appendChild(img1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
    
    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    
    var img2 = document.createElement('img');
    img2.src = item2[0];
    
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = item2[1];

    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = item2[2];
    
    row_3.appendChild(img2);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
    


