const state = {
  //banner
  devices: { 
      src:"/img/devices.svg", 
      alt:"devices", 
      class:"devices img-fluid" 
  },
  paraph:{
      text:'A peripheral is a “device that is used to put information into or get information out of the computer”.',
      class:'text-uppercase font-weight-bold'
  },

  //popup video
  popupImage:{
      src:"/img/popup.svg",
      alt:"popup-video",
      dataToggle:"modal",
      dataTarget:"#modal",
      class:"img-popup img-fluid"
  },
  popup:{         
      iframeSrc:"https://www.youtube-nocookie.com/embed/l9nh1l8ZIJQ?autoplay=1",
      footerText:'Enjoy the vibrations of life',      
  },
  text:{
      title:'GET TO KNOW US A LITTLE BETTER',
      content:`
          <p><b>Computer science</b> is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation and the practice of designing software systems.</p>
          <p>Programming language theory considers approaches to the description of computational processes, while computer programming itself involves the use of programming languages and complex systems.</p>
          <p>P.S. Enjoy in good vibe.</p>
      `
  },
  downloadVideo:false,

  //carousel
  beforeSlide: {
    title: "A couple of our featured projects",
    content: "The changes may be automatic and at regular intervals or they may be manually controlled by a presenter or the viewer. Slide shows originally consisted of a series of individual photographic slides projected onto a screen with a slide projector."
  },
  caoruselImages: [
    {
      src: "/img/mid.png",
      alt: "form",
      title: "Form",
      content: "Buttons, CheckBox, RadioButton, Bolean flag, etc; all in the form are important."
    },
    {
      src: "/img/Right2.png",
      alt: "media",
      title: "Media",
      content: "Informations is good, informations is bad. Your choose is what you read."
    },
    {
      src: "/img/right1.png",
      alt: "words",
      title: "Words",
      content: "Words create sentences. Sentences create paragraph. Parahraph create book. Books create life."
    },
    {
      src: "/img/left1.png",
      alt: "smile",
      title: "Smile",
      content: "When would all people enjoy in the smile the world would be beautiful place."
    },
    {
      src: "/img/left2.png",
      alt: "love",
      title: "Love",
      content: "Love is greater that all pharaohs and pyramids."
    },
    {
      src: "/img/gun.png",
      alt: "gun",
      title: "War",
      content: "Make love, not warCRAFT."
    },
    {
      src: "/img/band.png",
      alt: "band",
      title: "Crimy",
      content: "Criminal Minds is an American police procedural crime drama television series created and produced by Jeff Davis."
    }
  ],
  slickOptions: {
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 7,
    arrows: false,
    asNavFor: ".slick-paragraphs",
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1058,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "30px"
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "30px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "30px"
        }
      }
    ]
  },
  slickOptions2: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slick-images",
    responsive: [
      {
        breakpoint: 540,
        settings: {
          arrows: false
        }
      }
    ]
  }
}

const getters = {
  //banner
  devices: state => state.devices,
  paraph: state => state.paraph,
  //popup video
  popupImage: state => state.popupImage,
  popup: state => state.popup,
  text: state => state.text,
  downloadVideo: state => state.downloadVideo,
  //carousel
  beforeSlide: state => state.beforeSlide,
  caoruselImages: state => state.caoruselImages,
  slickOptions: state => state. slickOptions,
  slickOptions2: state => state.slickOptions2
}

const mutations = {
  //popup
  setupVideo: (state,downloadVideo) => state.downloadVideo = downloadVideo,   
}


export default{
  state,
  getters,
  mutations
}