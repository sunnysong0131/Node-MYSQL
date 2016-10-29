var mysql = require('mysql');
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

var chosenquantity;
var chosenID;
var chosenprice;
prompt.start();

connection.query("select * from Products", function(err,res){
	if (err) throw err;
	for (a=0;a<res.length;a++){
	console.log("Item ID number: "+res[a].Item_id+" | Product Name: "+res[a].ProductName+" | Category: "+res[a].DepartmentName+" | Price: "+res[a].Price+" | StockQuantity: "+res[a].StockQuantity);
	console.log("------------------------------------------------------------------------------------------------------------------------------------");
	};

	console.log("Enter the ID number of the item you wish to purchase.");

	prompt.get(['Item_Id'], function(err, idselect) {
		var choice=idselect.Item_Id;
		console.log("You selected item # "+choice);   // test if id been selected
				console.log("The selectes item have "+res[choice].StockQuantity+" left.");
				chosenquantity=res[choice].StockQuantity;
				chosenID=res[choice].ItemID;
				chosenprice=res[choice].Price;


	console.log("Enter the quantity you want to purchase.");

	prompt.get(['Quantity_demand'], function(err, quantitywant) {
					var quantity=quantitywant.Quantity_demand;
					if(quantity>res[choice].StockQuantity){
						console.log("We don't have enough of those to satisfy your unreasonable demands. We only have "+res[chosenindex].StockQuantity+".");
					}
					else {
						chosenquantity=chosenquantity-quantity;
						totalcost=chosenprice*quantity;
						console.log("Your order has been filled. You owe $"+totalcost+".");
						console.log("There are "+chosenquantity+" left where those came from.");

						}
	});	


    });

});	