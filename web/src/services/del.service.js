import axios from 'axios'

const del = axios.delete(user_id,{
    baseURl: 'http://localhost:3333/users' + user_id
})
export default del