<template>
  <a :href="stats.link" target="_blank" class="container">
    <div class="icon-section">
      <p class="text" :class="{ hidden: !stats.isLoaded }">
        {{ Math.round(stats.windspeed) }}
      </p>
      <img
        src="../assets/arrow.png"
        class="arrow"
        :style="{ transform: 'rotate(' + stats.directiondegrees + 'deg)' }"
      />
    </div>
    <div>
      <h2>{{ spot | capitalize }}</h2>
      <div v-if="stats.isLoaded">
        <p>Vind: {{ stats.windspeed }} m/s</p>
        <p>Byar: {{ stats.gustspeed }} m/s</p>
        <p>Riktning: {{ stats.directiontext }}</p>
      </div>
      <div v-else>
        <p>Laddar...</p>
      </div>
    </div>
  </a>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WindMeter",
  props: ["spot"],
  computed: mapState(["stats"]),
  mounted() {
    this.$store.dispatch("loadStats", { spot: this.spot });
    setInterval(() => {
      this.$store.dispatch("loadStats", { spot: this.spot });
    }, 60000);
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped lang="scss">
h2 {
  margin: 0 0 3px;
}
p {
  margin: 0 0 1px;
  transition: all 2s;
}
.hidden {
  opacity: 0;
}
.container {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}
.icon-section {
  position: relative;
  display: inline-block;
  width: 104px;
  height: 104px;
  border-radius: 100px;
  background: #168bab;
  margin-right: 15px;
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
  transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
