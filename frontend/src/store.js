import Vue from "vue";
import Vuex from "vuex";
import Logo from "./assets/logo.png"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profilePicture: '',
    loggedIn: false,
    posts: [],
    posts2: [
      {
        img: Logo,
        title: 'A title 1',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 2',
        text: 'Bread text bread text bread text bread text bread text bread text'
      }, {
        img: Logo,
        title: 'A title 3',
        text: 'Bread text bread text bread text bread text bread text bread text'
      },
    ]
  },
  mutations: {
    setProfilePicture(state, value) {
      state.profilePicture = value;
    },
    addPost(state, value) {
      state.posts.push(value)

      fetch('/post', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      })
          .catch(e => console.log(e))
    },
    logIn(state, value) {
      state.loggedIn = value
    },
    logOut(state, value) {
      state.loggedIn = value
    },
    getPosts(state, value) {
      state.posts = value
      console.log(state.posts)
    }
  },
  actions: {
    getPosts(context) {
      console.log('Fetching posts')
      fetch('/posts')
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            context.commit('getPosts', res)
          })
          .catch(e => console.log(e))
    }
  }
})
