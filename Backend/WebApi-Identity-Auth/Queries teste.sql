select * from [identity].Categories


  -- how to insert datetime
  insert into [identity].[Categories] (Name, Description, CreatedAt)
  values ('Cama Mesa e Banho', 'Tudo para cama, mesa e banho.', '20241113 10:34:09 PM');


select p.Name, p.Description, p.Price, c.Name from [identity].Products p join [identity].Categories c on p.CategoryId=c.Id;



