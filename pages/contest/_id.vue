<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field label="Votre réponse" v-model="answer" />
      <v-btn type="submit">Participer</v-btn>
    </v-form>
  </v-container>
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
    const contestId = this.id;
    const contests = [
      { id: '1', title: 'Musique', description: 'Devinez vos artistes préférés' },
      { id: '2', title: 'MMA', description: 'Quels sont vos combattants préférés' },
      { id: '3', title: 'Lecture', description: 'Détails' },
      { id: '4', title: 'Escalade', description: 'Détails' },
      { id: '5', title: 'Football', description: 'Détails' },
      { id: '6', title: 'Film', description: 'Détails' },
    ];
    this.contest = contests.find(contest => contest.id === contestId);
  },
  methods: {
    submit() {
      console.log(`Participating in contest ${this.contest.id} with answer ${this.answer}`);
      this.$router.push('/dashboard');
    }
  }
};
</script>
