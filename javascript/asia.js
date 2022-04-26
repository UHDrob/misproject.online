


    var item1 = ["images/Ottawa-table.jpg", "Japan", "Tokyo, Kyoto, Osaka, Hiroshima"];
    var item2 = ["images/Ottawa-table.jpg", "Korea", "Seoul"];
    var item3 = ["images/Ottawa-table.jpg", "Thailand", "Bangkok, Phuket"];
    var item4 = ["images/Huntsville-table.jpg", "Malaysia", "Kuala Lumpur"];
    var item5 = ["images/Huntsville-table.jpg", "Singapore", "Singapore"];
    var item6 = ["images/Huntsville-table.jpg", "Vietnam", "Ho Chi Minh City"];
    
    var image = document.createElement

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('tableasia').appendChild(table);
    
    // Creating and adding data to first row HEADING ROW ZERO of the table
    let row_0 = document.createElement('tr');
    let heading_1 = document.createElement('th' );
    heading_1.innerHTML = "Country";
    heading_1.colSpan = 2;
    
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Cities";
    
    row_0.appendChild(heading_1);
    row_0.appendChild(heading_3);
    thead.appendChild(row_0);
    
    
    // Creating and adding data to  JAPAN ROW ONW of the table
    let row_1 = document.createElement('tr');
    let row_1_data_1 = document.createElement('td');
    
    var img1 = document.createElement('img');
    img1.src = item1[0];
    
    let row_1_data_2 = document.createElement('td');
    row_1_data_2.innerHTML = item1[1];

    let row_1_data_3 = document.createElement('td');
    row_1_data_3.innerHTML = item1[2];
    
    row_1.appendChild(img1);
    row_1.appendChild(row_1_data_2);
    row_1.appendChild(row_1_data_3);
    tbody.appendChild(row_1);
    
    // Creating and adding data to KOREA ROW TWO of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    
    var img2 = document.createElement('img');
    img2.src = item2[0];
    
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = item2[1];

    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = item2[2];
    
    row_2.appendChild(img2);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
    
    // Creating and adding data to THAILAND ROW THREE of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    
    var img3 = document.createElement('img');
    img3.src = item3[0];
    
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = item3[1];

    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = item3[2];
    
    row_3.appendChild(img3);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);

    // Creating and adding data to MALAYSIA ROW FOUR of the table
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    
    var img4 = document.createElement('img');
    img4.src = item4[0];
    
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = item4[1];

    let row_4_data_3 = document.createElement('td');
    row_4_data_3.innerHTML = item4[2];
    
    row_4.appendChild(img4);
    row_4.appendChild(row_4_data_2);
    row_4.appendChild(row_4_data_3);
    tbody.appendChild(row_4);

    // Creating and adding data to SINGAPORE ROW FIVE of the table
    let row_5 = document.createElement('tr');
    let row_5_data_1 = document.createElement('td');
    
    var img5 = document.createElement('img');
    img5.src = item5[0];
    
    let row_5_data_2 = document.createElement('td');
    row_5_data_2.innerHTML = item5[1];

    let row_5_data_3 = document.createElement('td');
    row_5_data_3.innerHTML = item5[2];
    
    row_5.appendChild(img5);
    row_5.appendChild(row_5_data_2);
    row_5.appendChild(row_5_data_3);
    tbody.appendChild(row_5);

    // Creating and adding data to VIETNAM ROW SIX of the table
    let row_6 = document.createElement('tr');
    let row_6_data_1 = document.createElement('td');
    
    var img6 = document.createElement('img');
    img6.src = item6[0];
    
    let row_6_data_2 = document.createElement('td');
    row_6_data_2.innerHTML = item6[1];

    let row_6_data_3 = document.createElement('td');
    row_6_data_3.innerHTML = item6[2];
    
    row_6.appendChild(img6);
    row_6.appendChild(row_6_data_2);
    row_6.appendChild(row_6_data_3);
    tbody.appendChild(row_6);