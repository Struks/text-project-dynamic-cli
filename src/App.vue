<template>
  <div id="app">
    <header-view></header-view>
    <router-view/>
    <footer-view></footer-view>
  </div>
</template>

<script>
import './css/fonts.css'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import './css/media-queries.css'
import '../node_modules/slick-carousel/slick/slick.css';


export default {
  components:{
    'header-view': Header,
    'footer-view': Footer
  },
  name: 'App',
  data(){
    return{
      
    }
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
#app {
  margin-top: 30px;
}
h2{
  font-size: 24px;
  font-family: 'Novecentosan', Arial, sans-serif;
  color: #8a8888;
}
p{
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 14px;
  color: #adacac;
}
  .container{
    max-width: 970px;
  }
.router-view{
  min-height: 100%;
  margin: 0;
}
.feedback{
  margin-top: 150px;
  border: 3px solid #cbdfaa;
  background-color: #e4f6ca;
  border-radius: 20%;
}
.feedback-message{
  font-size: 24px;
  margin: 0px;
  font-family: 'Helvetica', Arial, sans-serif;
  text-align: center;
}

@media(max-width: 425px){
  .feedback{
    margin-top: 50px;
  }
  .feedback-message{
    font-size: 20px;
  }
}

/*corousel*/
#slick .slick.track:before {
  width:100%;
}
#slick .slick.track:after {
  width:100%;
}
.ha .col-md-1  {
  margin-right:0;
}
.slick-slide{
  padding-left:10px;
  padding-right:10px;
}
#slick .slick-next:before { 
  display:none !important;
}
#slick .slick-prev:before { 
  display:none !important;
}
#slick .slick-slide  {
  opacity:0.4;
 }
#slick .slick-center {
  opacity:1;
}
.paragraph3 h2{
  font-size: 18px;
  text-align: center;
}
.paragraph3 p{
  text-align: center;
  margin-top:20px;
}
.slick-center{
  cursor: pointer;
}

/*override slick-css*/
.slick-slide{
  height: auto;
  margin-bottom: 30px;  
}  


/* recommended css code for vue-svgicon */
.vue-svg-icon {
  display: inline-block;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
} 

.vue-svg-fill {
  fill: currentColor;
  stroke: none;
}  

.svg-up {
  /* default */
  transform: rotate(0deg);
}

.svg-right {
  transform: rotate(90deg);
}

.svg-down {
  transform: rotate(180deg);
}

.svg-left {
  transform: rotate(-90deg);
}
</style>
