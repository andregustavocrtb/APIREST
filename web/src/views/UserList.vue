<template>
  <v-container>
    <v-card>
      <v-card-title class ="listar">List Users</v-card-title>
      <v-card-text class ="listar">
        <v-form>
          <v-row class="justify-center">
            <v-col cols="12" md="4">
                <v-btn color=#10b4f1
                  type="submit"
                  class="mb-12"
                  block
                >List Users</v-btn>
            </v-col>
          </v-row>
        </v-form>    
      </v-card-text>
    </v-card>
    <hr>
    <v-card>
    <v-card-text class="lista">
      <v-data-table>{{data}}</v-data-table>
    </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      data: {}
    };
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const { data } = await axios.get("http://localhost:3333/users");
      this.data = data;
    }
  }
};
</script>
<style>
.justify-center{
  background-color: #615a58;
}
.listar{
  background-color: #615a58;
  color: white;
  text-align: center;
  font-size: 1.3em;
}
.lista{
  background-color: #615a58;
}
</style>