const pool = require('../../db');
const queries = require('./queries');


/**
 * @swagger
 * /users/:
 *  get:
 *      summary: get Users
 *      tags: [Users]
 *      responses: 
 *          200:
 *              description: success
 * 
 */
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Get Users by ID
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: The Users ID
 *      responses: 
 *          200:
 *              description: success
 * 
 */
const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('ID :', id);
    if (!Number.isInteger(id)) {
        res.send("ERREUR 404 NOT INTEGER")
        res.end()
        return;
    }
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


/**
 * @swagger
 * /users/:
 *  post:
 *      summary: Create Users
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Users'
 *      responses: 
 *          200:
 *              description: success
 * 
 */
const createUsers = (req, res) => {
    const { name, surname, age, email, password, sexe, interest, description, profile_picture} = req.body
    pool.query(queries.createUser, [name, surname, age, email, password, sexe, interest, description, profile_picture], (error, results) => {
        if (error) throw error;
        res.status(201).send("User has been successfuly created");
    })
};

module.exports = {
    getUsers,
    getUserById,
    createUsers,

};