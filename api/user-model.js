const db = require('../data/dbConfig')

module.exports = {
   getUsers,
   findById,
   add,
   findBy
}

function getUsers() {
   return db('users')
}

function findById(id) {
   return db('users')
      .where({ id })
      .first()
}

async function add(user) {
   const [id] = await db('users').insert(user)
   return findById(id)
}

function findBy(username) {
   console.log("find by", username)
   return db('users')
      .where(username)
}