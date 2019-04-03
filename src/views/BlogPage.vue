<template>
    <div>
        <hero-banner v-bind:headline='headline'/> 
        <!-- category -->
        <div class="container">
            <button class="btn btn-success mt-4" onclick="location.href='/Blog/newPost';">ADD NEW POST</button>
            <div class="categories d-none d-md-block">
                <div class="filter">
                    <label v-for="input in blogInputs" :key="input.id" @click="activeBlog(input.value)">
                        <input type="radio" v-show="checked='checked'" v-model='activeCategoryBlog' :value="input.value">{{input.value}}</label>
                </div>
                <div class="loginAndRegister float-right">
                <a href="#">Register</a>
                <a href="#">Login</a>
            </div>
            </div>
            
            <div>
            <h2></h2>
            <p></p>
            <img src="" url="" alt="">
            </div>
        </div>
    </div>
</template>



<script>
import Banner from '../components/banner/Banner.vue';
import newPost from '../components/blog/newPost.vue';
import { inspect } from 'util';
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    components:{
        'hero-banner':Banner,
    },
    data(){
        return{
            headline: 'My Pretty Blog'
        }
    },
    computed:{
        ...mapGetters([
            'posts',
            'blogInputs',
            'activeCategoryBlog'
        ])
    },
    created(){
        // this.$store.dispatch('blog/getPosts')
    },
    methods:{
        ...mapMutations([
           'activeBlog',
        ])    
    }, 
}
</script>


<style scoped>
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
</style>
