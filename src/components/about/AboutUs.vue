<template>
    <div class="container">
        <article class="row single-post mt-5 no-gutters">
            <div class="col">
                <div class="image-wrapper float-left pr-3">
                    <img :src="image.src" :alt="image.alt">
                </div>
                <div class="single-post-content-wrapper">
                    <p>{{text1}}</p>
                    <p>{{text2}}</p>
                </div>   
            </div>  
        </article>
    </div>
</template>


<script>

export default {
    props:{
        image:{
            type:Object,
            
        },
        text1:{
            type:String
        },
        text2:{
            type:String
        }
    }
}
</script>


<style scoped>
    @media(max-width: 425px){
        img{
            padding-bottom: 10px;
        }
    }
    @media(max-width: 375px){
        img{
            width: 340px;
        }
    }
    @media(max-width: 320px){
        img{
            width: 290px;
        }
    }
</style>


