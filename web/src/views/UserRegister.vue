<template>
  <v-container>
    <v-card  class="card">
      <v-card-title class="registro">User register</v-card-title>
      <v-card-text class="registro">
        <v-form 
        @submit.prevent="register" 
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
      register: function (){
        let data = {
          email: this.user.email,
          password: this.user.password
        }
        this.$store.dispatch('register', data)
        .then(()=> this.$router.push('/usuario'))
        .catch(err => console.log(err))
      }
    }
};
</script>
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
