<template>
   <div class="margin-bottom">
        <hero-banner v-bind:headline="headline"></hero-banner>
        <about-us v-bind:image="image" :text1="text1" :text2="text2"></about-us>
        <div class="container">
            <div class="row row-space pt-md-5">
                <div class="col-12 col-md-6 mr-3">
                    <h2>{{mission.statement}}</h2>
                    <p>{{mission.explanation}}</p>
                </div>
                <div class="col-12 col-md-5 pl-md-1 ">
                    <h2>{{fun.facts}}</h2>
                    <p>{{fun.explanation}}</p>
                </div>
            </div>
            <h2 class="mt-4 mb-4">SERVICES</h2>
        </div>
        <tab-services></tab-services>
    </div>
</template>

<script>

import Banner from '../components/banner/Banner.vue';
import AboutUs from '../components/about/AboutUs.vue';
import TabServices from '../components/about/TabServices.vue';
import {mapGetters} from 'vuex';

export default {
    components:{
        'hero-banner': Banner,
        'about-us': AboutUs,
        'tab-services': TabServices,
    },
    data(){
        return{
            // headline:'about my business',
            // image:{
            //    src: '/img/aboutUs.svg',
            //    alt:'about us'
            // },  
            // text1:'Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content.',
            // text2:'So how do you balance your remarkable content creation with your web design needs? It all starts with the "About Us" page. Building a website is a great way to share your ideas and thoughts with the world. But if you\'ve never done one, it can seem daunting. There\'s all that http-dot-whatever and how do you get pictures and text in there? Well fear not, this article will help you to grasp the intricacies very quickly!',
            // mission:{
            //     statement:'MISSION STATEMENT',
            //     explanation:'An organization’s mission statement should clearly communicate what it is that they do. Many mission statements succumb to an overuse of words in general, but especially jargon. Good mission statements should be clear, concise, and useful. Some might also add “inspiring” to the list of descriptors. We don’t altogether disagree, but we find that including this as an upfront criteria often ends up with a Frankenstein that is a part mission, part vision statement (desired end-state), and almost always too long.',
            // },
            // fun:{
            //     facts:'FUN FACTS',
            //     explanation:'The world is a pretty strange place; things often don’t happen according to plan, and weird coincidences are generally the norm. With this in mind, it’s not surprising that there would be unexpected facts about everything from pencils, to history, to science, and everything in between. The following 155 facts have been handpicked to educate and amuse; read on to find out more about this amazing world and the people that inhabit it.',
            // },
            
        }
    },
    computed:{
        ...mapGetters([
            //about us
            'headline',
            'image',
            'text1',
            'text2',
            'mission',
            'fun',,
        ])
    }
    
}
</script>

<style scoped>
.row-space p{
    padding-top: 10px;
}
.margin-bottom{
    margin-bottom: 240px;
}
@media(max-width: 425px){
    .margin-bottom{
        margin-bottom: 150px;
    }
}
</style>


