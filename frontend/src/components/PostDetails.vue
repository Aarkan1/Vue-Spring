<template>
  <div>
    <figure>
      <img width="100%" :src="post.img" alt="poster">
    </figure>
    <h1>{{post.title}}</h1>
    <p>{{post.text}}</p>
  </div>
</template>

<script>
  export default {
    name: "PostDetails",
    props: ['post']
  }
</script>

<style scoped>

</style>