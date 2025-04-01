---
title: Infrastructure
slug: Infrastructure
date: 2025-03-26
image: images/ci:cd.webp
technologies: [Docker, Jenkins, Nginx, HTTPS]
demo: https://pfsolutions.tech
featured: true
order: 1
---

# Infrastructure

## Description

**Projet Personnel** — Développant diverses solutions sur mon temps libre pour approfondir mes connaissances, je me suis confronté à un problème : de devoir tout déployer à la main à chaque fois. Du coup je me suis posé la question de comment automatiser le déploiement de mes applications de manière sûre et sécurisée.

Ce projet m'a permis de construire une véritable **chaîne CI/CD complète**, depuis le push GitHub jusqu'à la mise en ligne publique sécurisée d'un projet conteneurisé. J’ai utilisé **Jenkins, Docker, Nginx, Let's Encrypt et DigitalOcean** pour orchestrer tout cela.

## Fonctionnalités

### Stack Technologique
- Sélection de stacks technologiques (Docker, Jenkins, Nginx, HTTPS, DigitalOcean)
- Automatisation du déploiement depuis GitHub jusqu'à un VPS

### Architecture
- Reverse proxy avec Nginx et configuration automatique du SSL via Certbot

## Défis et Solutions

### 1. Déploiement multi-environnement
**Défi :** Gérer différents environnements (dev, staging, prod) sur un seul VPS.  
**Solution :** Conteneurisation de chaque projet avec Docker, exposition sur des ports distincts, et reverse proxy Nginx configuré dynamiquement pour chaque domaine ou sous-domaine.

### 2. Sécurisation de l'accès
**Défi :** Servir les projets en HTTPS avec renouvellement automatique.  
**Solution :** Intégration de Certbot pour générer et renouveler automatiquement les certificats Let's Encrypt.

### 3. Intégration continue
**Défi :** Automatiser la chaîne de build, test, build Docker, push, et déploiement.  
**Solution :** Mise en place d'un pipeline Jenkins détectant chaque push GitHub et déclenchant automatiquement la chaîne CI/CD.

### 4. DNS & Domaine personnalisé
**Défi :** Configurer un domaine personnalisé sur un registrar externe (LWS).  
**Solution :** Pointage DNS manuel vers l’IP du VPS + configuration Nginx et génération SSL certifiée par Let's Encrypt.

## Objectifs

### Performance
- Uniformiser les environnements de développement
- Déployer automatiquement dès un `git push`

### Collaboration
- Permettre à d'autres projets de se brancher sur la même architecture

## Vision

Ce setup me permet désormais de déployer facilement plusieurs projets (client, admin, API...) avec une logique standardisée. Il est conçu pour évoluer vers une architecture scalable, multi-sites, et potentiellement orchestrée (Docker Compose ou Kubernetes).

## Résultat

Le projet de déploiement sur `https://pfsolutions.tech` en est une première démonstration concrète : push sur GitHub, génération d’image Docker, publication sur GitHub Container Registry, déploiement sur un VPS, et mise en ligne sécurisée automatiquement.
