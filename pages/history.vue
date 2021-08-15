<template>
  <div class="history">
    <Navbar />
    <h1 class="title">История поиска</h1>
    <div class="search-results">
      <p v-for="searchResult in searchResults">
        {{ searchResult }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: []
    };
  },
  methods: {
    // Получение списка введеных в поиск слов из localStorage
    getSearchHistory() {
      let getSes = JSON.parse(localStorage.getItem("searchHistoryResults"));
      this.searchResults = getSes;
    },
    changePadding() {
      document.querySelector(".navbar").style.paddingTop = "20px";
    }
  },
  mounted() {
    this.getSearchHistory();
    this.changePadding();
  }
};
</script>

<style>
.search-results p {
  text-align: center;
  line-height: 1.3;
  font-size: 24px;
  font-weight: bold;
}
.search-results p:first-child {
  padding-top: 20px;
}
</style>
