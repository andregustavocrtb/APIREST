<template>
<v-card>
  <div overflow-x:auto>
    <table>
      <tr class="header">
        <td>ID</td>
        <td>Email</td>
        <td>Password</td>
        <td>Delete</td>
      </tr>
      <tr v-for="project in projects" v-bind:key="project.project_id">
        <td>{{project.project_id}}</td>
        <td>{{project.title}}</td>
        <td>{{project.user_id}}</td>
        <td class="botao"><button v-on:click="deleteProject(project.project_id)" >Delete</button></td>
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
              projects:null,
          }
      },
      methods: {
        getData(){
          this.axios.get(`http://localhost:3333/projects`).then((result)=>{
            console.warn(result)
            this.projects = result.data
          })
        },
        deleteProject(project_id){
            this.axios.delete(`http://localhost:3333/projects/${project_id}`).then(()=> {
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