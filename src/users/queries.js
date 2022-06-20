const getUsers = "SELECT * FROM Users";
const getUserById = "SELECT * FROM Users WHERE id=$1";
const createUser = "INSERT INTO USERS (pseudo, description) VALUES ( $1, $2 )"

module.exports = {
    getUsers,
    getUserById,
    createUser,
};