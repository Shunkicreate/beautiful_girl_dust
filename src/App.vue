<template>
  <div id="nav">
  <!-- <Instagram></Instagram> -->
    <!-- <img src="https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.117.937.937a/s640x640/240481193_2051943618289644_4879622240122743694_n.jpg?_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=11qj2yK-iXcAX8Wbbnc&edm=ABfd0MgBAAAA&ccb=7-4&oh=6bb239c44c0730d08a2f3ee1edbbd28e&oe=6134CD79&_nc_sid=7bff83" > -->
    <!-- <img src="https://www.discovery-n.co.jp/wp-content/uploads/2016/12/bf5cbef773c70449c9d1389e01edc8b6.jpg" > -->
   <!-- <div class="instagram-content">
    <instagram-embed :url="'https://www.instagram.com/p/B_xaj-WAXIg/?utm_source=ig_web_copy_link'" :max-width=500></instagram-embed>
  </div> -->
  <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryk2SQBez7v3AsA7Au3R4SjvhHRMcds4OeyFhBhz1nDNWw_p8iWstLgs3MA" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOn7YJMB9hrvTfqN48doA3FwrDhARUReKwOqAUh3v1DvnqQsfFTXkTrtWZaw" >
  <img src="https://www.instagram.com/p/CSaaKN5h4W_/?utm_source=ig_web_copy_link"> -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

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
