# Write your MySQL query statement below
Rising temperature
select t2.id from Weather  t1 left join Weather  t2 on t2.date=date_add(t1.date, INTERVAL 1 day) where t2.temperature>t1.temperature;


Duplicate Emails
select distinct(t1.email) from Person t1,Person t2 where t1.email=t2.email and t1.id!=t2.id;

Customers Who Never Order 
select t1.name from Customers t1 where t1.id not in (select customerid from Orders);

Delete Duplicate Emails
delete p1 from Person p1,Person p2 where p1.email=p2.email and p1.id>p2.id;

Second Highest Salary
select max(salary) from Employee where salary !=(select max(salary) from Employee);

Employees Earning More Than Their Managers 
select p1.name from Employee p1 left join Employee p2 on p1.managerId = p2.id where p1.salary>p2.salary;

Combine Two Tables
select p.FirstName, p.LastName, a.City, a.State from Person p left join Address a on p.personid = a.personid;

Department Highest Salary
select t2.name,t1.name,t1.salary from Employee t1,(select d.id,d.name,max(e.salary) as salary from Employee e left join Department d on e.departmentid=d.id where d.name is not null group by d.id) t2 where t1.departmentid = t2.id and t1.salary = t2.salary;
