exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments()
    users.string('username', 256)
         .notNullable()
         .unique()
    users.string('password', 1024)
         .notNullable()
    users.string('department', 50)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};