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
                        @click="downloadVideo = true"
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
                    <div class="single-post-content-wrapper">
                        <h2>{{text.title}}</h2>
                        <p v-html="text.content"></p> 
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            popupImage:{
                src:"/img/popup.svg",
                alt:"popup-video",
                dataToggle:"modal",
                dataTarget:"#modal",
                class:"img-popup img-fluid"
            },
            popup:{         
                iframeSrc:"https://www.youtube-nocookie.com/embed/l9nh1l8ZIJQ?autoplay=1",
                footerText:'Enjoy the vibrations of life',      
            },
            text:{
                title:'GET TO KNOW US A LITTLE BETTER',
                content:`
                    <p><b>Computer science</b> is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation and the practice of designing software systems.</p>
                    <p>Programming language theory considers approaches to the description of computational processes, while computer programming itself involves the use of programming languages and complex systems.</p>
                    <p>P.S. Enjoy in good vibe.</p>
                `
            },
            downloadVideo:false,
        }
    },
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
