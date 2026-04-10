//importa a bibloteca swagger-jsdoc para gerar a documentação da API
import swaggerJSDoc from "swagger-jsdoc";


 const options = {

definition: {

    openapi: "3.0.0",
    info:{
        title: "API em node.js com Express",
        version: "1.0.0",
        description: "Documentação da API utilizando Swagger"
    },

    servers: [
        {
            url: "http://localhost:3000",
        }
    ]
},

apis:["./server.js","./routes/usuario.routes.js"
]

 };

 const swaggerSpec = swaggerJSDoc(options);

 export default swaggerSpec;
