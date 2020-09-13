const knex = require('../database')
const { create } = require('./UserController')

module.exports = {
    async find(request, response, next){
        try{
            const{ id } = request.params

            const results = await knex.raw(`SELECT * FROM projects WHERE project_id = '${id}'`)

            return response.json(results.rows[0])
        } catch (error){
            next(error)
        }
    },

    async index(request, response, next){
        try{
            const results = await knex.raw(`SELECT * FROM projects`)
            
            return response.json(results.rows)
        } catch(error){
            next(error)
        }
    },

    async create(request, response, next){
        try{
            const { title, password} = request.body;

            const query = `INSERT INTO projects (title, user_password) 
            VALUES ('${title}', '${password}') RETURNING project_id`;

            const results = await knex.raw(query)
            return response.status(201).json(results.rows[0]);
        } catch(error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try{
            const {id} = request.params;

            await knex.raw(`DELETE FROM projects WHERE project_id = '${id}'`);

            return response.send()
        } catch(error){
            next(error);
        }
    },


}