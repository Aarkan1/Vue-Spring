<template>
  <v-container>
    <figure>
      <img width="100%" :src="post.image" alt="poster">
    </figure>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <v-btn
            v-if="$store.state.loggedIn"
            fab
            dark
            color="teal"
            fixed
            medium
            @click="updatePost">
      <v-icon dark>create</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "PostDetails",
    props: ['post'],
    methods: {
      updatePost(event) {
        let post = {
          id: 6,
          title: 'Updated title',
          body: 'Updated description',
          image: this.post.image
        }
        this.post = post

        this.$store.commit('updatePost', post)
      }
    }
  }
</script>

<style scoped>
  button {
    position: fixed;
    bottom: 70px;
    right: 20px;
  }
</style>