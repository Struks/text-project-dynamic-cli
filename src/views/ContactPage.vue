<template>
    <div>
        <hero-banner v-bind:headline="headline"></hero-banner>
        <div class="google-map">
            <iframe :src='googleShot' width="100%" height="500" frameborder="0" style="border:0"></iframe>
        </div>
        <div class="container contact-form-info">
            <contact-form></contact-form>
            <contact-info></contact-info>
        </div>
    </div>
</template>

<script>
import Banner from '../components/banner/Banner.vue';
import ContactForm from '../components/contact/ContactForm.vue';
import ContactInfo from '../components/contact/ContactInfo.vue';
export default {
    components:{
        'hero-banner': Banner,
        'contact-form': ContactForm,
        'contact-info': ContactInfo,
    },
    data(){
        return{
            headline:'got a question or inquiry?',
        }
    },
    computed:{
        googleShot(){ return this.$store.getters.googleShot }
    }
    
}
</script>

<style scoped>
    .google-map{
        max-width: 100%;
        widows: 100%;
    }
    .contact-form-info{
        display: grid;
        grid-template-columns: 60% 40%;
        margin-bottom: 240px;
        
    }
    @media(max-width: 768px){
        .contact-form-info{
            margin-bottom: 200px; 
        }
    }
    @media(max-width: 425px){
        .contact-form-info{
            grid-template-columns: 100%;
            margin-bottom: 130px;
        }
        
    }
</style>


