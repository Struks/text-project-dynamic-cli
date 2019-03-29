<template>
    <div class="popup-field">
        <div class="container">
            <article class="row single-post mt-5 no-gutters">
                <div class="col">
                    <div class="image-wrapper float-left pr-3">
                        <img 
                        :class="popupImage.class" 
                        :src="popupImage.src" 
                        :alt="popupImage.alt" 
                        :data-toggle="popupImage.dataToggle"
                        :data-target="popupImage.dataTarget"
                        @click="setupVideo"
                        >
            <!-- modal--><div class="modal fade" id="modal" tabidenex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body mb-0 p-0">
                                        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                            <iframe v-if="downloadVideo" id="codingVideo" :src="popup.iframeSrc" allowfullscreen allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <span class="mr-4">{{popup.footerText}}</span>
                                        <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal" aria-hidden="true">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div> <!--/modal -->
                    </div>
                    <div class="single-post-content-wrapper ">
                        <h2>{{text.title}}</h2>
                        <p v-html="text.content"></p> 
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>


<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters([
            'popupImage',
            'popup',
            'text',
            'downloadVideo'
        ])
    },
    methods:{
        ...mapMutations([
            'setupVideo'
        ])
    }
}
</script>


<style scoped>
    .popup-field{
        background: #efefef
    }
    article{
        padding: 40px 0px 30px 0px;
    }
    .image-wrapper img{
        cursor: pointer;
        margin: 0px 15px 10px 0px;
    }
    .image-wrapper img:hover{
        opacity: .8;
    }
</style>
