<template>
  <div id="app">
    <router-view></router-view>
    <!-- <el-button @click.native="startHacking">Let's do it</el-button>
       <!-- <circle-menu type="right" :number='3'  mask='black' btn colors="[ 'rgb(255, 255, 102)', '#A7425C', '#FFE26F', 'F3825F', '#F19584']">
     <a slot="item_1" class="fa fa-twitter fa-lg"></a>
     <a slot="item_2" class="fa fa-weixin fa-lg"></a>
     <a slot="item_3" class="fa fa-weibo fa-lg"></a> -->
  <!--</circle-menu>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
</style>
