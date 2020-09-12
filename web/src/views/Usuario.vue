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
    <nav class="menu">
      <ul>
        <li>
          <a href="/registerproj">Registrar Projeto</a>
        </li>
      </ul>
    </nav>
  </header>
  <div>
    <v-card>
    <v-card-text class="lista" v-for="data in data" v-bind:key="data.id">
      {{data}}
    </v-card-text>
    </v-card>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      data:{}
    }
  },
  beforeMount(){
    this.getid()
  },
  methods:{
  async getid(){
    const { data } = await axios.get("http://localhost:3333/usersid");
    this.data = data;
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

.menu ul {
  margin: 0;
  padding: 36px 15px;
  height: 72px;
}

.menu li {
  text-align: right;
  display: inline-block;
}

.menu a {
  text-decoration: none;
  color: #eee;
  font-size: 1.3em;
  
}
.titulo {
  display: inline-block;
  color: white;
  font-size: 1.3em;
  text-align: center;
  background-color: #615a58;
  text-decoration: underline;
}

.titlebox {
  display: block;
  float: left;
  margin: 0px;
  padding-top: 36px;
  height: 72px;
}
</style>