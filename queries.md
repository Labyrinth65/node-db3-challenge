# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productname, c.categoryname
FROM products as p
join categories as c
on c.categoryid = p.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName
FROM orders as o
join shippers as s
on o.shipperid = s.shipperid
where orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.productname, d.quantity
FROM orders as o
join orderdetails as d
on o.orderid = d.orderid
join products as p
on d.productid = p.productid
where o.orderid = 10251
order by productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderid, c.customername, e.lastname as 'Employee Last Name'
FROM orders as o
join customers as c
on o.customerid = c.customerid
join employees as e
on o.employeeid = e.employeeid

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.categoryname, count(\*) as Count
FROM products as p
join categories as c
on p.categoryid = c.categoryid
group by c.categoryname

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT o.orderid, count(\*) as ItemCount
FROM orderdetails as d
join orders as o
on d.orderid = o.orderid
group by o.orderid
