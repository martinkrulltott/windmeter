<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
 
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #777777;
  }
  h1, h2, h3 {
    font-weight: 600;
    color: #303133;
  }
  h2 {
    font-size: 29px;
  }

</style>
