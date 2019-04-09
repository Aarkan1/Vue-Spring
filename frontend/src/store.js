import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profilePicture: '',
    loggedIn: false,
    posts: []
  },
  mutations: {
    setProfilePicture(state, value) {
      state.profilePicture = value;
    },
    addPost(state, value) {
      fetch('/post', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      })
          .then(res => {
            return res.json()
          })
          .then(res => {
            state.posts.push(res)
          })
          .catch(e => console.log(e))
    },
    updatePost(state, value) {
      for (let post of state.posts)
        if (post.id === value.id) {
          let index = state.posts.indexOf(post)
          state.posts[index] = value
        }

      fetch('/post/' + value.id, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      })
          .catch(e => console.log(e))

      console.log('Updating post: ', value.id)

    },
    deletePost(state, value) {
      for (let post of state.posts)
        if (post.id === value.id) {
          let index = state.posts.indexOf(post)
          state.posts.splice(index, 1);
        }

      fetch('/post/' + value.id, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      })
          .catch(e => console.log(e))

      console.log('Deleting post: ', value.id)

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
