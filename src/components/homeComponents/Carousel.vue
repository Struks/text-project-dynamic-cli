<template>
  <div class>
    <div class="container">
      <div class="m-md-4 text-center">
        <h2 class="pt-md-3">{{beforeSlide.title}}</h2>
        <p class="pt-md-2">{{beforeSlide.content}}</p>
      </div>
    </div>
    <!-- carousel images -->
    <slick class="slick-images" id="slick" ref="slick" :options="slickOptions">
      <img
        v-for="image in caoruselImages"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
        width="300"
        height="200"
      >
    </slick>
    <!-- carousel text -->
    <div class="container">
      <div class="inline-arrows row">
        <button type="button" class="prev-slide col-md-1 offset-md-2 d-none d-md-block" @click="prev()">
          <svgicon name="prevvv"
            width="21"
            height="31"
            id='prev'      
            ></svgicon>
        </button>
        <div class="col col-md-7">
          <slick class="slick-paragraphs" id="slick2" ref="slick2" :options="slickOptions2">
            <div
              v-for="text in caoruselImages"
              :key="text.id"
              class="slide-text text-center offset-2 col-8 paragraph3 carousel-text"
            >
              <h2>{{text.title}}</h2>
              <p>{{text.content}}</p>
            </div>
          </slick>
        </div>
        <button type="button" class="next-slide col-md-1 d-none d-md-block" @click="next()">
          <svgicon 
            name='nextttt' 
            id="next"
            width="21"
            height="31"
            :fill='true' 
          ></svgicon>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import Slick from "vue-slick";
import '@/assets/icons'
export default {
  components: { Slick },
  data() {
    return {
      beforeSlide: {
        title: "A couple of our featured projects",
        content:
          "The changes may be automatic and at regular intervals or they may be manually controlled by a presenter or the viewer. Slide shows originally consisted of a series of individual photographic slides projected onto a screen with a slide projector."
      },
      caoruselImages: [
        {
          src: "/img/mid.png",
          alt: "form",
          title: "Form",
          content:
            "Buttons, CheckBox, RadioButton, Bolean flag, etc; all in the form are important."
        },
        {
          src: "/img/Right2.png",
          alt: "media",
          title: "Media",
          content:
            "Informations is good, informations is bad. Your choose is what you read."
        },
        {
          src: "static/img/right1.png",
          alt: "words",
          title: "Words",
          content:
            "Words create sentences. Sentences create paragraph. Parahraph create book. Books create life."
        },
        {
          src: "/img/left1.png",
          alt: "smile",
          title: "Smile",
          content:
            "When would all people enjoy in the smile the world would be beautiful place."
        },
        {
          src: "/img/left2.png",
          alt: "love",
          title: "Love",
          content: "Love is greater that all pharaohs and pyramids."
        },
        {
          src: "/img/gun.png",
          alt: "gun",
          title: "War",
          content: "Make love, not warCRAFT."
        },
        {
          src: "/img/band.png",
          alt: "band",
          title: "Crimy",
          content:
            "Criminal Minds is an American police procedural crime drama television series created and produced by Jeff Davis."
        }
      ],
      slickOptions: {
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 7,
        arrows: false,
        asNavFor: ".slick-paragraphs",
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1058,
            settings: {
              slidesToShow: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "30px"
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "30px"
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "30px"
            }
          }
        ]
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slick-images",
        responsive: [
          {
            breakpoint: 540,
            settings: {
              arrows: false
            }
          }
        ]
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>


<style scoped>
h2 {
  text-transform: uppercase;
}
.slide-text h2 {
  font-size: 18px;
}
.slide-text p {
  font-size: 14px;
}
.slick-images {
  padding: 20px 0px 15px 0px;
}
@media(max-width: 425px){
    .slick-images{
        padding-bottom: 0px;
    }
    .slide-text{
        margin-left: 0px;
        max-width: 100%;
    }
}
button {
  max-width: 16px;
  border: 0;
  background: none;
  cursor: pointer;
  outline:none;
  margin-bottom: 78px; 
  margin-top: 30px;
  color:#efefef
}
button:hover #next,
button:hover #prev{
  color: #2ecc71;
  transition: 100ms;
  transition-timing-function: ease-out;
}

</style>


