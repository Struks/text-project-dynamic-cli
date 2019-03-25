const state ={
        socialMedia: [
          {
            href: "http://www.twitter.com",
            name: "twitter",
            class: "twitter",
          },
          {
            href: "http://www.facebook.com",
            name: "facebook",
            class:'facebook'
          },
          {
            href: "http://www.rss.com",
            name: "rss",
            class: "rss"
          },
          {
            href: "http://www.pinterest.com",
            name: "pinterest",
            class: "pinterest",
          },
          {
            href: "https://plus.google.com",
            name: "google+",
            class: "google"
          },
          {
            href: "http://www.dribbble.com",
            name: "tribbble",
            class: "dribbble",
          }
        ]
      }
    const getters = {  
      socialMedia:state => state.socialMedia 
    }
    const mutations = {
    }
  export default{
    state,
    getters,
    mutations
  }