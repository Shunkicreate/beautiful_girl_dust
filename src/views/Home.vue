<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <img alt="Vue logo" src="https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <h1>こちらは美女を検索することのできるサイトです．</h1>
    <Bootstrap></Bootstrap>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import Bootstrap from '../components/Bootstrap.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Bootstrap,
  },
})
export default class Home extends Vue {}
</script>
