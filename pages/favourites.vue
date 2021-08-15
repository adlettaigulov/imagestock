<template>
  <div class="favourites">
    <Navbar />
    <h1 class="title">Избранное</h1>
    <!-- Изменение способа отображения изображений -->
    <div class="variations">
      <img src="/images/icons/block.svg" @click="gridColumn" />
      <img src="/images/icons/grid.svg" @click="gridRows" />
    </div>

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
    },
    // Способ отображения - один блок на всю ширину
    gridColumn() {
      let gridChange = document.querySelector(".grid");
      gridChange.style.columnCount = "1";
    },
    // Способ отображения - 3 блока на строку
    gridRows() {
      let gridChange = document.querySelector(".grid");
      gridChange.style.columnCount = "3";
    },
    changePadding() {
      document.querySelector(".navbar").style.paddingTop = "20px";
    }
  },
  mounted() {
    this.getGrid();
    this.changePadding();
  }
};
</script>

<style>
figure img {
  max-width: 100%;
  display: block;
  border-radius: 8px;
}
figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 27px;
  break-inside: avoid;
}
figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
  cursor: pointer;
}
.grid {
  column-count: 3;
  column-gap: 27px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 72px;
}
</style>
