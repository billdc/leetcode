select t2.id from Weather  t1 left join Weather  t2 on t2.date=date_add(t1.date, INTERVAL 1 day) where t2.temperature>t1.temperature;
