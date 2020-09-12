<template>
  <div overflow-x:auto>
    <table>
      <tr class="header">
        <td>ID</td>
        <td>E-mail</td>
        <td>Password</td>
        <td>Delete</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
        <td class="botao"><button v-on:click="deleteUser(user.email)" >Delete User</button></td>
      </tr>
    </table>
  </div>
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
<style>
.botao{
  background-color:#CD7F7D ;
  padding: 10px;
}
table{
  width: 100%;
}
.header{
  background-color: #10b4f1;
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
td{
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
tr:nth-child(even) {background-color: #f2f2f2;}
</style>