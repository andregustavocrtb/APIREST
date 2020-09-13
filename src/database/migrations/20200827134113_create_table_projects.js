
exports.up = async knex => {
    await knex.raw(
      `CREATE TABLE projects (
        project_id UUID DEFAULT uuid_generate_v4(),
        title VARCHAR NOT NULL,
        user_password VARCHAR,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        PRIMARY KEY(project_id),
        FOREIGN KEY(user_password) REFERENCES users(password) ON DELETE CASCADE    
      )
    `);
  };

exports.down =  async knex => await knex.raw('DROP TABLE projects');

