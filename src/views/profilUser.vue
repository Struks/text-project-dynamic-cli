<template>
  <div class="margin-bottom">
    <hero-banner/>
    <div class="container">
      <button type="button" class="btn btn-success mt-5 d-none d-md-block" @click="editProfil(currentUser.id)">EDIT PROFIL</button>
      <div class="profil">
        <div class="images align-center">
          <img
            v-if="!currentUser.img"
            class="rounded-circle img img-fluid"
            :src="noimg"
            alt="no image"
            width="250px"
            height="300px"
          >
          <img
            v-if="currentUser.img"
            class="rounded-circle img img-fluid"
            :src="currentUser.img"
            alt="user image"
            width="250px"
            height="300px"
          >
        </div>
        <h1 class="mt-3 mb-md-5">{{currentUser.firstname}} {{currentUser.lastname}}</h1>
        <button type="button" class="btn btn-success d-sm-none" @click="editProfil(currentUser.id)">EDIT PROFIL</button>

        <h4 class="mb-4 bio">BIOGRAPHY</h4>
        <div class="paraph-container">
          <p class="mb-5" v-html="currentUser.bio"></p>
        </div>
      </div>
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
  // beforeRouteEnter (to, from, next) {
  //   const id = to.params.id
  //   this.$store.dispatch('users/setUser', id )
  //   .then(response => {
  //       next();
  //   });
  // },
  computed: {
    currentUser() {
      return this.$store.getters.logUser;
    },
    users() {
      return this.$store.getters.users;
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
  text-align: start;
}
.img {
  margin-top: -120px;
}
.images{
  max-width: 500px;
  margin-right: auto;
  margin-left: auto
}
.btn {
  padding: 1px;
  border-radius: 0px;
}
@media (max-width: 768px) {
  .margin-bottom {
    margin-bottom: 180px;
  }
}
@media (max-width: 425px) {
  .margin-bottom {
    margin-bottom: 140px;
  }
  .img {
  margin-top: -20px;
  }
  .bio{
    margin-top: 30px;
  }
}
</style>