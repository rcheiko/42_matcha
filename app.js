const express = require('express');
const pool = require("./db")
const route = require('./src/router')
const path = require('path')

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Backend Matcha",
        },
    },
    apis: ['app.js', `${path.join(__dirname, "./src/users/*.js")}`]
};


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerOptions)));

app.use(express.json());

/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         surname:
 *           type: string
 *         age:
 *           type: integer
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *         sexe:
 *           type: string
 *         interest:
 *           type: array
 *           items:
 *             $ref: '#/definitions/interest'
 *         description:
 *           type: string
 *         profile_picture:
 *           type: string
 */
app.use('/users/', route);



// app.post('/', async(req, res) => {
//     try {
//         // await
//         console.log(req.body);
//         const { description } = req.body;
//         const newUsers = await pool.query("INSERT INTO matcha (description) VALUES ($1) RETURNING *", [description]);

//         res.json(newUsers);
//         res.end();
//     } catch (err) {
//         console.log(err);
//         res.end();
//     }
// })

app.listen(3000, console.log("Server started on port 3000"));