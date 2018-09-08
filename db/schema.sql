CREATE DATABASE moviePlannerDB;
use moviePlannerDB;

CREATE TABLE movies (
	id int AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO movies (movie) VALUES ('Movie');