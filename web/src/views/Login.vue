<template>
  <v-card class="login-form">
    <div class=login-modal>
      <img src="https://d293isj6nw1n53.cloudfront.net/images/favicon.png" href="http://localhost:8080/home" class="logo" />
        <hr>
        <form class="login" @submit.prevent="login">
        <h2 class="login-heading">Login</h2>
          <input 
            type="email" 
            name="email" 
            id="email"
            class="login-input"
            placeholder="E-mail"
            v-model="user.email" />
          <input
            type="password"
            name="password"
            id="password"
            class="login-input"
            placeholder="Password"
            v-model="user.password"
          />
          <button type="submit" id="myButton">Login</button>
        </form>
        <a href="http://localhost:8080/register">
          Não possui registro? Registre-se aqui!</a>
    </div>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    login: function () {
        const email = this.user.email 
        const password = this.user.password
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/usuario'))
       .catch(err => console.log(err))
      }
  }
}
</script>

<style>
.login-modal{
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
.login-form {

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-input{
  background-color: white;
  margin-bottom: 15px;
  border: 1px solid #BBB;
  width: 100%;
}
.login-modal hr{
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right,
    rgba(120,120,120,0),
    rgba(120,120,120,0.75),
    rgba(120,120,120,0));
}
.login-modal button{
  display: flex;
  align-self: flex-end;
  background-color: #10b4f1;
  padding: 5px 15px;
}
.login-modal a{
  margin-top: 15px;
  font-size: 0.9em;
}
.login-heading{
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
}
  
</style>