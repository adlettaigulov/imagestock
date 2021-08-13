<template>
  <div class="favourites">
    <Navbar />
    <h1 class="title">Избранное</h1>
    <div class="grid">
      <figure v-for="favourite in favourites">
        <img :src="favourite" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accessKey: "GcL4qg43ltPH_sQW8FyKmneEMaDyEcaQivgNgunLGiU",
      getPhotosUrl: "https://api.unsplash.com/photos",
      getTopicsUrl: "https://api.unsplash.com/topics",
      searchUrl: "https://api.unsplash.com/search/photos",
      favourites: []
    };
  },
  methods: {
    data() {
      return {
        favourites: []
      };
    },
    // Получение избанных фотографий
    getGrid() {
      let fav = JSON.parse(localStorage.getItem("likedPhotosList"));
      this.favourites = fav;
      console.log(fav);
    }
  },
  created() {
    this.getGrid();
  }
};
</script>

<style>
.grid {
  margin-top: 72px;
}
</style>
