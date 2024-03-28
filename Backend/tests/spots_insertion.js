'use strict';

var dbConn  = require('../lib/db');

// initialize array
var values = [];
var num = [100, 39, 31, 48, 42, 18, 55, 153, 14, 45, 103]; 
var letter = ['A', 'B', 'C', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'P'];

var sql = 'INSERT INTO ParkingSpots (LID, spot_num, category) VALUES ?'  

  
  // append new value to the array
for(let i = 0; i < num.length; i++){
    for(let j = 1; j <= num[i]; j++){
        values.push([letter[i], j, 'N']);
    }
}

dbConn.query(sql, [values], function(err) {
    if (err) throw err;
    console.log("Success!");
    dbConn.end();
});