<template>
  <div v-if="stats && stats.windspeed">
    <div class="icon-container">
      <p class="text">{{ Math.round(stats.windspeed) }}</p>
      <img src="../assets/arrow.png" class="arrow" :style="{ transform: 'rotate(' + stats.directiondegrees + 'deg)' }"/>
    </div>
    <h2>{{ spot | capitalize }}</h2>
    <p>Vind: {{ stats.windspeed }} m/s</p>
    <p>Byar: {{ stats.gustspeed }} m/s</p>
    <p>Riktning: {{ stats.directiontext }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WindMeter",
  props: ['spot'],
  computed: mapState(["stats"]),
  mounted() {
    this.$store.dispatch("loadStats", {spot: this.spot});
    setInterval(() => {
      this.$store.dispatch("loadStats", {spot: this.spot});
    }, 10000);
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>

<style scoped lang="scss">
  h2 {
    margin: 0 0 5px;
  }

  p {
    margin: 5px 0px;
  }

  .icon-container {
    position: relative;
    display: inline-block;
    width: 104px;
    height: 104px;
    border-radius: 100px;
    background: #168BAB;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #dcf7ff;
    font-size: 60px;
  }
  .arrow {
    width: 100px;
    height: 100px;
    padding: 2px;
    opacity: 0.5;
    transition: all 2s;
  }
</style>
