<template>
  <v-card class="register-form">
    <div class=register-modal>
      <img src="https://d293isj6nw1n53.cloudfront.net/images/favicon.png" class="logo" />
        <hr>
        <form class="register" @submit.prevent="register">
        <h2 class="register-heading">Registro</h2>
          <input 
            type="email" 
            name="email" 
            id="email"
            class="register-input"
            placeholder="E-mail"
            v-model="user.email" />
          <input
            type="password"
            name="password"
            id="password"
            class="register-input"
            placeholder="Password"
            v-model="user.password"
          />
          <button type="submit" id="myButton">Registrar</button>
        </form>
        <a href="http://localhost:8080/login">
          Já possui registro? Acesse aqui!</a>
    </div>
  </v-card>
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
.register-modal{
  background-color: #615a58;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  height: 250px;
  width: 250px;
  padding: 15px;
}
.register-form {

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-input{
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
.register-modal a{
  margin-top: 15px;
  font-size: 0.9em;
}
.register-heading{
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
}
</style>
