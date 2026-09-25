drop database if exists lojinha;

create database lojinha;
use lojinha;

create table produtos (
	id int auto_increment primary key,
    nome varchar(150) not null,
    marca varchar(150) not null,
    preco decimal(10,2) not null check(preco > 0)
);

insert into produtos (nome, marca, preco) values
('Notebook', 'Samsung', 4500.00),
('Mouse', 'Dell', 150.00),
('Grama', 'Nature', 1.99);

create table clientes (
	id int auto_increment primary key,
    nome varchar(150) not null,
    email varchar(150) not null,
    telefone char(13) not null
);

insert into clientes (nome, email, telefone) values
('Gustavo Henrique Bruesky', 'Bruxasgostosas69@gmail.com', '47 96996-9969'),
('Bruno Marquês', 'cachorrodaparaiba@gmail.com', '47 91723-3825'),
('Gabrielle Helmas', 'garfildlasanha@gmail.com', '47 90372-8723');