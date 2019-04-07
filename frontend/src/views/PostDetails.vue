<template>
  <v-container>
    <figure>
      <img width="100%" :src="post.img" alt="poster">
    </figure>
    <h1>{{post.title}}</h1>
    <p>{{post.text}}</p>
    <v-btn fab dark color="teal" medium>
      <v-icon dark>create</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "PostDetails",
    props: ['post']
  }
</script>

<style scoped>
  button {
    position: absolute;
    bottom: 70px;
    right: 20px;
  }
</style>