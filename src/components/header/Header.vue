<template>
  <div class="container">
    <div class="row justify-content-between m-1 align-items-end mb-3">
      <div>
        <a href="/">
          <img src="/img/logo.svg" alt="logo">
        </a>
      </div>
      <social-media ></social-media>
    
      <!--hamburger menu-->
      <button
        type="button"
        class="navbar-toggler collapsed d-md-none"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <div class="navbar-icon">
          <svg
            height="32px"
            id="Layer_1"
            style="fill:#737373"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            ></path>
          </svg>
        </div>
      </button>
      <nav class="navbar navbar-expand-sm pl-0 d-md-none">
        <div class="main-menu collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav main-navigation pt-2">
            <li class="nav-item" v-for="(menu,index) in menues" :key="index">
              <router-link
                class="nav-link pl-md-0 pr-md-4"
                :to="menu.link"
                :exact="menu.exact"
              >{{menu.name}}</router-link>
            </li>
              <li v-for="link in auth" :key="link.id">
            <router-link class="nav-link mt-3" v-if="!logUser"
              :to="link.link"
              :exact="link.exact"
            >{{link.name}}</router-link>
          </li>
          <li class="">
          <router-link class="nav-link mt-3" v-if="logUser" :to="'/' + logUser.id">{{logUser.username}}</router-link>
          </li>
          <li>
          <button v-if="logUser" @click="logout()" class="logoutBtn m-0 p-0">LOGOUT</button>
            </li>
            <li class="hamburger-social-media nav-item d-md-none mt-2">
              <a
                v-for="(media,index) in socialMedia"
                :key="index"
                :href="media.href"
                target="_blank"
                class="mr-1"
              >
                <svgicon 
                  :name="media.name" 
                  width="35" 
                  height="35"
                  :class="media.class"
                ></svgicon>
              </a>
            </li>          
          </ul>
         <!--social media hamburger-->
        </div>
      </nav>
    </div>
    <router-link class="adminMenu" to="/admin menu">ADMIN MENU</router-link>
    <hr>
    <nav class="navbar navbar-expand-sm pl-0 d-none d-md-block">
      <div class="main-menu">
        <ul class="navbar-nav main-navigation pt-2">
        
          <li class="nav-item" v-for="(menu,index) in menues" :key="index">
            <router-link
              class="nav-link pl-md-0 pr-md-4"
              :to="menu.link"
              :exact="menu.exact"
            >{{menu.name}}</router-link>
          </li>
          
        </ul>
        <ul class="auth-links navbar-nav main-navigation" >
          <li v-for="link in auth" :key="link.id">
            <router-link v-if="!logUser"
              :to="link.link"
              :exact="link.exact"
            >{{link.name}}</router-link>
          </li>
          <router-link v-if="logUser" :to="'/' + logUser.id">{{logUser.username}}</router-link>
          <button v-if="logUser" @click="logout()" class="logoutBtn">LOGOUT</button>
         </ul>    
           
      </div>
    </nav>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: {
    "social-media": SocialMedia
  },
  data() {
    return {
    };
  },
  created(){
    this.$store.dispatch('setUser')
  },
  computed:{
    menues(){return this.$store.getters.menues},
    socialMedia(){return this.$store.getters.socialMedia},
    auth(){return this.$store.getters.auth},
    logUser(){return this.$store.getters.logUser},
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  },
};
</script>


<style scoped>
hr {
  margin-top: 0px;
}
.main-menu a {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 18px;
  color: #7f7f7f;
}
.navbar {
  margin-top: -15px;
}
.auth-links{
  margin-top: -35px;
  float:right;
  
}
.auth-links a{
  padding-left: 30px;
  text-decoration: none;
}
.logoutBtn{
  font-family: "Novecentosan", Arial, sans-serif;
  color: #7f7f7f;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  margin-left: 15px; 
}
.router-link-active {
  color: #2ecc71 !important;
}
a svg{
  color: #dadada;
}
@media (max-width: 425px) {
  button {
    margin-left: 160px;
  }
}
@media (max-width: 375px) {
  button {
    margin-left: 110px;
  }
}
@media (max-width: 320px) {
  button {
    margin-left: 50px;
  }
}
.adminMenu{
  background: #F0EEED;
  border: 1px solid #DADADA;
  font-family: "Novecentosan", Arial, sans-serif;
  color: #7f7f7f;
  text-decoration: none;
}
</style>