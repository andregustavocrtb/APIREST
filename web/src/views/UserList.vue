<template>
  <v-container>
    <v-card>
      <v-card-title>List Users</v-card-title>
      <v-card-text>
        <v-form>
          <v-row class="justify-center">
            <v-col cols="12" md="4">
                <v-btn color="success"
                  type="submit"
                  class="mb-12"
                  block
                >List Users</v-btn>
            </v-col>
          </v-row>
        </v-form>    
      </v-card-text>
    </v-card>
    <v-card>
      <div>{{data}}</div>
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