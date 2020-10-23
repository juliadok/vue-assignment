<template>
  <a :href="article.urlAlias" target="_blank" class="row text-decoration-none text-reset mb-5">
    <span class="col-xs-12 col-md-6 col-lg-4">
      <img :src="article.afbeelding.afbeelding" class="image w-100">
    </span>
    <span class="col-xs-12 col-md-6">
      <span class="card border-0">
        <span class="h5 card-title text-uppercase">{{ article.chapeau }}</span>
        <span class="h6 card-subtitle mb-2 font-weight-bold">{{ article.titel }}</span>
        <span class="card-text d-none d-lg-block">{{ article.lead }}</span>
      </span>
    </span>
  </a>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: Object,
  },
};
</script>

<style scoped>
.image {
  height: 200px;
  object-fit: cover;
  object-position: center top;
}
</style>
