<template>
  <div class="home">
    <WindMeter :spot="spot" />
  </div>
</template>

<script>
import WindMeter from "@/components/WindMeter.vue";

export default {
  name: "home",
  components: {
    WindMeter: WindMeter
  },
  props: ["spot"]
};
</script>
