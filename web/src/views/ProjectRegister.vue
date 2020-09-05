<template>
  <v-container>
    <v-card>
      <v-card-title>Project Register</v-card-title>
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
                <v-btn 
                  color="success"
                  @click="handleRegisterNewProject()"
                  class="mb-12"
                  block
                >Register</v-btn>
            </v-col>
          </v-row>
        </v-form>    
      </v-card-text>
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
