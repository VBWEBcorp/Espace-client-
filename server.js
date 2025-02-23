const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour la page site internet
app.get('/site-internet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'site-internet.html'));
});

// Route pour la page référencement
app.get('/referencement', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'referencement.html'));
});

// Route pour la page outils sur mesure
app.get('/outils-sur-mesure', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'outils-sur-mesure.html'));
});

// Route pour la page ressources
app.get('/ressources', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ressources.html'));
});

// Route pour la page contact
app.get('/contact', (req, res) => {
    res.redirect('mailto:contact@vbweb.fr');
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
