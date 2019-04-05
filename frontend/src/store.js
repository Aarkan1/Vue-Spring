import Vue from "vue";
import Vuex from "vuex";
import Logo from "./assets/logo.png"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profilePicture: '',
    posts: [
      {
        img: Logo,
        title: 'A title 1',
        text: 'Bread text bread text bread text bread text bread text bread text'
      },{
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      },{
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      },
    ]
  },
  mutations: {
    setProfilePicture(state, value){
      state.profilePicture = value;
    },
    addPost(state, value){
      state.posts.push(value)
    }
  },
  actions: {}
});
