<template>
  <div id="post" @click="seePostDetails">
    <div id="post-text">
      <h2>{{ post.title }}</h2>
      <p>{{ post.text }}</p>
    </div>
    <figure>
      <img :src="post.img" alt="poster">
    </figure>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: ['post'],
    methods: {
      seePostDetails() {
        this.$router.push({
          name: 'postDetails',
          params: {post: this.post}
        })
      }
    }
  }
</script>

<style scoped>
  #post {
    display: flex;
    text-decoration: none;
    color: whitesmoke;
    width: 100vw;
    border-bottom: solid 1px #7c7e70;
  }

  #post-text {
    padding-left: 3%;
    text-align: start;
    flex: 4;
  }

  figure {
    flex: 2;
  }

  img {
    width: 100%;
  }
</style>