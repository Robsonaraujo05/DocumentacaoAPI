import express from "express";

const router = express.Router();

let ALUNOSDS2A = [
    { id: 1, nome: "Robson", email: "robson@gmail.com" },
    { id: 2, nome: "Gustavo", email: "gustavo@gmail.com" },
    { id: 3, nome: "Tanus", email: "tanus@gmail.com" }
];

/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: Listar usuarios
 *      tags: [Usuários]
 *      responses:
 *          200:
 *              description: listar todos os usuarios
*/
router.get("/", (req, res) => {
    res.status(200).json(ALUNOSDS2A);
});


/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Cadastrar um novo usuário
 *      tags: [Usuários]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nome:
 *                              type: string
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: "Usuario criado com sucesso"
 *          400:
 *              desccription: "Gentileza anexar nome e email"
 */
router.post("/", (req, res) => {
    console.log(req.body);
    const { nome, email } = req.body;

    if (!nome && !email) {
        return res.status(400).json({
            msg: "Gentileza anexar nome e email"
        })
    }

    const novoAluno = {
        id: ALUNOSDS2A.length + 1,
        nome,
        email
    };

    ALUNOSDS2A.push(novoAluno);

    res.status(201).json({
        msg: "Usuario cadtrado com sucesso"
    })
})

export default router;