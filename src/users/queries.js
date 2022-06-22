const getUsers = "SELECT * FROM Users";
const getUserById = "SELECT * FROM Users WHERE id=$1";
const createUser = "INSERT INTO USERS (name, surname, age, email, password, sexe) VALUES ( $1, $2, $3, $4, $5, $6 )"
const editName = "UPDATE Users SET name=$1 WHERE id=$2"
const editSurname = "UPDATE Users SET surname=$1 WHERE id=$2"
const editAge = "UPDATE Users SET age=$1 WHERE id=$2"
const editEmail = "UPDATE Users SET email=$1 WHERE id=$2"
const editPassword = "UPDATE Users SET password=$1 WHERE id=$2"
const editSexe = "UPDATE Users SET Sexe=$1 WHERE id=$2"
const editInterest = "UPDATE Users SET interest=$1 WHERE id=$2"
const editDescription = "UPDATE Users SET description=$1 WHERE id=$2"
const editProfile_picture = "UPDATE Users SET profile_picture=$1 WHERE id=$2"
const editOther_picture = "UPDATE Users SET other_picture=$1 WHERE id=$2"
const checkPassword = "SELECT password FROM Users WHERE id=$1"

module.exports = {
    getUsers,
    getUserById,
    createUser,
    editName,
    editSurname,
    editAge,
    editEmail,
    editPassword,
    editSexe,
    editInterest,
    editDescription,
    editProfile_picture,
    editOther_picture,
    checkPassword
};