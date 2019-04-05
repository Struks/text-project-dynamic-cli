<template>
    <div class="margin-bottom">
        <hero-banner v-bind:headline='headline'/> 
        <!-- category -->
        <div class="container">
            <button class="btn btn-success mt-4" type="button" @click="newPost()">ADD NEW POST</button>
            <div class="categories d-none d-md-block">
              <div class="filter">
                  <label v-for="input in blogCategories" :key="input.id" @click="activeBlog(input.value)">
                    <input type="radio" v-show="checked='checked'" v-model='activeCategoryBlog' :value="input.value">{{input.value}}</label>
              </div>
              <!-- <div class="loginAndRegister float-right">
                <a href="#">Register</a>
                <a href="#">Login</a>
              </div> -->
            </div>
            <article v-for="post in blog" :key="post.id" class="article">
              <router-link to="blog/success" class="link-for-blog">
                <img width="300px" :src="post.url" class="group list-group-image mr-3 float-left z-hovr">
                <div class="content">
                  <h2>{{post.title}}</h2>
                  <p v-html="post.text"></p>
                </div> 
              </router-link>
            </article>

        </div>
    </div>
</template>



<script>
import db from '@/firebase/init'
import Banner from '../components/banner/Banner.vue';
import newPost from '../components/blog/newPost.vue';
import { inspect } from 'util';
import {mapMutations} from 'vuex'
export default {
    components:{
        'hero-banner':Banner,
    },
    data(){
        return{
            headline:'My Pretty Blog',
            key:'',
            blog:[],
            loading: true,
         
        }
    },
    computed:{
      blogCategories(){return this.$store.getters.blogCategories},
      activeCategoryBlog(){return this.$store.getters.activeCategoryBlog},  
    },
    created(){
      db.collection('blog').onSnapshot(res =>{
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.blog.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    },
    methods:{
      newPost(){
        this.$router.push({path:'/blog/newPost'})
      },
      ...mapMutations([
        'activeBlog'
      ])
    }, 
}
</script>


<style scoped>
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
  background:whitesmoke;
  -webkit-box-shadow: 3px 3px 5px 6px #7f7f7f;  
    -moz-box-shadow:    3px 3px 5px 6px #7f7f7f;  
    box-shadow:         3px 3px 5px 6px #7f7f7f;
}
.link-for-blog{
  text-decoration: none;
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
</style>
