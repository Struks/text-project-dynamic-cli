export default{
    state:{
        images: [
            {
              id: 1,
              src: "/img/zirafa.png",
              alt: "zirafa",
              category: "Photography",
              title:'Plasticine graphic',
              text:'Creative Market is the world’s marketplace for design. Bring your creative projects to life with ready-to-use design assets from independent creators around the world.'
            },
            {
              id: 2,
              src: "/img/mid.png",
              alt: "applications",
              category: "Applications",
              title:'Web form',
              text:"If you're searching for a simple, smart web form tool, you're in the right place! 123FormBuilder helps you create any type of online forms & surveys without coding skills."
            },
            {
              id: 3,
              src: "/img/left2.png",
              alt: "love",
              category: "Photography",
              title:'Capture pictures',
              text:"Before the days of smartphones -- if you can remember such a time -- taking a great photo was a labor-intensive process. You'd have buy a fancy camera and editing software for your desktop computer, and invest some serious time and energy into learning how to use them."
            },
            {
              id: 4,
              src: "/img/left1.png",
              alt: "smile",
              category: "Print",
              title:'Emotion Icons',
              text:'Emotion icons, also known as emoticons, are a major part of the Internet and can be found especially in the chat, instant messaging, social media and e-mail interactions. These emotion icons are used to transmit emotions which cannot be put into words.'
            },
            {
              id: 5,
              src: "/img/Right2.png",
              alt: "media",
              category: "Web",
              title:'Social media',
              text:'Social media is computer-based technology that facilitates the sharing of ideas, thoughts, and information through the building of virtual networks and communities. By design, social media is internet-based and gives users quick electronic communication of content. '
            },
            {
              id: 6,
              src: "/img/right1.png",
              alt: "words",
              category: "Print",
              title:'Words',
              text:'Type in the letters you want and our word finder will show you all the possible words you can make from the letters in your hand, or find words you can play later. The Word Finder word search unscrambles your letters, searches our Scrabble dictionary for words that win, and gives them to you sorted by word length and point value.'
            },
            {
              id: 7,
              src: "/img/pingvininaocari.png",
              alt: "pingvin",
              category: "Web",
              title:'Cartoons',
              text:'Cartoonists use several methods, or techniques, to get their point across. Not every cartoon includes all of these techniques, but most political cartoons include at least a few. Some of the techniques cartoonists use the most are symbolism, exaggeration, labeling, analogy, and irony.'
            },
            {
              id: 8,
              src: "/img/gun.png",
              alt: "gun",
              category: "Print",
              title:'Firearm',
              text:'A firearm is a portable gun (a barreled ranged weapon) that inflicts damage on targets by launching one or more projectiles driven by rapidly expanding high-pressure gas produced chemically by exothermic combustion (deflagration) of propellant within an ammunition cartridge.[1][2][3] If gas pressurization is achieved through mechanical gas compression rather than through chemical propellant combustion, then the gun is technically an air gun, not a firearm.'
            },
            {
              id: 9,
              src: "/img/band.png",
              alt: "band",
              category: "Photography",
              title:'Criminal Mind',
              text:'Criminal Minds is an American police procedural crime drama television series created and produced by Jeff Davis.'
            }
          ],
          selectedCategory: "All",
          activeCategory: 'all',
          activeView: 'grid',
                
    },

    getters:{
        //work
        activeCategory: state => state.activeCategory,
        activeView: state => state.activeView,
        selectedCategory: state => state.selectedCategory, 
        filteredImages: state =>{
        let category = state.selectedCategory;
        let result = [];
        if(category !== 'All'){
            result = state.images.filter(image =>{
            return image.category === category;
            });
        }
        else{
            result = state.images;
        }
        return result;
        }
    },

    mutations:{
         //work
        changeCategory:(state,category)=>{
            state.selectedCategory = category;
        },
        active:(state,activ)=>state.activeCategory = activ ,
        switchToGrid:(state,view)=>{
            let portfolioClass = document.getElementById('portfolio').classList;
            if(portfolioClass.contains('list-layout')){
            portfolioClass.remove('list-layout');
            portfolioClass.add('grid-layout')
            }
            state.activeView = view;
        },
        switchToList:function(state,view){
            let portfolioClass = document.getElementById('portfolio').classList;
            if(portfolioClass.contains('grid-layout')){
            portfolioClass.remove('grid-layout');
            portfolioClass.add('list-layout')
            }
            return state.activeView = view
        },
    }

}