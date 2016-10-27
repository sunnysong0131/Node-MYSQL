create database Bamazon;

use Bamazon;

create table Products ( 
 Item_id INT NOT NULL AUTO_INCREMENT,
 ProductName VARCHAR(45) NULL,
 DepartmentName varchar(45) NULL, 
 Price DECIMAL(10,2) NULL,
 StockQuantity INT NULL,
 PRIMARY KEY (Item_id)
 );
 
 insert into Products (ProductName, DepartmentName, Price, StockQuantity) 
 values('Headband','Crafts','10.50','1000'), ('Viniq','Wine','35','200'), 
 ('Resume Portfolio','Office','20.99','15000'), ('Cleanser','Beauty','18.77','300'), 
 ('Memory Foam Pillow','Home','19.99','2000'), ('Twin Comforter','Home','89.99','100'),
 ('Dasani Water','Food','5.99','20000'), ('Raisin Cereal','Food','3.24','30000'),
 ('Pentel Eraser','Office','4.99','50000'), ('Shampoo','Beauty','12.99','400');
 
 select * from Bamazon.Products;