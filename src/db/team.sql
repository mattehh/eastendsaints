CREATE TABLE team (
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    season_id int not null,
    color varchar(255) not null,
    PRIMARY KEY (id),
    FOREIGN KEY (season_id) REFERENCES season(id)
);