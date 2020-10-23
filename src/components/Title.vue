<template>
  <div class="row mb-5">
    <div class="col-sm-12 col-md-10 offset-md-1">
      <p class="text-center text-uppercase">{{ articles.label }}</p>
      <h1 class="text-center text-uppercase font-weight-bold">{{ articles.title }}</h1>
      <p class="text-center">{{ articles.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    articles: Object,
  },
};
</script>
