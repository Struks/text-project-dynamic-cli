<template>
  <div class="margin-bottom">
    <hero-banner v-bind:headline="headline"></hero-banner>
    <div class="container">
      <!-- categories for mobile view -->
      <div class="content d-md-none" id="search-header">
        <div class="row">
          <div class="col-6" id="filters content-category">
            <nav class="nav-bar navbar-expand-sm navbar-light" id="navbar-work">
              <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown selected" role="button" data-toggle='dropdown' aria-haspopup='true' aria-expanded="false">Categories</a>
              <div class="portfolioFilter navbar-collapse mt-md-5 pb-md-5 dropdown-menu" aria-labelledby="navbarDropdown">
                <ul class="sort-nav navbar-nav main-navigation">
                  <label v-for="input in inputs" :key="input.id" @click="active(input.value), changeCategory(input.value)" :class="{active : activeCategory == input.value}">
                    <input type="radio" v-show="checked ='checked'"  v-model="selectedCategory" :value="input.value">{{input.text}}
                  </label>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div><!-- /categories for mobile view -->

      <!-- categories for dekstop view-->
      <div class="categories d-none d-md-block">
        <div class="filter">
          <label v-for="input in inputs" :key="input.id" @click="active(input.value), changeCategory(input.value)" :class="{active : activeCategory == input.value}">
            <input type="radio" v-show="checked='checked'"  v-model="selectedCategory" :value="input.value">{{input.text}}</label>
        </div>
          
          <!-- list/grid icons -->
          <div class="list-grid-layout d-none d-md-block float-right">
            <a class="nav-item" href="#grid" >
              <svgicon
                name="gridView"
                id="grid-view"
                @click="switchToGrid('grid'), listContentView = false" :class="{activeView : activeView == 'grid'}"
              ></svgicon>
            </a>
            <a class="nav-item" href="#list" >
              <svgicon
                name="listView"
                id="list-view"
                @click="switchToList('list'), listContentView = true" :class="{activeView : activeView == 'list'}"
              ></svgicon>
            </a>
          </div>
      </div>

      <div style="clear: both;"></div>
      <!-- grid view -->
      <div v-if="!listContentView" class="row portfolioContainer grid-layout" id="portfolio">
        <div v-for="image in filteredImages.slice(0,imagesToShow)" :key="image.id" class="col-lg-4 col-md-6 col-sm-12 z-hovr" >
          <a href="#">
            <img width="300px" :src="image.src" :alt="image.alt" class="group list-group-image">
          </a>
        </div>
        <button v-if="images.length > 3 && imagesToShow < images.length" @click="loadMore" class="btn btn-success mt-md-5">LOAD MORE</button>
        <img src="/img/spinner.gif" alt="spinner" class="img img-fluid" id="loader" style="display:none">
      </div>
      <!-- list-view -->
      <div v-if="listContentView" class="row portfolioContainer grid-layout" id="portfolio">
        <div v-for="image in filteredImages.slice(0,imagesToShow)" :key="image.id" class="z-hovr" >
          <a href="#">
            <img width="300px" :src="image.src" :alt="image.alt" class="group list-group-image mr-3 float-left">
            <div class="content">
              <h2>{{image.title}}</h2>
              <p>{{image.text}}</p>
            </div>
          </a>
        </div>
        <button v-if="images.length > 3 && imagesToShow < images.length" @click="loadMore" class="btn btn-success mt-md-5">LOAD MORE</button>
        <img src="/img/spinner.gif" alt="spinner" class="img img-fluid" id="loader" style="display:none">
      </div><!-- /list-view -->
    </div>
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  components: {
    "hero-banner": Banner
  },
  data() {
    return {
      headline: "check out what i can do",
      listContentView:false,      
    };
  },
  computed: {
    selectedCategory(){
      return this.$store.getters.selectedCategory;
    },
    ...mapGetters([
      'images',
      'imagesToShow',
      'filteredImages',
      'activeCategory',
      'activeView',
      'inputs'
    ]),
    
  },
  methods:{
    ...mapMutations([

      'changeCategory',
      'active',
      'switchToGrid',
      'switchToList'
    ]),
    ...mapActions([
      'loadMore',
    ])
  },

};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 240px;
}
.portfolioFilter {
  padding-left: 0px;
}
label {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 18px;
  color: #7f7f7f;
  padding-left: 0px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 45px
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
  margin-top: 42px;
}
.categoryGreen{
  color: #2ecc71;
}
.active{
  color: #2ecc71;
}
/* grid-list view */
.list-grid-layout svg{
  width: 15px;
  height: 15px;
  margin-top: 10px;
  color: #7f7f7f ;
  margin-left: 5px;
}
.activeView{
  color: #2ecc71 !important;
}
.grid-layout img{
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
}
.list-layout{
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 1.3em; 
}
.content{
  margin: 20px;
}
@media(max-width: 768px){
  .margin-bottom {
    margin-bottom: 190px;
  }
}
@media(max-width: 425px){
  .list-layout{
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 120px !important;
  }
  label{
    margin-left: 5px;
  }
}
button{
  font-family: "Novecentosan", Arial, sans-serif;
  background: #2ecc71;
  border: none;
  border-radius: 0px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding: 10px 30px;
  margin-top: 10px;
}
#loader{
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.z-hovr a{
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
