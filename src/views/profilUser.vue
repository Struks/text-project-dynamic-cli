<template>
  <div class="margin-bottom">
    <hero-banner/>
    <div class="container profil">
      <div>
        <img
          v-if="!currentUser.img"
          class="rounded-circle img"
          :src="noimg"
          alt="no image"
          width="250px"
        >
        <img
          v-if="currentUser.img"
          class="rounded-circle img"
          :src="currentUser.img"
          alt="user image"
          width="250px"
        >
      </div>
      <h1 class="mt-3 mb-5">{{currentUser.firstname}} {{currentUser.lastname}}</h1>
      <h4 class="mb-4">BIOGRAPHY</h4>
      <div class="paraph-container">
        <p class="mb-5" v-html="currentUser.bio"></p>
      </div>
      <button type="button" class="btn btn-success" @click="editProfil(currentUser.id)">EDIT PROFIL</button>
    </div>
  </div>
</template> 


<script>
import Banner from "@/components/banner/Banner.vue";
export default {
  components: {
    "hero-banner": Banner
  },
  data() {
    return {
      noimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKi-GX6TjakjtFZgUKZpTIB-xas4sgyyAW3qHIu-g3nBhq70AiQ"
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.logUser;
    }
  },
  methods: {
    editProfil(id) {
      this.$router.push(`/${id}/edit`);
    }
  }
};
</script>


<style scoped>
.margin-bottom {
  margin-bottom: 250px;
}
h1,
h4 {
  font-family: "Novecentosan", Arial, sans-serif;
  color: #7f7f7f;
}
.profil {
  text-align: center;
}
.paraph-container {
  margin: 0px 100px;
  text-align: start;
}
.img {
  margin-top: -25px;
}
</style>