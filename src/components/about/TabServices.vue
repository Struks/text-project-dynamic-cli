<template>
    <div>
        <div class="d-none d-md-block">
            <div class="tab-links-field mb-4">
                <div class="container">
                    <ul class="tab-links nav nav-pills" id="myTab" role="tablist">
                        <li v-for="(tab,index) in Tabs" :key="index" class="nav-item col-xs-12 col-md-6 col-lg-3">
                            <a :class="'website-link nav-link ' + tab.activeTab" :id="tab.id" data-toggle="tab" :href="'#' + tab.link" role="tab" 
                                :aria-controls="tab.link" :aria-selected="tab.selected">
                                <svgicon
                                    :name='tab.Sname'
                                    :width='tab.width'
                                    :height='tab.height'
                                    :id='tab.ids'    
                                ></svgicon>
                                <br/>
                                <div class="text">{{tab.name}}</div>
                            </a>
                        </li>
                    </ul>  
                </div>     
            </div>  
            <div class="container">
                <div class="tab-label tab-content m-1 " id="myTabContent">
                    <div v-for="(tab,index) in Tabs" :key="index" :class="'tab-pane fade ' + tab.showText" :id='tab.link' 
                        role="tabpanel" :aria-labelleby="tab.id">
                        <p v-html="tab.template"></p>
                    </div>
                </div>
            </div>  
        </div>
        <dropdown></dropdown>
    </div>   
</template>


<script>
//images

//components
import Dropdown from './DropdownTabs.vue'
import '@/assets/icons'
export default {
    components:{
        'dropdown':Dropdown,
    },
    data(){
        return{

        }
    },
    computed:{
        Tabs(){ return this.$store.getters.Tabs},
    },
    methods:{
    }
}
</script>


<style scoped>
    .tab-links-field{
        background: #efefef;
    }
    a{
        padding: 53px;
        margin-left: 0px;
        font-family: 'Novecentosan', Arial, sans-serif;
        font-size: 18px;
        color: #bcbcbc;
    }
    a svg{
        color: #737373;
    }
    #websites-tab{
        text-align: center;
    }
    #photography-tab,#application-tab{
        padding-top: 55px; 
        text-align: center;    
    }   
    #SEO-tab{
        padding: 59px; 
        text-align: center;
    }
    .nav-link.active{
        color: #423e3e;
        background: #dadada;
        border-radius: 0px;
    }
    .tab-pane{
       height: 163px;
    }
    li{
        padding: 0px;
    }
    #websites-tab .text,
    #SEO-tab .text,
    #application-tab .text,
    #photography-tab .text{
        padding-top: 20px;
    }
    #application-tab .text{
        padding-top: 33px;
    }
    a:focus  #Websites,
    a:focus  #Photography,
    a:focus  #Seo,
    a:focus  #Applications{
        color: #423e3e;    
        transition: 100ms;
        animation-timing-function: ease-out;
    }   
</style>


