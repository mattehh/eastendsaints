CREATE TABLE season (
    id int not null AUTO_INCREMENT,
    name varchar(255) not null unique,
    division_id int not null,
    start_date DATE not null,
    end_date DATE not null,
    PRIMARY KEY (id),
    FOREIGN KEY (division_id) REFERENCES division(id)
);