const jwt = require('jsonwebtoken')
const axios  = require('axios')

module.exports = {
    async signIn (req, res) {
        if (!req.body.email || !req.body.password){
            return res.status(400).send('Informe usuário e senha')
        }

        const user = await axios.get('/users').send()
        .where({ email: req.body.email })
        .first()

        if(!user) return res.status(400).send('Usuário não encontrado')

        const isMatch = (req.body.password === user.password)
        if(!isMatch) return res.status(401).send('Email/senha Inválidos')

        const payload = {
            email: user.email,
            password: user.password
        }

        res.json({
            ...payload,
            token: jwt.sign(payload, 'segredo', { expiresIn: '7d' })
        })
    }
}