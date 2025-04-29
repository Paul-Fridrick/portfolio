---
title: Safecode
slug: Safecode
date: 2025-03-26
image: https://www.intigriti.com/blog/news/owasp-top-10
technologies: [Nuxt, GO, Docker, OWAPS]
github: https://github.com/Capstone-SafeCode/Documentations.git
demo: https://youtu.be/R2mLn4wOaj8
featured: true
order: 1
---

## Description

**Projet de spécialisation** 🎓 - Durant ma 4e année, j'ai décidé de me spécialiser en CyberSécurité 🔒. Dans le cadre de la validation de celle-ci, j'ai dû réaliser, en groupe de 4, une solution dans le thème de ma spé. C'est de là qu'est née **SafeCode** 🚀.

**SafeCode** est une solution qui permet de tester les possibles failles de sécurité directement dans son code, basé sur le top10 des erreurs OWAPS (The Open Web Application Security Project) 🛡️.

Ce projet s'appuie sur différentes technologies :
- **Nuxt** ⚡ pour un front rapide et propre.
- **Go** 🧩 pour le back autant pour l'API que pour l'engine d'analyse. Le **Go** permet une rapidité d'exécution.
- **MongoDB** 🛢️ pour une base de données stable et modifiable à tout moment.
- **Docker** 🐳 pour faire tourner l'application dans un environnement sain.

**Résultat** 🎯 - L'application permet de tester la sécurité de son code, en mettant un `.zip` 📦 ou directement en rentrant un lien vers le repository Github 🔗.  
L'utilisateur peut également retrouver son historique de test pour revenir ou revoir ses erreurs passées 📚.

---

## Fonctionnalités

- **Upload du code** 🖇️ : deux manières différentes d'upload son code sur l'application
    - On peut envoyer un `.zip`, l'application se chargera de récupérer les fichiers à l'intérieur 📂 et de déterminer la technologie.
    - On peut envoyer un lien du repository Github 🔗 pour que l'upload récupère directement les fichiers.

- **Analyse** 🔍 : permet d'analyser le code en fonction de la technologie et des règles déterminées dans l'application.

- **Historique de test** 🕰️ : chaque utilisateur peut retrouver dans son compte l'historique des tests qu'il a faits pour lui permettre de revenir sur un morceau de code ou sur une erreur précise.

---

## Défis et Solutions

Durant tout le projet plusieurs défis se sont confrontés à nous et en particulier à moi.

### Simplification de l'interface par rapport aux concurrents
> **Défi** ⚠️ : Ne pas perdre l'utilisateur dès qu'il arrive sur l'application  
> **Solution** ✅ : Utiliser les nouveaux codes et une interface moderne et simple

### La compréhension des erreurs
> **Défi** ⚠️ : Comprendre les erreurs et surtout comment les résoudre en fonction de la technologie  
> **Solution** ✅ : Manger des pages de documentation 📖 et s'aider de l'IA 🤖 pour la réalisation

### L'apprentissage du GO
> **Défi** ⚠️ : Apprendre un nouveau langage n'est jamais évident, mais avec les connaissances que j'ai acquises en C et C++ au cours de mon cursus à EPITECH, cela m'a permis de comprendre vite le langage.  
> **Solution** ✅ : Commencer par des parties que l'on sait faire dans un autre langage avant de complexifier les choses.

### La communication dans le groupe
> **Défi** ⚠️ : Faire en sorte que tout le groupe avance en même temps et que chaque membre ait du travail  
> **Solution** ✅ : Rendez-vous hebdomadaire 📅 pour faire un point, en plus des points avec les Projects Managers (Féli && Emilie)

### L'anglais
> **Défi** ⚠️ : Communiquer en anglais sur chaque rendu, documentation et rendez-vous  
> **Solution** ✅ : Se forcer malgré les fautes, les hésitations ou les tentatives de faire passer un mot français avec l'accent anglais 😅, à parler.

---

## Objectifs

### Performances 🚀
- Avoir un algorithme rapide et efficace
- Permettre à plusieurs utilisateurs de faire des tests simultanés

### Ajout de nouvelles technologies facilement 🛠️
- Pouvoir ajouter dans l'engine d'analyse une nouvelle technologie facilement

---

## Résultat

La solution supporte :
- deux technologies : Python 🐍 et C# ⚙️
- L'interface est très simple d'utilisation 🎨

---

## Vision

Cette application est amenée à évoluer :
- Plus de technologies 🔥
- Une plateforme collaborative pour travailler en équipe 🤝
- Toujours améliorer et optimiser l'engine ⚡

