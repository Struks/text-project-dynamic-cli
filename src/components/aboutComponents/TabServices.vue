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
            Tabs:[
                {
                    ids:'Websites',
                    width:'50',
                    height:'58',
                    Sname:'websitesTab',
                    name:'WEBSITES',
                    id:'websites-tab',          
                    link:'websites',
                    selected:true,
                    activeTab:'active',
                    showText:'show active',
                    template:`
                        <p>A website is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com.</p>
                        <p>A website may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site. Websites can be Static and Dynamic wesites.</p>
                    `,
                },
                { 
                    ids:'Photography',
                    width:'50',
                    height:'58',
                    Sname:'photographyTab',
                    name:'PHOTOGRAPHY',
                    id:'photography-tab',          
                    link:'photography',
                    selected:false,
                    activeTab:'',
                    showText:'',
                    template:`
                        <p><i>"Photographic"</i> redirects here. For the image obtained, see Photograph. For other uses, see Photography (disambiguation).'</p>
                        <p><b>'Photography</b> is the art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.'</p>
                    `,
                },
                {

                    ids:'Seo',
                    width:'45.031',
                    height:'45.969',
                    Sname:'seoTab',
                    name:'SEO',
                    id:'SEO-tab',          
                    link:'SEO',
                    selected:false,
                    activeTab:'',
                    showText:'',
                    template:`
                        <p><b>Search engine optimization (SEO)</b> is the process of affecting the online visibility of a website or a web page in a web search engine\'s unpaid results—often referred to as "natural", "organic", or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently a website appears in the search results list, the more visitors it will receive from the search engine\'s users; these visitors can then be converted into customers.</p>
                        <p>As an Internet marketing strategy, SEO considers how search engines work, the computer programmed algorithms which dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience.</p>
                    `
                },
                {

                    ids:'Applications',
                    width:'50',
                    height:'43',
                    Sname:'applicationsTab',
                    name:'APPLICATIONS',
                    id:'application-tab',          
                    link:'application',
                    selected:false,
                    activeTab:'',
                    showText:'',
                    template:`
                        <p>Look up application or applications in Wiktionary, the free dictionary. <b>Application</b> is any material, product or a program which is designed for endgame-user to use. <b>Application</b> may refer to:</p>
                        <p>Figuratively speaking, applications sit on top of systems software because they are unable to run without the operating system and system utilities. Systems software consists of low-level programs that interact with the computer at a very basic level. This includes <i>operating systems, compilers,</i> and <i>utilities</i> for managing computer resources.</p>
                    `
                },     
            ],
        }
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


