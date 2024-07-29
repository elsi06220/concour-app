<template>
  <v-form @submit.prevent="submit">
    <v-text-field label="Votre réponse" v-model="answer" />
    <v-btn type="submit">Participer</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      answer: '',
      contest: {}
    };
  },
  created() {
    // Chargez les données du concours ici, par exemple via une requête API
    const contestId = this.id;
    // Simulation des données du concours
    const contests = [
      { id: '1', title: 'Musique', description: 'Devinez vos artistes préférés' },
      { id: '2', title: 'MMA', description: 'Quels sont vos combattants préférés' },
      // Ajoutez les autres concours ici
    ];
    this.contest = contests.find(contest => contest.id === contestId);
  },
  methods: {
    submit() {
      // Simulation de formulaire
      console.log(`Participating in contest ${this.contest.id} with answer ${this.answer}`);
      this.$router.push('/dashboard');
    }
  }
};
</script>
