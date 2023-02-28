# Client List

Simple démo d'une api symfony avec un front react pour afficher une list de client

## Pré-requis

- PHP 8.1
  - extention sqlite
- Nodejs 16+
- [Cli Symfony]('https://github.com/symfony-cli/symfony-cli/releases')

## Stack

- symfony 6.2
- react 18.2
- sqlite
- bootstrap v5.2
  - theme bootswtch Sandstone

## Installation

série de commande à exécuter pour installer et lancer le projet
```bash
git clone https://github.com/olivierPoussel/clientList.git
```
```bash
# installation symfony
composer install
# installation react
yarn
# compilation app react
yarn build
# initialisation BDD sqlite
php bin/console d:d:c
php bin/console d:m:m
php bin/console d:f:l
# lancement du serveur 
symfony server:start
```
J'ai wrapper l'app react dans symfony pour avoir qu'un projet.

## Répertoire

l'app symfony est dans src et l'app react est dans assets
