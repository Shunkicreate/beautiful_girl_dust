<template>
  <div class="about">
    <h1>This is an about page</h1>
    <top></top>
    <p>pppppppppppppppppp</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import Top from '../components/Top.vue'

@Options({
  components: {
    HelloWorld,
    Top,
  },
  
})
export default class Home extends Vue {}
</script>