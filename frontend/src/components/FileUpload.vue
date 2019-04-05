<template>
  <div id="upload">
    <input id="file-load" type="file" @change="upload"/>
    <label for="file-load"><i class="fas fa-images"></i></label>
  </div>
</template>

<script>
  export default {
    name: "FileUpload",
    methods: {
      upload(e) {
        let image = e.target.files[0]; // array with files

        let reader = new FileReader();
        reader.readAsDataURL(image);  // read file to this format
        reader.onload = (r) => { // when file is loaded
          let imageData = r.target.result;
          this.$emit('uploadImage', imageData)
        }
      }
    }
  }
</script>

<style scoped>
  #upload{
    display: inline-block;
  }
  #file-load {
    width: 0.1px;
    height: 0.1px;
  }

  label {
    color: #42B983;
    margin: auto;
    font-size: 44px;
    /*display: block;*/
    width: 50px;
    height: 50px;
  }
</style>