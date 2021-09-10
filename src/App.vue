<template>
  <div id="nav">
    <router-link to="/">美女検索</router-link> |
    <router-link to="/about">関連画像検索</router-link>
  <router-view/>

  </div>
</template>

// <style lang="scss">
// @import "~@/assets/scss/vendors/bootstrap-vue/index";
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     // font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>

<script lang="ts">
import { defineComponent} from "vue"
// import Instagram from "./components/Instagram.vue"

export default defineComponent({
  name: "App"
  // components: { Instagram },
  // setup() {
    //   let recaptchaScript = document.createElement('script')
  //   recaptchaScript.setAttribute('src', '//www.instagram.com/embed.js')
  //   document.head.appendChild(recaptchaScript)
  // }

})
</script>
