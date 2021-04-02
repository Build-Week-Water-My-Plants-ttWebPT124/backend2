
exports.seed = async function(knex) {
  await knex('users').truncate()

   await knex("users").insert([
    {
      username: 'test-user1',
      phoneNumber: '12345678910',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      
    },
    {
      username: 'test-user2',
      phoneNumber: '12345678910',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
    },
    {
      username: 'test-user3',
      phoneNumber: '12345678910',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"

    }

   ])
};
