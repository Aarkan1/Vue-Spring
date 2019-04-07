<template>
  <div>
    <h1>Logfolio</h1>
    <v-text-field
            dark
            label="Search for post"
            v-model="searchInput"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    data(){
      return {
        searchInput: ''
      }
    },
    watch: {
      searchInput: function(val){
        this.$emit('searchInput', val);
      }
    }
  }
</script>

<style scoped>

</style>