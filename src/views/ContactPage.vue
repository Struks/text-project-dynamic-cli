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
import ContactForm from '../components/contactComponents/ContactForm.vue';
import ContactInfo from '../components/contactComponents/ContactInfo.vue';
export default {
    components:{
        'hero-banner': Banner,
        'contact-form': ContactForm,
        'contact-info': ContactInfo,
    },
    data(){
        return{
           headline:'got a question or inquiry?',
           googleShot:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.788937247671!2d-82.35576789251799!3d23.14456388617537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79b20a46e4f9%3A0xe0f0dc692e6d4ad5!2sMaximo+Gomez+Monument!5e0!3m2!1sen!2s!4v1550843672057'
        }
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


