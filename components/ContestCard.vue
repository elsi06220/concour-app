<template>
  <nuxt-link :to="{ name: 'contest-id', params: { id: contest.id } }" class="no-underline">
    <div class="contest-card">
      <div class="image-container" :style="{ backgroundImage: 'url(' + contest.imageUrl + ')' }"></div>
      <div class="description-container">
        <h2 class="title">{{ contest.title }}</h2>
        <p class="description">{{ contest.description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    contest: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}

.contest-card {
  @apply flex items-center mb-6; /* Disposer les éléments en ligne */
  @apply p-4; /* Padding global autour du bloc */
  @apply bg-white rounded-lg shadow-md; /* Style de carte */
  @apply cursor-pointer; /* Curseur en forme de main pour indiquer que c'est cliquable */
}

.image-container {
  @apply bg-cover bg-center h-48 w-48; /* Taille de l'image */
  @apply rounded-lg; /* Bord arrondi pour l'image */
  @apply mr-4; /* Marge à droite de l'image pour espacer de la description */
}

.description-container {
  @apply flex flex-col justify-center; /* Aligner le texte verticalement centré */
}

.title {
  @apply text-xl font-bold mb-2; /* Taille et style du titre */
}

.description {
  @apply text-base; /* Taille du texte de la description */
}
</style>
