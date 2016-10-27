var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root", 
		password: "root", 
		database: "Bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("Connected as id "+connection.threadId);

});

connection.query("select * from Products", function(err,res){
	if (err) throw err;
	for (a=0;a<res.length;a++){
	console.log("Item ID #"+res[a].Item_id+" | Product Name: "+res[a].ProductName+" | Category: "+res[a].DepartmentName+" | Price: "+res[a].Price);
	console.log("------------------------------------------------------------------------------------------------------------------------------------");
	};

	console.log("Enter the ID number of the item you wish to purchase.");

	prompt.get(['EnterItemID'], function(err, result1) {
		setTimeout(valid,2000);
		var choice=result1.EnterItemID;
		for (var b=0;b<res.length;b++){
			if (choice==res[b].ItemID){
				match=true;
				chosenindex=b;
				chosenquantity=res[b].StockQuantity;
				chosenID=res[b].ItemID;
				chosenprice=res[b].Price;

				
	console.log("Enter the quantity you want to purchase.");