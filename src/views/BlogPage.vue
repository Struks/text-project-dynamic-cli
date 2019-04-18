<template>
    <div class="margin-bottom">
        <hero-banner v-bind:headline='headline'/> 
        <!-- category -->
        <div class="container">
            <button class="btn btn-success mt-4" type="button" @click="newPost()">ADD NEW POST</button>
            <div class="categories d-none d-md-block">
              <div class="filter">
                  <label v-for="input in blogCategories" :key="input.id" @click="activeBlog(input.value), changeCategory(input.value)" :class="{active : activeCategoryBlog == input.value}">
                    <input type="radio" v-show="checked='checked'" v-model='activeCategoryBlog' :value="input.value">{{input.value}}</label>
              </div>
            </div>
            <div class="postList" id="postList">
              <article v-for="post in filteredPosts" :key="post.id" :class="'article ' + post.id">
                <button type="button" class="float-right btn btn-danger btn-delete" @click="deletePost(post.id,$event)">X</button>
                <i class="fa fa-edit float-right  mr-1" style="font-size:30px" title="Edit" @click="editPost(post.id)"></i>
                <router-link :to="'/blog/' + post.id" class="link-for-blog">
                  <div class="content">           
                    <img v-if="post.url !== ''" width="300px" height="220px" :src="post.url" class="group list-group-image mr-3 float-left z-hovr">
                    <img v-if="post.url == ''" width="300px" height="220px" :src="noimg" class="group list-group-image mr-3 float-left z-hovr">
                    <h2>{{post.title}}</h2>
                    <p class="text mt-3" v-html="post.text"></p>
                  </div> 
                </router-link>
                <span class="badge badge-secondary">Last modifed: {{post.timestamp | date}}</span>
              </article>
              
              <button v-if="!noMoreProjects"  type="button" @click="loadMore(3)" class="btn btn-success mt-md-5 loadMoreButton">Load More</button>
              <img src="/img/spinner.gif" alt="spinner" class="img img-fluid" id="loader" style="display:none">
              
            </div>

        </div>
    </div>
</template>



<script>
import db from '@/firebase/init';
import Banner from '@/components/banner/Banner.vue';

export default {
    components:{
      'hero-banner':Banner,
    },
    data(){
        return{
          headline:'My Pretty Blog',
          key:'',
          loading: true,
          noimg:'data:image/png;base64,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'
        }
    },
    computed:{
      blogCategories(){return this.$store.getters.blogCategories},
      activeCategoryBlog(){return this.$store.getters.activeCategoryBlog},
      blog(){return this.$store.getters.blog},
      noMoreProjects(){return this.$store.getters.noMoreProjects},
      filteredPosts(){return this.$store.getters.filteredPosts}
  
    },
    created(){
      setTimeout(()=>{
        this.$store.dispatch('getBlogs',3)
      },500)
    },
    methods:{
      newPost(){
        this.$router.push({path:'/blog/newPost'})
      },
      deletePost(id,event){
        event.preventDefault();
        if(confirm('Are you sure ? ')){
          db.collection("blog").doc(id).delete();
          setTimeout(() => {
            this.$store.dispatch('getBlogs',3)
          }, 400);   
        }
      },
      editPost(id){
        this.$router.push({path:`/blog/${id}/edit`})
      },
      loadMore(n){
        const loader = document.getElementById('loader');
        const button = document.querySelector('.loadMoreButton');
        button.style.display='none';
        loader.style.display='block';
        setTimeout(()=>{
          this.$store.dispatch('getBlogs',n*3)
          button.style.display='block';
          loader.style.display='none';
          
        },1500)
         
          
      },
      changeCategory(category){
        this.$store.commit('changeCategory',category)
      },
      activeBlog(category){
        this.$store.commit('activeBlog',category)
      },
    }, 
}
</script>


<style>
.margin-bottom{
  margin-bottom: 220px;
}
label {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 18px;
  color: #7f7f7f;
  padding-left: 0px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 45px;
  text-transform: uppercase;
}
@media(max-width:425px){
  label{
    margin-bottom: 10px;
  }
}
label input[type="radio"]{
  display: none;
}
.filter{
  display: inline;            
}
.filter label::after{
  content: "/";
  margin-left: 5px;
  color: #7f7f7f ;
}
.filter label:last-child::after{
  content: ""
}
.categories{
  margin-top: 20px;
}
.categoryGreen{
  color: #2ecc71;
}
.active{
  color: #2ecc71;
}
button{
  font-family: "Novecentosan", Arial, sans-serif;
  background: #2ecc71;
  border: none;
  border-radius: 0px;
}
#loader{
  width: 300px;
}
/* login and register */
.loginAndRegister a{
  font-family: "Novecentosan", Arial, sans-serif;
  margin-left: 10px;
  color: #7f7f7f;
  text-transform: uppercase;
  text-decoration-line:none;
    
}
/* blogs */
.article{
  margin-top: 20px;
  overflow: hidden;

}
.link-for-blog{
  text-decoration: none!important;
}
.text p{
  display: none;
}
.text p:first-child{
  display: block;
}
.z-hovr {
  opacity: 1;
  -webkit-transform: scale(1, 1);
  -webkit-transition-timing-function: ease-out;
  -webkit-transition-duration: 250ms;
  -moz-transition-timing-function: ease-out;
  -moz-transition-duration: 250ms;
  -moz-transform: scale(1, 1);
  transform: scale(1, 1);
  transition-timing-function: ease-out;
  transition-duration: 250ms;
}
.z-hovr:hover {
  opacity: 0.9;
  transform: scale(1.02, 1.02);
  -webkit-transform: scale(1.02, 1.02);
  transition-timing-function: ease-out;
  -webkit-transition-timing-function: ease-out;
  transition-duration: 250ms;
  -webkit-transition-duration: 250ms;
  -moz-transform: scale(1.02, 1.02);
  -moz-transition-timing-function: ease-out;
  -moz-transition-duration: 250ms;
  position: relative;
  z-index: 99;
}
.btn-delete{
  color:antiquewhite;
  cursor: pointer;
  padding: 1px 6px 1px 6px;
}
.fa{
  cursor: pointer;
}
.fa:hover{
  opacity: .7;
}
.badge{
  margin-top: 1 0px;
}
</style>
