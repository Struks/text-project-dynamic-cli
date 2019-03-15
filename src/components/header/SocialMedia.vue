<template>
  <div class="social-media d-none d-md-block">
    <a v-for="(media,index) in socialMedia" :key="index" :href="media.href" target="_blank">
      <svgicon 
        :name="media.name" 
        width="35" 
        height="35"
        :class="media.class"
        ></svgicon>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Array,
      required: true
    },
    xmlns: { type: String }
  }
};
</script>


<style scoped>

.social-media a {
  padding-right: 7px;
}
a svg{
  color: #dadada;
}
.twitter:hover{
  color: #00aced;
}
.facebook:hover{
  color: #3b5998;
}
.rss:hover{
  color: #e79411;
}
.pinterest:hover{
  color: #bd081c;
}
.google:hover{ 
  color: #ea6558;
}
.dribbble:hover{ 
  color: #ea4c89;
}
</style>


