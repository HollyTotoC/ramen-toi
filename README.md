# 🍜 Ramen Invitation App

Ce projet est une application React qui invite les utilisateurs à aller manger des ramen. L'application utilise plusieurs technologies modernes pour offrir une expérience utilisateur interactive et engageante.

## ✨ Fonctionnalités

- **🎉 Bouton "Yes" avec Confetti** : Lorsque l'utilisateur clique sur "Yes", des confettis apparaissent et une modale s'ouvre après un délai de 3 secondes.
- **🚫 Bouton "No" qui se déplace** : Le bouton "No" se déplace aléatoirement lorsque l'utilisateur essaie de cliquer dessus.
- **📅 Modale avec formulaire** : La modale permet à l'utilisateur de choisir une date et une heure pour aller manger des ramen.
- **📤 Partage natif** : Le formulaire utilise l'API de partage natif pour envoyer les détails de l'invitation via les applications de messagerie disponibles sur l'appareil de l'utilisateur.
- **🖼️ Modèles 3D** : L'application affiche des modèles 3D de ramen et de bol de ramen en utilisant Three.js et React Three Fiber.

## 🛠️ Technologies Utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **TypeScript** : Superset de JavaScript qui ajoute des types statiques.
- **Vite** : Outil de build rapide pour les projets front-end modernes.
- **Tailwind CSS** : Framework CSS utilitaire pour un développement rapide et réactif.
- **Three.js** : Bibliothèque JavaScript pour créer et afficher des graphiques 3D dans le navigateur.
- **React Three Fiber** : Liaison React pour Three.js.
- **shadcn/ui** : Composants UI pour React.
- **date-fns** : Bibliothèque pour manipuler les dates en JavaScript.
- **react-confetti** : Composant React pour afficher des confettis.

## 🚀 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/ramen-invitation-app.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd ramen-invitation-app
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

## 📂 Structure du Projet

```plaintext
├── public
│   ├── assets
│   │   ├── bg.jpg
│   │   ├── ramen
│   │   │   └── scene.gltf
│   │   └── bowl
│   │       └── scene.gltf
├── src
│   ├── components
│   │   ├── 3dBowl.tsx
│   │   ├── 3dRamen.tsx
│   │   ├── ConfettiComponent.tsx
│   │   ├── FormComponent.tsx
│   │   ├── NoButton.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

## 💡 Utilisation

- **🎉 Bouton "Yes"** : Cliquez sur le bouton "Yes" pour afficher des confettis et ouvrir la modale après un délai de 3 secondes.
- **🚫 Bouton "No"** : Essayez de cliquer sur le bouton "No" pour le voir se déplacer aléatoirement.
- **📅 Formulaire** : Remplissez le formulaire dans la modale pour choisir une date et une heure, puis soumettez-le pour partager l'invitation via les applications de messagerie disponibles.

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request pour toute amélioration ou correction de bug.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
