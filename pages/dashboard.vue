<template>
    <v-container>
      <h1>Affichage</h1>
      <v-list>
        <v-list-item v-for="participation in participations" :key="participation.id">
          <v-list-item-content>
            <v-list-item-title>{{ participation.contest.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ participation.status }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        participations: [
          { id: 1, contest: { title: 'Concours 1' }, status: 'Gagné' },
          { id: 2, contest: { title: 'Concours 2' }, status: 'Perdu' }
        ]
      };
    }
  };
  </script>
  