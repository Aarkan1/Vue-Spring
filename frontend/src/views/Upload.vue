<template>
  <div class="upload">
    <h1>Upload Post</h1>
    <form @submit="handleSubmit">
      <div id="postTitle">
        <h2>Title</h2>
        <input type="text" v-model="title"/>
      </div>
      <div id="postInfo">
        <h2>Info</h2>
        <textarea type="text" v-model="info" rows="5"/>
      </div>
      <div>
        <div id="postImage">
          <h2>Choose image</h2>
          <FileUpload @uploadImage="handleImage($event)"/>
        </div>
        <img v-if="imageSrc.length" width="40%" :src="imageSrc" alt="profile picture">
      </div>
      <div id="submitBtnDiv">
        <button id="submitBtn" type="submit"><i class="fas fa-plus-circle"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
  import FileUpload from '@/components/FileUpload'

  export default {
    components: {
      FileUpload
    },
    data() {
      return {
        imageSrc: '',
        title: '',
        info: ''
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        // if no input, don't submit
        if (!this.imageSrc.length || !this.title.length || !this.info.length) {
          return;
        }
        console.log('posted')

        this.$store.commit('addPost', {
          img: this.imageSrc,
          title: this.title,
          text: this.info
        })
      },
      handleImage(imageData) {
        this.imageSrc = imageData
      }
    }
  }
</script>

<style scoped>
  #submitBtn {
    font-size: 60px;
    color: #42B983;
    border: none;
    background-color: transparent;
  }

  #submitBtnDiv {
    position: fixed;
    display: block;
    width: 100%;
    bottom: 70px;

  }

  #postTitle, #postInfo, #postImage {
    text-align: start;
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }

  #postImage > h2 {
    display: inline-block;
  }

  h2 {
    padding: 0;
  }

  input {
    width: 100%;
    font-size: 1.1em;
  }

  textarea {
    width: 100%;
    font-size: 1.4em;
  }

  img {
    position: absolute;
    margin-top: -100px;
    margin-left: 5px;
    background-color: whitesmoke;
  }
</style>