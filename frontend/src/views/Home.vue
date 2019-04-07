<template>
  <div class="home">
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 md6>
          <HomeHeader @searchInput="searchInput = $event"/>
          <transition-group
                  name="animate-route"
                  mode="out-in"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
            <Post v-for="(post, index) in posts"
                  :key="index"
                  :post="post"
            />
          </transition-group>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Post from "@/components/Post.vue";
  import HomeHeader from "@/components/HomeHeader.vue";

  export default {
    name: "home",
    data() {
      return {
        searchInput: ''
      }
    },
    computed: {
      posts() {
        let filter = new RegExp(this.searchInput, "i")
        return this.$store.state.posts.filter(p => p.title.match(filter))
      }
    },
    components: {
      Post,
      HomeHeader
    }
  };
</script>

<style scoped>
  input {
    margin-top: 20px;
  }
</style>