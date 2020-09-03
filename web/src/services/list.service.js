import axios from 'axios'

const list  = axios.get({
    baseURL: 'http://localhost:3333/users/'
})

export default list;