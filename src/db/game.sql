CREATE TABLE game (
  id int not null AUTO_INCREMENT,
  home_id int not null,
  away_id int not null,
  play_time datetime not null,
  location varchar(255) not null,
  PRIMARY KEY (id),
  FOREIGN KEY (home_id) REFERENCES team(id),
  FOREIGN KEY (away_id) REFERENCES team(id)
);