<template>
  <div class="margin-bottom">
    <hero-banner/>
    <div class="container">
      <button type="button" class="btn-edit btn btn-success mt-5 d-none d-md-block" @click="editProfil(singleUser.id)">EDIT PROFIL</button>
      <div class="profil"> 
        <div class="images align-center">
          <img
            v-if="!singleUser.img"
            class="rounded-circle img img-fluid"
            :src="noimg"
            alt="no image"
            width="250px"
            height="300px"
          >
          <img
            v-if="singleUser.img"
            class="rounded-circle img img-fluid"
            :src="singleUser.img"
            alt="user image"
            width="250px"
            height="300px"
          >
        </div>
        <h1 class="mt-3 mb-md-2">{{singleUser.firstname}} {{singleUser.lastname}}</h1>
        <p class="mt">Role: {{singleUser.role}}</p>
        <button type="button" class="btn-edit btn btn-success d-sm-none" @click="editProfil(singleUser.id)">EDIT PROFIL</button>
        <h4 class="mb-4 bio">BIOGRAPHY</h4>
        <div class="paraph-container">
          <p class="mb-5" v-html="singleUser.bio"></p>
        </div>
        <hr/>
        <h4 class="posts-title">POSTS:</h4>
      </div>
      <!-- articles -->
        <article v-for="post in blogs" :key="post.id" v-show="post.author === singleUser.firstname + ' ' + singleUser.lastname" :class="'article ' + post.id">
          <button
            type="button"
            class="float-right btn btn-danger btn-delete"
            @click="deletePost(post.id,$event)"
          >X</button>
          <i
            class="fa fa-edit float-right mr-1"
            style="font-size:30px"
            title="Edit"
            @click="editPost(post.id)"
          ></i>
          <router-link :to="'/blog/' + post.id" class="link-for-blog">
            <div class="content">
              <img
                v-if="post.url !== ''"
                width="300px"
                height="220px"
                :src="post.url"
                class="group list-group-image mr-3 z-hovr"
              >
              <img
                v-if="post.url == ''"
                width="300px"
                height="220px"
                :src="noimg"
                class="group list-group-image mr-3 z-hovr"
              >
              <h2>{{post.title}}</h2>
              <p class="text mt-3 d-none d-md-block" v-html="post.text"></p>
          </div>
          </router-link>
          <span class="badge badge-primary">
            Last modifed: {{post.timestamp | date}} ||
            BY
            <i>
              <b>{{post.author}}</b>
            </i>
          </span>
        </article><!-- articles -->
    </div>
  </div>
</template> 


<script>
import Banner from "@/components/banner/Banner.vue";
import { store } from '@/store/index';
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
    singleUser() {
      return this.$store.getters['users/singleUser'];
    },
    blogs(){
      return this.$store.getters['blog/blog'];
    },
  },
  created(){
    store.dispatch('blog/getBlogs',10)
  },
  methods:{
    //path to edit post
    editPost(id) {
      this.$router.push({ path: `/blog/${id}/edit` });
      console.log(id);
      
    },
    //delete post
    async deletePost(id, event) {
      event.preventDefault();
      if (confirm("Are you sure ? ")) {
        db.collection("blog")
          .doc(id)
          .delete();
        await this.$store.dispatch("blog/getBlogs",10); 
      }
    },
  },
  beforeRouteUpdate : (to, from, next) => {
        store.dispatch('users/getSingleUser', null )
        // store.commit('users/setUserPosts', [] )
        const id = to.params.id
        store.dispatch('users/getSingleUser', id )
        .then(response => {
            next();
        });
    },
    beforeDestroy() {
        // this.$store.commit('users/setUserPosts', [] )
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
.btn-edit{
  padding: 1px;
  border-radius: 0px;
}
.posts-title{
  margin-bottom: 50px;
}
/* media query */
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