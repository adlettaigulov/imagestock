<template>
  <div class="wrapper">
    <Navbar />
    <Home />
  </div>
</template>

<script>
export default {};
</script>

<style>
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
.navbar {
  padding-top: 20px;
}
</style>
