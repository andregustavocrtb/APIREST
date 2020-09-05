<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="https://d293isj6nw1n53.cloudfront.net/images/favicon.png" class='Logo'>
            <hr>
            <div class="auth-title">{{showSignup ? 'Sign Up': 'Login'}}</div>
            <input v-model="user.email" type="text" placeholder="E-mail" class="input">
            <hr>
            <input v-model="user.password" type="text" placeholder="Password" class="input">
            <button v-if="showSignup" @click="signUp">Registrar</button>
            <button v-else @click="signIn">Entrar</button>
            
            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
                <span v-else> Não tem cadastro? Registre-se aqui</span>
            </a>
        </div>
    </div>
</template>
<script>
import userKey from '@/global'
import axios from 'axios'

export default {
    name: "Auth",
    data: function (){
        return{
            showSignup:true,
            user: {}
        }
    },
    methods: {
        signIn() {
            axios.post(`http://localhost:3333/users`, this.user)
            .then(res => {
                this.$store.commit(res.data)
                localStorage.setItem(userKey, JSON.stringify(res.data))
                this.$router.push({path: '/'})
            })
            .catch(error => console.log(error.response))
        },
        signUp() {
            axios.post(`http://localhost:3333/users`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(error => console.log(error.response))
        }
    }
}
</script>
<style>
.auth-content{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.input{
    background-color: white;
}
.auth-modal{
    background-color: #615a58;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Logo{
    height: 300px;
    width: 300px;
    padding: 15px;
}
</style>