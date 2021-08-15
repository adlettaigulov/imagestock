<template>
  <div class="single-photo-page">
    <Navbar />
    <div class="single-photo" v-for="photo in photos">
      <img :src="photo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: []
    };
  },
  methods: {
    getPhoto() {
      let photo = JSON.parse(localStorage.getItem("singlephoto"));
      this.photos = photo;
      document.querySelector(".single-photo-page").style.backgroundImage =
        "url('" + photo + "')";
    }
  },
  mounted() {
    this.getPhoto();
  }
};
</script>

<style>
.single-photo-page {
  max-width: 1920px;
  background-size: cover;
  background-position: center center;
}
.single-photo {
  padding: 10% 20%;
}
.single-photo img {
  max-width: 1920px;
  width: 100%;
  box-shadow: 0px 4px 100px #000000;
  border-radius: 8px;
}
</style>
