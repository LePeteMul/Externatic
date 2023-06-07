
-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

-- Katia verif


DROP TABLE IF EXISTS user_techno;
DROP TABLE IF EXISTS offer_techno;
DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS application;
DROP TABLE IF EXISTS offer;
DROP TABLE IF EXISTS techno;
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS contract;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS user;



DROP DATABASE IF EXISTS externatic;
CREATE DATABASE externatic;

USE externatic;



CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  gender VARCHAR(200),
  lastname VARCHAR(250) NOT NULL,
  firstname VARCHAR(250) NOT NULL,
  email VARCHAR(450) NOT NULL,
  phone VARCHAR(450) NOT NULL,
  city VARCHAR(250),
  cv TEXT,
  admin BOOLEAN NOT NULL,
  password VARCHAR(250) NOT NULL,
  profil_picture VARCHAR(250),
  contact_mode VARCHAR(250),
  job_pref VARCHAR(250) NOT NULL,
  job_city VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE company(
  id INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(300) NOT NULL,
  email VARCHAR(450) NOT NULL,
  password VARCHAR(250) NOT NULL,
  phone VARCHAR(450) NOT NULL,
  logo VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE contract(
  id INT NOT NULL AUTO_INCREMENT,
  contract_type VARCHAR(250),
  PRIMARY KEY (id)
);

CREATE TABLE status(
  id INT NOT NULL AUTO_INCREMENT,
  status_name VARCHAR(300),
  PRIMARY KEY (id)
);

CREATE TABLE offer(
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT NOT NULL,
  job VARCHAR(400) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  remote VARCHAR(250),
  contract_id INT NOT NULL,
  min_salary INT NOT NULL,
  max_salary INT NOT NULL,
  description TEXT NOT NULL,
  prerequisites TEXT NOT NULL,
  city_job VARCHAR(350) NOT NULL,
  department VARCHAR(350) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES company(id),
  FOREIGN KEY (contract_id) REFERENCES contract(id) 
);

CREATE TABLE application(
  candidate_id INT NOT NULL,
  application_id INT NOT NULL,
  status_id INT NOT NULL,
  FOREIGN KEY(candidate_id) REFERENCES user(id),
  FOREIGN KEY (application_id) REFERENCES offer(id),
  FOREIGN KEY (status_id) REFERENCES status(id),
  PRIMARY KEY (candidate_id, application_id, status_id)
);


CREATE TABLE favorite(
  candidate_id INT NOT NULL,
  offer_id INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES user(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  PRIMARY KEY (candidate_id, offer_id)
);

CREATE TABLE techno(
  id INT NOT NULL AUTO_INCREMENT,
  techno_name VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE offer_techno(
  techno_id INT NOT NULL,
  offer_id INT NOT NULL,
  FOREIGN KEY (techno_id) REFERENCES techno(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  PRIMARY KEY (techno_id, offer_id)
);

CREATE TABLE user_techno(
  user_id INT NOT NULL, 
  techno_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (techno_id) REFERENCES techno (id),
  PRIMARY KEY (user_id, techno_id)
);

