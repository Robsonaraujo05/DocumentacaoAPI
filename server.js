import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import usuarioRoutes from './routes/usuario.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota inicial da API 
 *     tags: [Início]
 *     responses:
 *       200:
 *         description: API funcionando!
 */ 
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'API funcionando!' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/api-docs`);
});