'use strict'

function getAllUsers(req, res) {
    //
    res.status(200).send('UserController:: getAllUsers');
}

function getUser(req, res) {
    //
    res.status(200).send('UserController:: getUser');
}

function createUser(req, res) {
    //
    res.status(200).send('UserController:: createUser');
}

function updateUser(req, res) {
    //
    res.status(200).send('UserController:: updateUser');
}

function deleteUser(req, res) {
    //
    res.status(200).send('UserController:: deleteUser');
}

function signInUser(req, res) {
    //
    res.status(200).send('UserController:: signInUser');
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    signInUser

}