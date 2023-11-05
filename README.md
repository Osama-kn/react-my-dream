# [React + Vite] Dream App - Starting page UI

## Objectif
L’objectif de ce mini projet est de développer une page de bienvenue en mode responsive (UI compatible avec PC et mobile) pour l’application Dream App.
Le design ci-dessous illustre l’interface graphique de la page de bienvenue de l’App Dream sur les deux supports PC et Mobile.

- [UI PC](/src/assets/pc_ui.png)

- [UI Mobile](/src/assets/mobile_ui.png)

⚠️ Note:
- le formulaire doit être valide lors du clic sur le boutton en mode PC.
- Les blocs de textes avec l'icones doivent être des composants.
- Lors du clic sur le boutton il faut appeler en asynchrone le endpoint https://api.db-ip.com/v2/free/self :
  - Si la somme des nombres de l'IP est > 100 afficher une alert "OK"
  - Si la somme des nombres de l'IP est <= 100 afficher une alert "KO"
  _Exemple : 62.39.10.29 = 140_


## Resources graphiques 
Les resources graphiques nécessaire (En format SVG) au développement de ce mini projet sont disponibles dans le dossier [assets](/src/assets/).

## Références
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
