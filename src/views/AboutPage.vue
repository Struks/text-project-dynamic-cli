<template>
  <div class="margin-bottom">
    <hero-banner v-bind:headline="headline"></hero-banner>
    <about-us v-bind:image="image" :text1="text1" :text2="text2"></about-us>
    <div class="container">
      <div class="row row-space pt-md-5">
        <div class="col-12 col-md-6 mr-3">
          <h2>{{mission.statement}}</h2>
          <p>{{mission.explanation}}</p>
        </div>
        <div class="col-12 col-md-5 pl-md-1">
          <h2>{{fun.facts}}</h2>
          <p>{{fun.explanation}}</p>
        </div>
      </div>
      <h2 class="mt-4 mb-4">SERVICES</h2>
    </div>
    <tab-services></tab-services>
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import AboutUs from "../components/about/AboutUs.vue";
import TabServices from "../components/about/TabServices.vue";

export default {
  components: {
    "hero-banner": Banner,
    "about-us": AboutUs,
    "tab-services": TabServices
  },
  data() {
    return {};
  },
  computed: {
    headline() {
      return this.$store.getters["about/headline"];
    },
    image() {
      return this.$store.getters["about/image"];
    },
    text1() {
      return this.$store.getters["about/text1"];
    },
    text2() {
      return this.$store.getters["about/text2"];
    },
    mission() {
      return this.$store.getters["about/mission"];
    },
    fun() {
      return this.$store.getters["about/fun"];
    }
  }
};
</script>

<style scoped>
.row-space p {
  padding-top: 10px;
}
.margin-bottom {
  margin-bottom: 240px;
}
@media (max-width: 425px) {
  .margin-bottom {
    margin-bottom: 150px;
  }
}
</style>


