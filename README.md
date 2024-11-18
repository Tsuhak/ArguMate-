# 📋 Application "ArguMate"

## 📝 Objectif

Créer une application React en TypeScript pour gérer des listes de pour et contre. L'utilisateur pourra ajouter des arguments pour chaque côté, voir un décompte des arguments, et supprimer des éléments.

---

## 🗂️ Plan du projet

### 1. **Phase de conception**

- Définir le nom de l'application : **ArguMate**.
- Réfléchir à une interface utilisateur simple et intuitive.
- Choisir un style visuel avec Tailwind CSS.

### 2. **Structure des composants**

- `App`: Composant principal qui gère l'état global.
- `Header`: Affiche le titre de l'application.
- `ArgumentList`: Contient deux sous-composants :
  - `ProsList`: Liste des arguments "Pour".
  - `ConsList`: Liste des arguments "Contre".
- `ArgumentForm`: Formulaire pour ajouter des arguments.
- `ArgumentItem`: Représente un argument individuel avec un bouton pour le supprimer.

### 3. **État et gestion des données**

- Utiliser `useState` pour gérer les listes d'arguments.
- Définir un type TypeScript pour chaque argument :
  ```typescript
  type Argument = {
    id: string
    text: string
    type: "pour" | "contre"
  }
  ```

### 4. **Interactions et fonctionnalités**

- **Ajouter des arguments** : L'utilisateur peut ajouter des arguments via un formulaire.
- **Supprimer des arguments** : L'utilisateur peut supprimer un argument de la liste.
- **Afficher un compteur** : Afficher le nombre d'arguments pour chaque côté ("Pour" et "Contre").
- **Calculer la différence** : Afficher la différence entre le nombre de "Pour" et de "Contre".

### 5. **Style et design**

- **Utiliser Tailwind CSS** : Appliquer un design moderne et épuré.
- **Responsive Design** : Assurer un affichage adaptatif pour toutes les tailles d'écran.
- **Couleurs distinctes** : Utiliser des couleurs différentes pour distinguer les arguments "Pour" et "Contre".

### 6. **Fonctionnalités supplémentaires (optionnelles)**

- **Réorganisation des arguments** : Ajouter la possibilité de réorganiser les arguments via drag-and-drop.
- **Marquer comme important** : Permettre de marquer un argument comme "important" pour le mettre en avant.
- **Sauvegarde dans le localStorage** : Enregistrer les arguments dans le `localStorage` pour persister les données entre les sessions.

### 7. **Améliorations futures**

- **Exportation des arguments** : Ajouter une option pour exporter les arguments sous forme de fichier texte.
- **Partage des listes** : Permettre aux utilisateurs de partager leur liste d'arguments via un lien unique.
- **Système de vote** : Ajouter un système de vote pour chaque argument afin que les utilisateurs puissent voter "Pour" ou "Contre".

---

## 🛠️ Technologies utilisées

- **React** pour la gestion des composants.
- **TypeScript** pour la sécurité et la lisibilité du code.
- **Tailwind CSS** pour le style.
