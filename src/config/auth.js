import jwt from 'jsonwebtoken' 

const token = jwt.sign({token: this.token}, 'Bialindona', { expiresIn: '10d' });

export default token