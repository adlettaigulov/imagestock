<template>
  <div class="wrapper">
    <Navbar />
    <Home />
    <button @click="scrollToTop" class="scroll">
      <img src="/images/icons/arrow-right.svg" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollpx: 0
    };
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  mounted() {}
};
</script>

<style>
/* Подключение шрифтов */
@font-face {
  font-family: "SF UI Display Thin";
  src: url("/fonts/sf-ui-display-thin.woff") format("woff");
}
@font-face {
  font-family: "SF UI Display Light";
  src: url("/fonts/sf-ui-display-light.woff") format("woff");
}
@font-face {
  font-family: "SF UI Display Medium";
  src: url("/fonts/sf-ui-display-medium.woff") format("woff");
}

/* Основные стили */
a,
a:hover {
  color: #fff;
  text-decoration: none;
}
input,
select,
textarea,
input::placeholder {
  color: #fff;
}
input:focus {
  outline: none;
}
.wrapper {
  font-family: "SF UI Display Medium";
}
.container {
  max-width: 1480px;
  margin: 0 auto;
}
.navbar {
  padding-top: 20px;
}
.scroll {
  position: fixed; /* Fixed/sticky position */
  bottom: 60px; /* Place the button at the bottom of the page */
  right: 60px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  padding: 10px;
}
@media (max-width: 575.98px) {
  .scroll {
    bottom: 15px;
    right: 15px;
  }
  .nav-right {
    margin-top: 20px !important;
  }
  .navbar ul {
    margin: 0 auto;
    padding: 0;
  }
  .navbar ul li {
    float: none !important;
    text-align: center;
    margin-bottom: 15px;
  }
  .title {
    padding-top: 50px !important;
  }
}
</style>
