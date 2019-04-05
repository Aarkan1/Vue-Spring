<template>
  <div class="home">
    <Post v-for="(post, index) in $store.state.posts"
          :key="index"
          :post="post"
          />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Post from "@/components/Post.vue";

  export default {
    name: "home",
    data() {
      return {}
    },
    components: {
      Post
    }
  };
</script>

<style scoped>

</style>