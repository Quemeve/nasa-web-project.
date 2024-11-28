// Asegúrate de importar todas las dependencias necesarias solo una vez
import 'bootstrap/dist/css/bootstrap.min.css';
const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cors = require('cors');  // Solo una declaración de cors

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS
app.use(cors());

app.get('/api/photo-of-the-day', async (req, res) => {
    try {
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.w0d25jQBENM106iY9ceGPtkk0WEAqOo96NGLuhYa}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener datos de la API de NASA:', error);
        res.status(500).json({ error: 'Error al obtener datos de la API de NASA' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

import 'bootstrap/dist/css/bootstrap.min.css';
