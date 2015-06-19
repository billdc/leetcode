# Write your MySQL query statement below
Rising temperature
select t2.id from Weather  t1 left join Weather  t2 on t2.date=date_add(t1.date, INTERVAL 1 day) where t2.temperature>t1.temperature;


Duplicate Emails
select distinct(t1.email) from Person t1,Person t2 where t1.email=t2.email and t1.id!=t2.id;

Customers Who Never Order 
select t1.name from Customers t1 where t1.id not in (select customerid from Orders);

Delete Duplicate Emails
delete p1 from Person p1,Person p2 where p1.email=p2.email and p1.id>p2.id;