<template>
<div>
    <header class="cabecalho">
    <div class="logo">
      <a>
        <img src="https://d293isj6nw1n53.cloudfront.net/images/favicon.png" />
      </a>
    </div>
    <div class="titlebox">
      <title class="titulo">Project Managment Application</title>
    </div>    
  </header>
  <div>
    <v-card class="titulo-registro">
      <label class="registro">REGISTRAR PROJETO</label>
      <hr class="hr">
      <form class="registro">
        <input 
          name="Title" 
          id="title_register"
          class="project-input"
          placeholder="Title"
          v-model="project.title"/>
        <input
          type="password" 
          name="password" 
          id="password_register"
          class="project-input"
          placeholder="password"
          v-model="project.password"/>
      <button class="botao" @click="handleRegisterNewProject()" >Registrar</button>
      </form>
    </v-card>
  </div>
  <hr class="card-divider">
  <div>
    <v-card class="titulo-registro">
      <label class="registro">DELETAR PROJETO</label>
      <hr class="hr">
      <form class="registro">
        <input 
          name="Title" 
          id="title_delete"
          class="project-input"
          placeholder="Title"
          v-model="project.title"/>
      <button class="botao" @click="deleteProject()" >Deletar</button>
      </form>
    </v-card>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      project:{
        title: '',
        password:""
      }
    }
  },
  methods:{
    handleRegisterNewProject() {
        axios.post('http://localhost:3333/projects', this.project)
        .then(window.alert('Projeto Registrado'))
        .catch(error => console.log(error))
      },
    deleteProject(){
      axios.delete('http://localhost:3333/projects/', this.project)
    }
}
}
</script>
<style>
.cabecalho {
  margin: 0;
  border-bottom: solid 5px #10b4f1;
  box-sizing: content-box;
  background-color: #615a58;
  height: 100px;
}

.logo {
  background-color: #615a58;
  display: block;
  height: 70px;
  padding: 10px;
  float: left;
  margin: 5px;
}

.logo img {
  height: 100%;
}

.menu {
  display: block;
  float: right;
}

.titulo {
  display: inline-block;
  color: white;
  font-size: 1.3em;
  text-align: center;
  background-color: #615a58;
  text-decoration: underline;
}

.titulo-registro {
  display: inline-block;
  width: 100%;
  font-size: 1.3em;
  text-align: left;
}

.titlebox {
  display: block;
  float: left;
  margin: 0px;
  padding-top: 36px;
  height: 72px;
}
.registro{
  background-color: #615a58;
  color: white;
  display: flex;
  flex-direction: column;
} 
.registro input{
  background-color: #615a58;
  color: white;
  display: flex;
  flex-direction: column;
}

.botao{
  display: flex;
  align-self: center;
  background-color: #10b4f1;
  padding: 5px 15px;
  color: black;
}
.card-divider{
  height: 10px;
}

</style>