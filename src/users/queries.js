const getUsers = "SELECT * FROM Users";
const getUserById = "SELECT * FROM Users WHERE id=$1";
const createUser = "INSERT INTO USERS (name, surname, age, email, password, sexe, interest, description, profil_picture) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )"

module.exports = {
    getUsers,
    getUserById,
    createUser,
};