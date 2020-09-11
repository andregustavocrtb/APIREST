<template>
  <v-container class="container">
    <v-card class="register-form">
      <div class="register-modal">
      <h2 class="register-heading">Project Register</h2>
      <v-card-text>
        <v-form id="project-register">
          <v-row class="justify-center">
            <v-col cols="12" md="4">
              <input 
              v-model="project.title" 
              type="text" 
              placeholder="Title">

              <input 
              v-model="project.user_id" 
              type="uuid" 
              placeholder="User ID">
              
              <button @click="handleRegisterNewProject()" type="submit">Register</button>
            </v-col>
          </v-row>
        </v-form>    
      </v-card-text>
    </div>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  data() {
    return {project:{
        title: null,
        user_id: "", 
    }
    }
  },
  methods: {
      handleRegisterNewProject() {
        this.axios.post('http://localhost:3333/projects', this.project)
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
    }
  };
</script>
<style>
.container{
  height: 100%;
}
.register-modal{
  background-color: #615a58;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register-form {

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-modal input{
  background-color: white;
  margin-bottom: 15px;
  border: 1px solid #BBB;
  width: 100%;
}
.register-modal hr{
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right,
    rgba(120,120,120,0),
    rgba(120,120,120,0.75),
    rgba(120,120,120,0));
}
.register-modal button{
  display: flex;
  align-self: flex-end;
  background-color: #10b4f1;
  padding: 5px 15px;
}
.register-heading{
  font-size: 1.3em;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
}
</style>