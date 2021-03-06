<template>
  <div class="home">
    <div class="second-header">
      <div class="container">
        <!-- Отлаженный поиск (1 секунда) -->
        <div class="search">
          <input
            class="search-bar"
            type="text"
            placeholder="Поиск"
            @input="debounceSearch"
          />
          <hr />
        </div>
        <!-- Отображение списка тематик -->
        <ul class="topics">
          <li v-for="topic in topics" :key="topic.id">
            <a @click="showTopicImages(topic.slug)"
              ><span>{{ topic.title }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <!-- Изменение способа отображения изображений -->
      <div class="variations">
        <img src="/images/icons/block.svg" @click="gridColumn" />
        <img src="/images/icons/grid.svg" @click="gridRows" />
      </div>
      <!-- Сетка из фотографий -->
      <div class="grid">
        <figure class="item" v-for="image in images" :key="image.id">
          <div class="cover">
            <button class="btn btn-default" @click="likePhoto()">
              <img src="/images/icons/favourite.svg" alt="" />
            </button>
          </div>
          <img class="grid-image" :src="image.urls.full" @click="getPhoto" />
        </figure>
      </div>
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
      images: [],
      topics: [],
      debounce: null,
      liked: []
    };
  },
  methods: {
    // Получение сетки из последних фотографий
    getGrid() {
      fetch(this.getPhotosUrl + "?client_id=" + this.accessKey)
        .then(response => response.json())
        .then(json => {
          this.images = json;
        })
        .catch(err => {
          console.log("error", err);
        });
    },
    // Получение самых популярных фото тематик
    getTopics() {
      fetch(this.getTopicsUrl + "?client_id=" + this.accessKey)
        .then(response => response.json())
        .then(json => {
          this.topics = json;
        })
        .catch(err => {
          console.log("error", err);
        });
    },
    // Получение URL фотографии и добавление в localStorage
    getPhoto() {
      console.log(event.target.src);
      let photoSrc = event.target.src;
      let photo = !!localStorage.getItem("photo")
        ? JSON.parse(localStorage.getItem("photo"))
        : [];
      photo.push(photoSrc);
      localStorage.setItem("photo", JSON.stringify(photo));
      location.href = `photo`;
    },
    // Добавление фотографии в избранное
    likePhoto() {
      let likedPhoto = event.currentTarget.parentElement.nextElementSibling;
      let likedPhotoUrl = likedPhoto.src;
      let likedPhotos = !!localStorage.getItem("likedPhotosList")
        ? JSON.parse(localStorage.getItem("likedPhotosList"))
        : [];
      likedPhotos.push(likedPhotoUrl);
      localStorage.setItem("likedPhotosList", JSON.stringify(likedPhotos));
    },
    // При клике показывать фотографии данной тематики
    showTopicImages(slug) {
      fetch(
        this.getTopicsUrl + `/${slug}/photos` + "?client_id=" + this.accessKey
      )
        .then(response => response.json())
        .then(json => {
          this.images = json;
        });
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
    // Отлаженный поиск (1 секунда) + сохранение истории через localStorage
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        let query = event.target.value;
        let searchHistory = !!localStorage.getItem("searchHistoryResults")
          ? JSON.parse(localStorage.getItem("searchHistoryResults"))
          : [];
        searchHistory.push(query);
        localStorage.setItem(
          "searchHistoryResults",
          JSON.stringify(searchHistory)
        );
        let getSes = JSON.parse(localStorage.getItem("searchHistoryResults"));
        console.log(getSes);
        fetch(
          this.searchUrl +
            `?page=1&per_page=10&query=${query}` +
            "&client_id=" +
            this.accessKey
        )
          .then(response => response.json())
          .then(json => {
            this.images = json.results;
          });
      }, 1000);
    }
  },
  mounted() {
    this.getGrid();
    this.getTopics();
  }
};
</script>

<style>
/* Меню */
.navbar {
  padding-top: 90px;
}
.second-header {
  background: #000;
  color: #fff;
  overflow: hidden;
}
.topics {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  text-align: center;
  margin: 30px 0 90px 0;
  font-family: "SF UI Display Light";
}
.topics li {
  margin-right: 20px;
  font-size: 18px;
}
.topics li a {
  cursor: pointer;
}
hr {
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 49%,
    rgba(255, 255, 255, 0) 100%
  );
}

/* Заголовки страниц */
.title {
  padding-top: 110px;
  text-align: center;
}
.item {
  position: relative;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
}
.item:hover .cover {
  display: block;
}
.btn-default {
  padding: 5px;
  margin: 10px 0 0 15px;
}

/* Поиск */
.search {
  clear: both;
}
.search input {
  font-family: "SF UI Display Thin";
  font-size: 72px;
  border: none;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  background: #000;
  color: #fff;
}
.search input:focus::placeholder {
  opacity: 0;
}

/* Сетка */
.grid {
  column-count: 3;
  column-gap: 27px;
  max-width: 1440px;
  margin: 0 auto;
}
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

/* Кнопки переключения стиля отображения */
.variations {
  margin: 72px 0;
  text-align: center;
}
.variations img:last-child {
  margin-left: 20px;
}
.variations img:hover {
  background: #eee;
  cursor: pointer;
}
</style>
