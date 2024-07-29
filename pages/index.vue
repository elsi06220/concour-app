<template>
  <div :style="backgroundStyle" class="min-h-screen bg-fixed bg-cover bg-center">
    <v-container>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="contest in contests" :key="contest.id">
            <div class="contest-card-container">
              <ContestCard :contest="contest" />
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import ContestCard from '~/components/ContestCard.vue';

export default {
  components: {
    ContestCard
  },
  data() {
    return {
      contests: [
        { id: 1, title: 'Musique', description: 'Devinez vos artistes préférés', imageUrl: require('~/assets/music.png') },
        { id: 2, title: 'MMA', description: 'Quels sont vos combattants préférés', imageUrl: require('~/assets/mma.png') },
        { id: 3, title: 'Lecture', description: 'Détails', imageUrl: require('~/assets/lec.png') },
        { id: 4, title: 'Escalade', description: 'Détails', imageUrl: require('~/assets/escalade.png') },
        { id: 5, title: 'Football', description: 'Détails', imageUrl: require('~/assets/foot.png') },
        { id: 6, title: 'Film', description: 'Détails', imageUrl: require('~/assets/film.png') },
      ]
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require('~/assets/back.jpeg')})`
      }
    }
  }
};
</script>

<style scoped>
.contest-card-container {
  @apply mb-4; /* Espace en bas entre les cartes */
}
</style>

<style global>
/* Appliquez des styles globaux pour l'image de fond */
.bg-cover {
  background-size: cover;
}

.bg-fixed {
  background-attachment: fixed;
}

.bg-center {
  background-position: center;
}
</style>
