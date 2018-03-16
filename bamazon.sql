CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item INTEGER AUTO_INCREMENT NOT NULL,
  product varchar(100) NOT NULL,
  department varchar(100) NOT NULL,
  price INTEGER NOT NULL,
  stock INTEGER NOT NULL,
  PRIMARY KEY(item)
);

INSERT INTO products (product, department, price, stock)
VALUES ("A Brief History of Time", "Books", 25, 11);

INSERT INTO products (product, department, price, stock)
VALUES ("The Colour of Magic", "Books", 15, 10);

INSERT INTO products (product, department, price, stock)
VALUES ("Dresden Files: Storm Front", "Books", 15, 19);

INSERT INTO products (product, department, price, stock)
VALUES ("Hitchiker's Guide ot the Galaxy", "Books", 18, 22);

INSERT INTO products (product, department, price, stock)
VALUES ("Mistborn", "Books", 18, 48);

INSERT INTO products (product, department, price, stock)
VALUES ("Hot Fuzz", "Movies", 22, 8);

INSERT INTO products (product, department, price, stock)
VALUES ("Redline", "Movies", 24, 9);

INSERT INTO products (product, department, price, stock)
VALUES ("Robin Hood Men in Tights", "Movies", 25, 13);

INSERT INTO products (product, department, price, stock)
VALUES ("Scott Pilgrim vs the World", "Movies", 10, 6);

INSERT INTO products (product, department, price, stock)
VALUES ("Stardust", "Movies", 18, 30);

INSERT INTO products (product, department, price, stock)
VALUES ("MCU Phase 1: Box Set", "Movies", 347, 3);

INSERT INTO products (product, department, price, stock)
VALUES ("MCU Phase 2: Box Set", "Movies", 293, 6);

INSERT INTO products (product, department, price, stock)
VALUES ("Deer in the Forest (by Franz Marc)", "Paintings", 31600000, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("Les femmes d'Alger (by Pablo Picasso)", "Paintings", 179000000, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("Nighthawks (by Edward Hopper)", "Paintings", 40500000, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("Starry Night (by Van Gough)", "Paintings", 66300000, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("Water Lilies (by Claude Monet)", "Paintings", 81400000, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("The Lost Monet (by Claude Monet)", "Paintings", 1375000000, 1);