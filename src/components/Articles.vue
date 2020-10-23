<template>
  <div class="container pt-4">
    <Title :articles="articles" />
    <Article
      v-for="article in articles.bundelItems"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import Title from './Title.vue';
import Article from './Article.vue';

export default {
  name: 'Articles',
  components: {
    Title,
    Article,
  },
  props: {
    articles: Object,
  },
};
</script>
