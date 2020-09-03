<template>
  <v-container>
    <v-card>
      <v-card-title>Project Register</v-card-title>
      <v-card-text>
        <v-form id="project-register">
          <v-row class="justify-center">
            <v-col cols="12" md="4">
              <v-text-field
                required 
                solo 
                flat 
                background-color="#efefef"
                type="input"
                label="Project title"
              ></v-text-field>

              <v-text-field
                required
                solo
                flat
                background-color="#efefef"
                type="input"
                label="user ID"
              ></v-text-field>

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
        user_id: '', 
    }
    }
  },
  methods: {
      handleRegisterNewProject() {
        this.axios.post('http://localhost:3333/projects', {
          project: this.project,
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
    }
  };
</script>
