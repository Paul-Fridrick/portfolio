---
title: OneClick
slug: OneClick
date: 2025-03-26
image: images/One-Click-Black.png
technologies: [React, FastApi, Go, MariaDb]
github: https://github.com/username/projet-1
demo: https://demo-projet-1.com
featured: true
order: 1
---

# OneClick

## Description

**Projet de Fin d'Études** — OneClick est une plateforme innovante permettant de simplifier et d'automatiser l'initialisation de projets web. Grâce à une interface intuitive, OneClick génère les environnements de développement complets (frontend, backend, base de données) en quelques clics, en prenant en compte les technologies choisies par l'utilisateur.

## Fonctionnalités

### Stack Technologique
- Sélection de stacks technologiques (React, Angular, NestJS, Node.js, FastAPI, etc.)
- Génération automatique de projets avec les dépendances adéquates
- Création de Dockerfiles compatibles avec les technologies sélectionnées

### Architecture
- Mode mono-repo ou multi-repo selon les préférences du développeur
- Interface utilisateur claire pour la configuration des projets
- Intégration d'une base de données MariaDB avec configuration automatique
- Scripts Go pour la gestion et le déploiement des projets

## Défis et Solutions

### 1. Gestion des Technologies
**Défi :** Gérer la compatibilité entre plusieurs combinaisons de technologies frontend et backend.  
**Solution :** Mise en place d'un système modulaire basé sur des templates pour chaque stack, combinés dynamiquement selon le choix de l'utilisateur.

### 2. Structure du Projet
**Défi :** Offrir une flexibilité entre mono-repo et multi-repo.  
**Solution :** Conception d'un générateur adaptatif capable de structurer les projets selon le mode sélectionné, avec une logique de routing conditionnelle.

### 3. Containerisation
**Défi :** Faciliter l'intégration de Docker dès la création du projet.  
**Solution :** Génération automatique de fichiers Docker et Docker Compose, adaptés à la stack choisie, permettant une exécution rapide en environnement isolé.

### 4. Expérience Utilisateur
**Défi :** Créer une interface simple pour des utilisateurs non techniques.  
**Solution :** Développement d'une interface React claire et ergonomique, guidant pas à pas la création du projet.

## Objectifs

### Performance
- Réduire le temps d'initialisation des projets
- Uniformiser les environnements de développement

### Collaboration
- Faciliter le travail en équipe grâce à des structures standardisées
- Rendre l'initialisation accessible à tous profils (techniques ou non)

## Résultat

OneClick permet de créer en quelques instants un environnement de développement complet, prêt à être utilisé, avec une structure propre et modulaire. Le projet a été pensé pour évoluer vers un produit réel destiné aux freelances, agences et étudiants.

