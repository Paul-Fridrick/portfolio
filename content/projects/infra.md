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

**Projet personnel** — J'ai développé une solution d’automatisation de déploiement pour éviter de tout refaire manuellement à chaque projet.  
L'objectif : mettre en place une **chaîne CI/CD complète**, sécurisée, et facilement réutilisable.

Ce setup s’appuie sur :
    - **Jenkins**
    - **Docker**
    - **Nginx**
    - **Let's Encrypt**
    - **Un VPS DigitalOcean**

Résultat : un push sur GitHub déclenche automatiquement le build, la création de l’image Docker, le push vers GHCR, et le déploiement via Docker sur le serveur — avec HTTPS activé.

---

## 🔧 Schéma d'architecture

![Schéma d'Infrastructure CI/CD](images/infra-schema.png)

---

## Fonctionnalités

### 🔧 Stack Technologique
    - Docker, Jenkins, Nginx, HTTPS, DigitalOcean
    - Déploiement automatisé depuis GitHub jusqu'au VPS

### 🏗️ Architecture
    - Reverse proxy Nginx
    - Configuration SSL automatique via Certbot

---

## Défis & Solutions

### 🧱 1. Multi-environnement

> **Défi :** Gérer `dev`, `staging`, et `prod` sur une seule machine  
> **Solution :** Chaque projet est isolé dans un conteneur Docker exposé sur un port unique, derrière un reverse proxy Nginx.

---

### 🔐 2. HTTPS & sécurité

> **Défi :** Servir les projets en HTTPS  
> **Solution :** Intégration de Certbot avec renouvellement automatique des certificats Let's Encrypt.

---

### 🔁 3. Intégration continue

> **Défi :** Automatiser build, test, Docker, push et déploiement  
> **Solution :** Jenkins + GitHub Webhooks = déploiement automatique dès un `git push`.

---

### 🌍 4. DNS personnalisé

> **Défi :** Utiliser un domaine chez un registrar externe (LWS)  
> **Solution :** Reconfiguration des DNS pour pointer vers la VPS, configuration Nginx + Certbot.

---

## Objectifs

### 🚀 Performance
- Uniformiser les environnements
- Réduire le temps de déploiement à **quelques secondes**

### 🤝 Collaboration
- Permettre à plusieurs projets (admin, front, API...) de cohabiter sur une même infra
- Architecture extensible pour ajouter d'autres stacks

---

## 🎯 Résultat

Le site **[pfsolutions.tech](https://pfsolutions.tech)** est la première instance de ce setup :

- `git push` → build Angular
- → image Docker générée & poussée
- → déployée sur la VPS
- → servie en HTTPS via Nginx + Certbot

---

## 🔭 Vision

Ce setup a été pensé pour évoluer :
- Multi-projets (front, back, microservices)
- Multi-environnements (dev/prod)
- Compatible Docker Compose & Kubernetes

---
