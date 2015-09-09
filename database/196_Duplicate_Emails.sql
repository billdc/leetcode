select distinct(t1.email) from Person t1,Person t2 where t1.email=t2.email and t1.id!=t2.id;
