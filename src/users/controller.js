const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcrypt');
const { response } = require('express');


/**
 * @swagger
 * /users/:
 *  get:
 *      summary: get Users
 *      tags: [Users]
 *      responses: 
 *          200:
 *              description: success
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
    if (!Number.isInteger(id)) {
        res.send("ERREUR 404 NOT INTEGER")
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
 */
const createUsers = (req, res) => {
    const { name, surname, age, email, password, sexe } = req.body
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    // console.log('hash :', hash)
    // console.log('compare true or false :', bcrypt.compareSync(password, hash))
    pool.query(queries.createUser, [name, surname, age, email, hash, sexe], (error, results) => {
        if (error) throw error;
        res.status(201).send("User has been successfuly created");
    })
};

/**
 * @swagger
 * /users/edit_profile/{id}:
 *  put:
 *      summary: Edit the profile of User
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Users'
 *      responses: 
 *          200:
 *              description: success
 *          400:
 *              description: user not found
 */
const edit_profile = (req, res) => {
    const id = req.params.id
    console.log(id);
    const { name, surname, age, email, interest, description, profile_picture, other_picture } = req.body
    console.log(interest);
    if (name){
        pool.query(queries.editName, [name, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (surname){
        pool.query(queries.editSurname, [surname, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (age){
        pool.query(queries.editAge, [age, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (email){
        pool.query(queries.editEmail, [email, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (interest){
        pool.query(queries.editInterest, [interest, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (description){
        pool.query(queries.editDescription, [description, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (profile_picture){
        pool.query(queries.editProfile_picture, [profile_picture, id], (error, results) => {
            if (error) throw error;
        })
    }
    if (other_picture){
        pool.query(queries.editOther_picture, [other_picture, id], (error, results) => {
            if (error) throw error;
        })
    }
    res.status(201).send("User has been successfuly edited");
}

/**
 * @swagger
 * /users/login/{id}:
 *  post:
 *      summary: Check Login of Users
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Users'
 *      responses: 
 *          200:
 *              description: success
 */
const loginUser = (req, res) => {
    const { email, password } = req.body
    const id = parseInt(req.params.id)
    let response;
    if (!Number.isInteger(id)) {
        res.send("ERREUR 404 NOT INTEGER")
        return;
    }
    pool.query(queries.checkPassword, [id], async (error, results) => {
        if (error) throw error;
        const passwordHash = await results.rows
        // response = results.rows
        // response.json()
        response = results.rows[0]
        console.log('res :', response)
        response = JSON.stringify(response.password)
        console.log('json :',response)
        console.log(password)
        console.log('compare true or false :', bcrypt.compareSync(response, password))    
    })
    res.status(201).send("User has been successfuly edited");
};

module.exports = {
    getUsers,
    getUserById,
    createUsers,
    edit_profile,
    loginUser,
};