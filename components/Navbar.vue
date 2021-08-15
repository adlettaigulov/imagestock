<template>
  <header class="navbar">
    <div class="container">
      <ul class="logo">
        <li>
          <NuxtLink to="/"><img src="/images/logo.svg" /> ImageStock</NuxtLink>
        </li>
      </ul>

      <ul class="nav-right">
        <li>
          <NuxtLink to="favourites"
            ><img src="/images/icons/favourite.svg" /> Избранное
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="history"
            ><img src="/images/icons/history.svg" /> История поиска
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
/* Меню */
.navbar {
  background: #000;
  color: #fff;
}
.navbar ul {
  list-style-type: none;
}
.navbar ul li {
  float: left;
}
.logo li img {
  width: 28px;
  height: 28px;
  margin-right: 24px;
}
.logo {
  font-size: 24px;
}
.nav-right li {
  margin-right: 22px;
}
.nav-right img {
  margin-right: 10px;
}
</style>
