exports.up = async (knex) => {
  await knex.schema
    .createTable('users', users => {
      users.increments('id')
      users.string('username', 255).notNullable().unique();
      users.text('phoneNumber', 11).notNullable();
      users.string('password', 255).notNullable();
      
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
