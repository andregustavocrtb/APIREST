<template>
  <v-card class="login-form">
    <div class=login-modal>
      <img src="https://d293isj6nw1n53.cloudfront.net/images/favicon.png" href="http://localhost:8080/home" class="logo" />
        <hr>
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
          <button @click="saveUser(user);" type="submit">Login</button>
        <a href="http://localhost:8080/register">
          Não possui registro? Registre-se aqui!</a>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    async saveUser(user) {
      let users = localStorage.getItem("usersApp");
      const { token } = await axios.get('http://localhost:3333/token')

      if (users) {
        users = JSON.parse(users);
        users.push(user);
        users.push({token})
      } else {
        users = [user, {token}];
      }
      localStorage.setItem("usersApp", JSON.stringify(users));
      this.$router.push("/usuario")
    },
},
};
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