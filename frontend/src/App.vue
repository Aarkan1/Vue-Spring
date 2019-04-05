<template>
  <div id="app">
    <router-view/>
    <Navigation/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style src="./style.css"></style>
