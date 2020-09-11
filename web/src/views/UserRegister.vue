<template>
  <v-container>
    <v-card  class="card">
      <v-card-title class="registro">User register</v-card-title>
      <v-card-text class="registro">
        <v-form 
        @submit.prevent="handleRegisterNewUser()" 
        id="user-register"
        >
          <v-row class="justify-center">
            <v-col cols="12" md="4">
              <v-text-field
                required 
                solo 
                flat
                background-color="#efefef"
                type="input" 
                v-model.trim="$v.user.email.$model"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                required
                solo
                flat
                background-color="#efefef"
                type="password"
                v-model.trim="$v.user.password.$model"
                label="Password"
              ></v-text-field>

                <v-btn
                  color=#10b4f1
                  type="submit"
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
import api from '@/services/api.service.js';
import { email, minLength, required } from 'vuelidate/lib/validators';
//import jwt from 'jsonwebtoken' 

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    }
  },
  validations: {
     user: {
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(6),
        required,
      }
    }
  },
  methods: {
    async handleRegisterNewUser() {
      try {
        await api.post('/users', {
          email: this.user.email,
          password: this.user.password,
        })
      window.alert('Registrado');
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};</script>
<style>
.justify-center{
  background-color: #615a58;
}
.registro{
  background-color: #615a58;
  color: white;
  text-align: center;
  font-size: 1.3em;
}
</style>
