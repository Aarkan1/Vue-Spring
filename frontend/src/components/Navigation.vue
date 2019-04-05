<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/upload">Upload</router-link>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  #nav {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    position: fixed;
    bottom: 0;
    padding: 20px 0;
    border-top: solid 1px #7c7e70;
    background-color: #2c3e50;
  }

  #nav a {
    flex: 1;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    color: #f5f5f5;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>