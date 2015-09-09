select p1.name from Employee p1 left join Employee p2 on p1.managerId = p2.id where p1.salary>p2.salary;
