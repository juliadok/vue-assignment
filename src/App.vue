<template>
  <Header />

  <div v-if="loading" class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div v-if="error" class="alert alert-danger" role="alert">
    {{error.message}}
  </div>

  <Articles v-if="articles" :articles="articles"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.vue';
import Articles from './components/Articles.vue';

export default {
  name: 'App',
  components: {
    Header,
    Articles,
  },
  data() {
    return {
      articles: null,
      error: null,
      loading: true,
    };
  },
  async mounted() {
    try {
      const response = await fetch(`${process.env.BASE_URL}bundle-api.json`);
      this.articles = await response.json();
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
