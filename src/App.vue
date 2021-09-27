<template lang="pug">
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "~normalize.css";
@import "~pixel-glass/styles.css";
html {
  background-repeat: no-repeat;
  background-position: 50% 0;
  /* Mobile layout by default */
  background-image: url("assets/pixel-perfect-image/320.png");
}
// /* Tablet */
// @media (min-width: 760px) {
//   html {
//     /* Tablet layout */
//     background-image: url("assets/760.png");
//   }
// }
/* Desktop */
@media (min-width: 960px) {
  html {
    /* Desktop layout */
    background-image: url("assets/pixel-perfect-image/960.png");
  }
}
</style>
