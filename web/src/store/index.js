import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    retriveToken(state, token){
      state.token = token
    }
  },
  actions: {
    retrieveToken(context, credentials) {
        axios.post('http://localhost:3333/users', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.access_token

            localStorage.setItem('access_token', token)
            context.dispatch('retrieveToken', token)
            
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
    }
  }
})