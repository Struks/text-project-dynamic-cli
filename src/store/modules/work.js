const state = {
    
  images: [
      {
        id: 1,
        src: "/img/zirafa.png",
        alt: "zirafa",
        category: "photography",
        title:'Plasticine graphic',
        text:'Creative Market is the world’s marketplace for design. Bring your creative projects to life with ready-to-use design assets from independent creators around the world.'
      },
      {
        id: 2,
        src: "/img/mid.png",
        alt: "applications",
        category: "applications",
        title:'Web form',
        text:"If you're searching for a simple, smart web form tool, you're in the right place! 123FormBuilder helps you create any type of online forms & surveys without coding skills."
      },
      {
        id: 3,
        src: "/img/left2.png",
        alt: "love",
        category: "photography",
        title:'Capture pictures',
        text:"Before the days of smartphones -- if you can remember such a time -- taking a great photo was a labor-intensive process. You'd have buy a fancy camera and editing software for your desktop computer, and invest some serious time and energy into learning how to use them."
      },
      {
        id: 4,
        src: "/img/left1.png",
        alt: "smile",
        category: "print",
        title:'Emotion Icons',
        text:'Emotion icons, also known as emoticons, are a major part of the Internet and can be found especially in the chat, instant messaging, social media and e-mail interactions. These emotion icons are used to transmit emotions which cannot be put into words.'
      },
      {
        id: 5,
        src: "/img/Right2.png",
        alt: "media",
        category: "web",
        title:'Social media',
        text:'Social media is computer-based technology that facilitates the sharing of ideas, thoughts, and information through the building of virtual networks and communities. By design, social media is internet-based and gives users quick electronic communication of content. '
      },
      {
        id: 6,
        src: "/img/right1.png",
        alt: "words",
        category: "print",
        title:'Words',
        text:'Type in the letters you want and our word finder will show you all the possible words you can make from the letters in your hand, or find words you can play later. The Word Finder word search unscrambles your letters, searches our Scrabble dictionary for words that win, and gives them to you sorted by word length and point value.'
      },
      {
        id: 7,
        src: "/img/pingvininaocari.png",
        alt: "pingvin",
        category: "web",
        title:'Cartoons',
        text:'Cartoonists use several methods, or techniques, to get their point across. Not every cartoon includes all of these techniques, but most political cartoons include at least a few. Some of the techniques cartoonists use the most are symbolism, exaggeration, labeling, analogy, and irony.'
      },
      {
        id: 8,
        src: "/img/gun.png",
        alt: "gun",
        category: "print",
        title:'Firearm',
        text:'A firearm is a portable gun (a barreled ranged weapon) that inflicts damage on targets by launching one or more projectiles driven by rapidly expanding high-pressure gas produced chemically by exothermic combustion (deflagration) of propellant within an ammunition cartridge.[1][2][3] If gas pressurization is achieved through mechanical gas compression rather than through chemical propellant combustion, then the gun is technically an air gun, not a firearm.'
      },
      {
        id: 9,
        src: "/img/band.png",
        alt: "band",
        category: "photography",
        title:'Criminal Mind',
        text:'Criminal Minds is an American police procedural crime drama television series created and produced by Jeff Davis.'
      },
      {
        id: 10,
        src: "/img/frame.png",
        alt: "frame",
        category: "print",
        title:'Picture Frame',
        text:'Fine art quality printing on paper or canvas, radiant prints on acrylic or metal and earthy and elegant prints on wood.'
      },
      {
        id: 11,
        src: "/img/light.png",
        alt: "light",
        category: "photography",
        title:'Light On Picture',
        text:'Light is a type of energy. It is a form of electromagnetic radiation of a wavelength which can be detected by the human eye.'
      },
      {
        id: 12,
        src: "/img/dice.png",
        alt: "dice",
        category: "applications",
        title:'Dice Games',
        text:'Dice games are fun! They are also one of the oldest of all kinds of games: there are records of dice being played over 5,000 years ago! Dice have been found in Egyptian tombs and were very popular in Roman times.'
      },
      {
        id: 13,
        src: "/img/superMario.png",
        alt: "superMario",
        category: "applications",
        title:'Super Mario',
        text:'The critics have spoken! Super Smash Bros. Ultimate is getting rave reviews. Play Super Smash Bros. Ultimate anytime, anywhere, only on the Nintendo Switch system.'
      },
      {
        id: 14,
        src: "/img/eye.png",
        alt: "eye",
        category: "web",
        title:'Eyes',
        text:'Just behind the iris and pupil lies the lens, which helps focus light on the back of your eye. Most of the eye is filled with a clear gel called the vitreous.'
      },
      {
        id: 15,
        src: "/img/pinguin.png",
        alt: "pinguin",
        category: "web",
        title:'Linux',
        text:'Linux (/ˈlɪnəks/ (About this soundlisten) LIN-əks)[9][10] is a family of free and open-source software operating systems based on the Linux kernel,[11] an operating system kernel first released on September 17, 1991 by Linus Torvalds.[12][13][14] Linux is typically packaged in a Linux distribution (or distro for short).'
      },
      
    ],
    //categories
    inputs:[
      {
        value:'all',
        checked:true,
        text:'ALL'
      },
      {
        value:'print',
        checked:false,
        text:'PRINT'
      },
      {
        value:'photography',
        checked:false,
        text:'PHOTOGRAPHY'
      },
      {
        value:'web',
        checked:false,
        text:'WEB'
      },
      {
        value:'applications',
        checked:false,
        text:'APPLICATIONS'
      },
      
    ],
    selectedCategory: "all",
    activeCategory: 'all',
    activeView: 'grid',
    imagesToShow: 3,
          
}

const getters = {
  images: state => state.images,
  imagesToShow: state => state.imagesToShow,
  inputs: state => state.inputs,
  activeCategory: state => state.activeCategory,
  activeView: state => state.activeView,
  selectedCategory: state => state.selectedCategory, 
  filteredImages: state =>{
  let category = state.selectedCategory;
  let result = [];
  if(category !== 'all'){
      result = state.images.filter(image =>{
      return image.category === category;
      });
  }
  else{
      result = state.images;
  }
  return result;
  }
}

const mutations = {
  //work
changeCategory:(state,category)=>{
    state.selectedCategory = category;
},
active:(state,activ) => state.activeCategory = activ ,

switchToGrid:(state,view)=>{
    let portfolioClass = document.getElementById('portfolio').classList;
    if(portfolioClass.contains('list-layout')){
    portfolioClass.remove('list-layout');
    portfolioClass.add('grid-layout')
    }
    state.activeView = view;
},
switchToList:(state,view) => {
    let portfolioClass = document.getElementById('portfolio').classList;
    if(portfolioClass.contains('grid-layout')){
    portfolioClass.remove('grid-layout');
    portfolioClass.add('list-layout')
    }
    return state.activeView = view
},
//onload
loadMore:(state) => {
  state.imagesToShow *= 3
}
}

const actions = {
  loadMore: context =>{
    const loader = document.getElementById('loader');
    let button = document.querySelector('.btn');
    button.style.display='none';
    loader.style.display='block';
    setTimeout(()=>{
      context.commit('loadMore')
      button.style.display='block';
      loader.style.display='none';
    },1500)
    
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}