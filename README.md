# Mon CV

Ce projet contient mon CV personnel développé avec React JS et Material-UI, offrant une interface interactive et personnalisable.



## Fonctionnalités

- Affichage dynamique des informations personnelles, de l'expérience, de l'éducation, etc.
- Thème personnalisable avec prise en charge de Material-UI pour une apparence cohérente.
- Intégration de icônes et de polices personnalisées pour une touche unique.
- Ajout facile de nouvelles sections et de contenu supplémentaire.

## Prérequis

 Avant de démarrer le projet assurez-vous d'avoir les éléments suivants installés :

- Node.js : [Téléchargement](https://nodejs.org)
- npm : Généralement installé avec Node.js

## Installation

1. Clonez ce dépôt de code sur votre machine locale :


2. Accédez au répertoire du projet :


3. Installez les dépendances nécessaires :
-npm install 
- npm install react-dom
- npm install @material-ui/core
- npm install @emotion/react @emotion/styled
- npm install @material-ui/icons
- npm install --save-dev prettier (Pour le formatage)

si vous souhaitez déployer le projet, vous pouvez configurer github pages. pour cela vous aurez besoin de faire cette commande : 
- npm install --save-dev gh-pages
- suivez les instructions de confuguration de github pages avec ce lien : 
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site


## Personnalisation

Vous pouvez personnaliser votre CV en modifiant les fichiers sources dans le répertoire `src/`. Voici quelques points à considérer :

- Mettez à jour les données dans les fichiers `data.js` pour refléter votre expérience, éducation, compétences, etc.
- Personnalisez le thème en modifiant les propriétés directement au niveau des composants Material UI. 
- Ajoutez vos propres icônes ou utilisez les icônes Material-UI en important vos composants dans material IU. n'hesitez pas à jeter un coup d'oeil dans la documentation de Material UI. 
- Ajoutez vos propres polices en les important et en les configurant. J'ai utilisé les liens CDN suivant  pour les fonts Nunito sans et Quicksand si vous souhaitez faire comme moi : 
-  <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
-   <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />

## Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante :
- npm run build
- npm install -g serve
- serve -s build



Cela lancera l'application sur [http://localhost:3000](http://localhost:3000) dans votre navigateur par défaut.

## Construction

Pour construire l'application prête pour la production, exécutez la commande suivante :
- npm run deploy 

Cela générera les fichiers optimisés dans le répertoire `build/`.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à ouvrir une nouvelle issue ou à soumettre une pull request.



