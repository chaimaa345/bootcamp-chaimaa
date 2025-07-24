const db = require('../config/db');

const addUser = async (userData, hashedPassword) => {
  return db.transaction(async trx => {
    const [newUser] = await trx('users')
      .insert({
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name
      })
      .returning('*');

    await trx('hashpwd').insert({
      username: newUser.username,
      password: hashedPassword
    });

    return newUser;
  });
};

const getUserByUsername = username => db('users').where({ username }).first();
const getPasswordByUsername = username => db('hashpwd').where({ username }).first();
const getAllUsers = () => db('users').select('*');
const getUserById = id => db('users').where({ id }).first();
const updateUser = (id, data) => db('users').where({ id }).update(data).returning('*');

module.exports = {
  addUser,
  getUserByUsername,
  getPasswordByUsername,
  getAllUsers,
  getUserById,
  updateUser
};
