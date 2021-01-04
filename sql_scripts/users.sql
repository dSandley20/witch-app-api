alter table
    users
add
    column id serial primary KEY
add
    column first_name varchar(50),
add
    column last_name varchar (50),
add
    column email varchar(50) UNIQUE,
add
    column phone varchar(12),
add
    column password varchar(100),
add
    column password_hash varchar(100)