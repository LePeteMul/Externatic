-- SQLBook: Code

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

CREATE TABLE contract(
  id INT NOT NULL AUTO_INCREMENT,
  contract_type VARCHAR(250),
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  gender VARCHAR(250),
  lastname VARCHAR(250) NOT NULL,
  firstname VARCHAR(250) NOT NULL,
  email VARCHAR(450) NOT NULL UNIQUE,
  phone VARCHAR(450),
  city VARCHAR(250),
  cv TEXT,
  admin  TINYINT DEFAULT 0,
  password VARCHAR(250) NOT NULL,
  profil_picture VARCHAR(250),
  contact_mode VARCHAR(250),
  pref_job VARCHAR(250),
  job_city VARCHAR(300),
  pref_contract INT,
  PRIMARY KEY (id),
  FOREIGN KEY ( pref_contract) REFERENCES contract(id)
);

CREATE TABLE company(
  id INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(300) NOT NULL,
  email VARCHAR(450) NOT NULL,
  password VARCHAR(250) NOT NULL,
  phone VARCHAR(450) NOT NULL,
  logo VARCHAR(300),
  presentation TEXT,
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
   id INT NOT NULL AUTO_INCREMENT,
  candidate_id INT NOT NULL,
  offer_id INT NOT NULL,
  status_id INT NOT NULL,
  company_id INT NOT NULL,
  FOREIGN KEY(candidate_id) REFERENCES user(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  FOREIGN KEY (status_id) REFERENCES status(id),
  FOREIGN KEY (company_id) REFERENCES company(id),
  PRIMARY KEY (id)
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

INSERT INTO contract (contract_type) VALUES ("CDI"), ("CDD"), ("Alternance"), ("Interim");


INSERT INTO user (gender,lastname,firstname,email,phone,city,cv,admin,password,profil_picture, contact_mode,pref_job,job_city, pref_contract)VALUES ("Female","Harley", "Guillaume", "q.harley@gmail.com", "06 62 19 98", "Nantes","queen.cv", 0, "****", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqUGJHg5RA-YchvuWW8TPgbvoSC2K2SiAPQ&usqp=CAU","email", "Dévloppeuse front-end","Nantes", 1),
 ("Male","Dupont", "Eddy", "p.dupont@gmail.com", "06 82 99 98", "Bordeaux","pierre.cv", 0, "****", "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?q=10&h=200","email", "Dévloppeuse back-end","Bordeaux", 2),
 ("Male","Martini", "Luciano", "l.martini@gmail.com", "06 82 10 91", "Nantes","luciano.cv", 0, "****", "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5378700.jpg&fm=jpg","email", "Dévloppeuse back-end","Nantes", 1),
 ("Female","Leclerc", "Amandine", "a.leclerc@gmail.com", "06 82 23 88", "Nantes","amandine.cv", 0, "****", "https://media.https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80","email", "Lead Tech Java","Nantes", 4),
  ("Female","Chabert", "Marie", "m.chabert@gmail.com", "06 22 22 28", "Nantes","marie.cv", 0, "****", "https://www.frejoux-photographe.fr/wp-content/gallery/portrait-pro-corporate/Photographe-portrait-entreprise-pro-Corporate-toulon-Celine.jpg","email", "Dévloppeuse back-end","Nantes", 1);



INSERT INTO company (company_name, email, password, phone, logo, presentation) VALUES ("Nickel", "recrutement@nickel.fr", "****", "01 76 49 00 00 ", "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2b/Nickel-logo.svg/1200px-Nickel-logo.svg.png","service bancaire alternatif français ouvert à toute personne physique à partir de douze ans ou plus, sans condition de revenus et sans possibilité de découvert ni de crédit"),
("allovoisins", "recrutement@allovoisins.fr", "****", "01 26 49 00 00 ", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Allo_voisins_icon.png/800px-Allo_voisins_icon.png","AlloVoisins est la marketplace de référence dédiée aux prestations de services et à la location de matériel , rassemblant une communauté de plus de 4 millions de membres, dont 300 000 professionnels (auto-entrepreneurs et petites entreprises)"),
("Groupama", "recrutement@groupama.fr", "****", " 02 40 05 17 27", "https://presse.groupama.com/download-image/62432ca1728ee72abb6d0f78","Groupama est une compagnie d'assurance française qui propose une large gamme de services d'assurance et financiers"),
("Decathlon", "recrutement@decathlon.fr", "****", "02 40 49 08 09", "https://logos-marques.com/wp-content/uploads/2020/09/Decathlon-logo.png","Entreprise française de grande distribution de sport et de loisirs, créée en 1976 par Michel Leclercq.");

INSERT INTO offer (company_id, job,`date`, remote, contract_id, min_salary, max_salary, description, prerequisites, city_job, department) VALUES (1, "Data Analyst Produit","2023-06-20 15:30:45", "remote",2, 42000,45000,"Vous rejoignez l'équipe Produit et vous aidez les Product Managers à prendre des décisions clés sur leurs features en cours, ainsi qu'à construire une roadmap pertinente pour répondre aux problématiques de nos clients. Vous travaillerez à faire parler la donnée pour orienter les décisions stratégiques produit. Vous travaillerez en collaboration étroite avec les product owners pour répondre à différentes problématiques : Quels sont les comportements des clients qui favorisent l’utilisation de l’application Mobile / Espace Client Web ? Vous allez réfléchir à des solutions pour mettre en valeur les features de l’Espace client. Vous allez contribuer aux socles de données de la communauté Data. Vous allez monitorer l'activité de votre Périmètre via des Dashboards.","Esprit d'équipe","Nantes", " la Loire-Atlantique"),
(2, "Développeur fullstack junior H/F","2023-06-20 17:30:45", "remote",1, 33000,40000," Développement front et back de nouvelles fonctionnalités pour la prise en charge à distance de patients touchés par des maladies chroniques et des fragilités sociales :
Outils interactifs pour les visio : tableau-blanc, sondage intéractifs, etc…
Animations in-app et outils pédagogiques pour les patients
Fonctionnalités autour du suivi des objets connectés remis aux patients
Tableau de bord avec des alertes pour les professionnels","Symfony & React","Nantes", " la Loire-Atlantique"),
(3, "Lead Tech Java en DSI – H/F","2023-06-20 16:30:45", "remote",3, 10000,12000,"Vous intégrez une équipe AGILE, en tant que développeur JAVA (F/H/X). Vos missions consistent à : 

Comprendre les besoins clients dans le but de définir les solutions les plus adaptées,
Participer aux cérémonies avec les équipes PO, Scrum, MOAs, Métiers,
Partager les bonnes pratiques de développement : qualité de code et de tests, industrialisation"," JAVA, Springboot, JS (Angular et Vue)","Nantes", " la Loire-Atlantique"),
(4, "Développeur Back end Java H/F @Nantes gare","2023-06-21 11:30:45", "remote",2, 37000,42000,"En lien avec le directeur technique, les chefs de projets et vos collègues développeur :

Analyse technique des besoins
Architecture, conception et développement d’applications web essentiellement (plus ponctuellement il est possible d'intervenir sur des projets mobile / AR / VR / etc.)
Tests (unitaires et fonctionnels)
Veille technologique","Esprit d'équipe","Java", " la Loire-Atlantique"),
(4, "Responsable de projets SI H/F","2023-06-21 10:30:45", "remote",4, 35000,40000," En tant que Responsable de Projets SI Outre-mer vous aurez en charge le pilotage des projets et le management des ressources internes MOE.

En tant que Responsable de projets SI Outre-mer vous aurez pour missions :

Responsable de l'équipe MOE, AMOA du périmètre SI Outre Mer (Antilles Guyane et Pacifique, Nouvelle Calédonie),
Conduite du projet (Planning / Coûts / Délais - ~ 4m€ de budget),
Organisation, communication, animation, management, pilotage, recrutement et suivi des prestataires","Min 3ans d'expériences","DevOps", " la Loire-Atlantique");

INSERT INTO techno (techno_name) VALUES ("Java"), ("C#"), ("PHP"), ("Python"), ("React");

INSERT INTO user_techno(user_id, techno_id) VALUES (1,1), (1,5),(2,3), (3,4), (4,1);

INSERT INTO offer_techno(techno_id, offer_id) VALUES (4,1) ,(2,2), (5,2), (1,4);

INSERT INTO favorite(candidate_id, offer_id) VALUES (1,2), (2,1), (2,3), (4,2);

INSERT INTO status(status_name) VALUES ("En cours de traitement"), ("Entretien planifié"),("Accepté"),("Refusé");

INSERT INTO application(candidate_id, offer_id,status_id, company_id) VALUES (1,1,1,3), (1,1,3,4), (2,2,2,1),(3,1,1,2 ),(3,5,1,3 ), (3,2,1,4), (3,3,1,1),(3,4,1,3), (4,4,1,4), (5,1,3,1), (5,4,2,1) ;



