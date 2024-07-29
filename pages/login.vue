<template>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // simulation connexion
        console.log('Login with', this.email, this.password);
        this.$router.push('/');
      }
    }
  };
  </script>
  