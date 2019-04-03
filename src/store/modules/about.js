const state = {
    //about us
    headline:'about my business',
    image:{
        src: '/img/aboutUs.svg',
        alt:'about us'
    },  
    text1:'Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content.',
    text2:'So how do you balance your remarkable content creation with your web design needs? It all starts with the "About Us" page. Building a website is a great way to share your ideas and thoughts with the world. But if you\'ve never done one, it can seem daunting. There\'s all that http-dot-whatever and how do you get pictures and text in there? Well fear not, this article will help you to grasp the intricacies very quickly!',
    mission:{
        statement:'MISSION STATEMENT',
        explanation:'An organization’s mission statement should clearly communicate what it is that they do. Many mission statements succumb to an overuse of words in general, but especially jargon. Good mission statements should be clear, concise, and useful. Some might also add “inspiring” to the list of descriptors. We don’t altogether disagree, but we find that including this as an upfront criteria often ends up with a Frankenstein that is a part mission, part vision statement (desired end-state), and almost always too long.',
    },
    fun:{
        facts:'FUN FACTS',
        explanation:'The world is a pretty strange place; things often don’t happen according to plan, and weird coincidences are generally the norm. With this in mind, it’s not surprising that there would be unexpected facts about everything from pencils, to history, to science, and everything in between. The following 155 facts have been handpicked to educate and amuse; read on to find out more about this amazing world and the people that inhabit it.',
    },
    
    //tab services
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
                <p><b>Search engine optimization (SEO)</b> is the process of affecting the online visibility of a website or a web page in a web search engine/'s unpaid results—often referred to as "natural", "organic", or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently a website appears in the search results list, the more visitors it will receive from the search engine/'s users; these visitors can then be converted into customers.</p>
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

    //dropdown
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
                <p><b>Search engine optimization (SEO)</b> is the process of affecting the online visibility of button website or button web page in button web search engine/'s unpaid results—often referred to as "natural", "organic", or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently button website appears in the search results list, the more visitors it will receive from the search engine's users; these visitors can then be converted into customers.</p>
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

const getters = {
    //about us
    headline: state => state.headline,
    image: state => state.image,
    text1: state => state.text1,
    text2: state => state.text2,
    mission: state => state.mission,
    fun: state => state.fun,

    //tab services
    Tabs: state => state.Tabs,

    //dropdown
    cards: state => state.cards
}

const mutations = {

}

export default{
    state,
    getters,
    mutations
}