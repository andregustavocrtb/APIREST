const jwt = require('jsonwebtoken')
const knex = require('../database')

module.exports ={

    async index(request, response, next){
        try{
            const results = await knex.raw(`SELECT * FROM users`)
            
            return response.json(results.rows)
        } catch(error){
            next(error)
        }
    },

    async create(request, response, next){
        try{
            const { email, password } = request.body;

            const query = `SELECT email FROM users WHERE email = '${email}' AND password = '${password}' `;

            const results = await knex.raw(query)
            const rp = results.rows[0]
            if(rp === undefined){
                {return response.json('user not found')}}
            else{
                const token = jwt.sign({}, 'senha', {expiresIn:'7d'})
                return response.status(201).json({token, email})}
        } catch(error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try{
            const {email} = request.params;

            await knex.raw(`DELETE FROM users WHERE email= '${email}'`);

            return response.send();
            
        } catch(error){
            next(error)
        }
    },

    async execute(request, response, next){
        try{
            const {email, password} = request.body

            const query = `SELECT email='${email}' AND password='${password}' FROM users ;
                           INSERT INTO users (email, password) VALUES ('${email}', '${password}') RETURNING id;`
            const results = await knex.raw(query)
            if(results){
                const token = jwt.sign({}, 'senha', {expiresIn:'7d'})
                return response.status(201).json({token})}
            else{return response.json('user not found')}
        }catch(error){
        next(error)
        }
    },

    async getid(request, response, next){
        try{
            const email = request.body
            const results = await knex.raw(`SELECT id FROM users WHERE email=${email}`)
            
            return response.json(results.rows)
        }catch(error){
            next(error)
        }
    }
}