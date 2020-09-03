<template>
<v-card>
  <div>
    <table border ='1px'>
      <tr>
        <td>ID</td>
        <td>Email</td>
        <td>Password</td>
        <td>Delete</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.user_id">
        <td>{{user.user_id}}</td>
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
        <td><button v-on:click="deleteUser(user.email)" >Delete</button></td>
      </tr>
    </table>
  </div>
</v-card>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default{
      data(){
          return{
              users:null,
          }
      },
      methods: {
        getData(){
          this.axios.get(`http://localhost:3333/users`).then((result)=>{
            console.warn(result)
            this.users = result.data
          })
        },
        deleteUser(email){
            this.axios.delete(`http://localhost:3333/users/${email}`).then(()=> {
              this.getData()
            }) 
          }},
        mounted(){
            this.getData()
          }
      }
</script>
