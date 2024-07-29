<template>
    <v-container>
      <v-form @submit.prevent="register">
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-btn type="submit">Register</v-btn>
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
      register() {
        // Simulate registration process
        console.log('Register with', this.email, this.password);
        this.$router.push('/login');
      }
    }
  };
  </script>
  