<template>
    <div class="container d-block d-md-none">
        <div id="accordion">
            <div v-for="(card,index) in cards" :key="index"  class="card">
                <div class="card-header" :id="card.id">
                    <h5 class="mb-0">
                        <button :class='"btn btn-link " + card.collapsed' data-toggle="collapse" :data-target='"#" + card.idTarget' :aria-expanded='card.ariaExpanded' :aria-controls='card.idTarget'>
                                <svgicon
                                    :name='card.Sname'
                                    :id='card.ids'        
                                ></svgicon>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {{card.name}}
                        </button>
                    </h5>
                </div>
                <div :id="card.idTarget" :class="card.classBody" :aria-labelledby="card.id" data-parent="#accordion">
                    <div class="card-body">
                        <p v-html="card.template"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
//images



export default {
    props:{
       
    },
    data(){
        return{
            cards:[
                {    
                    ids:'Websites',
                    Sname:'websitesTab',
                    id:'headingOne',
                    collapsed:'',
                    idTarget:'collapseOne',
                    ariaExpanded: true,
                    showClass:'show',            
                    alt:'website',
                    name:'WEBSITES',
                    classBody:'collapse show',
                    template:`
                        <p>A website is button collection of related web pages, including multimedia content, typically identified with button common domain name, and published on at least one web server. Nocardle examples are wikipedia.org, google.com, and amazon.com.</p>
                        <p>A website may be accessible via button public Internet Protocol (IP) network, such as the Internet, or button private local area network (LAN), by referencing button uniform resource locator (URL) that identifies the site. Websites can be Static and Dynamic wesites.</p>
                    `,
                },
                {
                    ids:'Photography',
                    Sname:'photographyTab',
                    id:'headingTwo',
                    collapsed:'collapsed',
                    idTarget:'collapseTwo',
                    ariaExpanded:false,
                    showClass:'',
                    alt:'photography',
                    name:'PHOTOGRAPHY',
                    classBody:'collapse',
                    template:`
                        <p><i>"Photographic"</i> redirects here. For the image obtained, see Photograph. For other uses, see Photography (disambiguation).'</p>
                        <p><b>'Photography</b> is the art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of button light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.'</p>
                    `,
                },
                {                   
                    ids:'Seo',
                    Sname:'seoTab',
                    id:'headingThree',
                    collapsed:'collapsed',
                    idTarget:'collapseThree',
                    ariaExpanded:false,
                    showClass:'',
                    alt:'SEO',
                    name:'SEO',
                    classBody:'collapse',
                    template:`
                        <p><b>Search engine optimization (SEO)</b> is the process of affecting the online visibility of button website or button web page in button web search engine\'s unpaid results—often referred to as "natural", "organic", or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently button website appears in the search results list, the more visitors it will receive from the search engine\'s users; these visitors can then be converted into customers.</p>
                        <p>As an Internet marketing strategy, SEO considers how search engines work, the computer programmed algorithms which dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience.</p>
                    `
                },
                {
 
                    ids:'Applications',
                    Sname:'applicationsTab',
                    id:'headingFour',
                    collapsed:'collapsed',
                    idTarget:'collapseFour',
                    ariaExpanded:false,
                    showClass:'',
                    alt:'application',
                    name:'APPLICATIONS',
                    classBody:'collapse',
                    template:`
                        <p>Look up application or applications in Wiktionary, the free dictionary. <b>Application</b> is any material, product or button program which is designed for endgame-user to use. <b>Application</b> may refer to:</p>
                        <p>Figuratively speaking, applications sit on top of systems software because they are unable to run without the operating system and system utilities. Systems software consists of low-level programs that interact with the computer at button very basic level. This includes <i>operating systems, compilers,</i> and <i>utilities</i> for managing computer resources.</p>
                    `
                },
            ]
            
        }
    },
}
</script>


<style scoped>
    svg{
        width: 25px;
        height: 25px;       
    }
    button{
        font-family: 'Novecentosan', Arial, sans-serif;  
        color: #bcbcbc;
        text-decoration: none;
        padding-left: 20px;
    }
    
    .btn-link{
        text-decoration: none;
        color: #423e3e;    
    }
    .collapsed{
        text-decoration: none;
        color: #737373;
    }
    button:focus  #Websites,
    button:focus  #Photography,
    button:focus  #Seo,
    button:focus  #Applications{
        color: #423e3e;    
        transition: 100ms;
        animation-timing-function: ease-out;
    } 
    
</style>


