import { createStore } from 'vuex'

const state = {
  works: [
    {
      id: "1",
      homeImg: {
        url: require("../assets/images/mattamy/logo-1.png"),
        alt: 'mattamy1'
      },
      workImgs: [
        {
          url: require("../assets/images/mattamy/logo-1.png"),
          alt: 'mattamy-work-1'
        },
        {
          url: require("../assets/images/mattamy/logo-2.png"),
          alt: 'mattamy-work-2'
        },
        {
          url: require("../assets/images/mattamy/logo-collection.png"),
          alt: 'mattamy-work-3'
        },
        {
          url: require("../assets/images/mattamy/card.png"),
          alt: 'mattamy-work-5'
        },
        {
          url: require("../assets/images/mattamy/poster.png"),
          alt: 'mattamy-work-4'
        },
        {
          url: require("../assets/images/mattamy/business-card.png"),
          alt: 'mattamy-work-6'
        },
        {
          url: require("../assets/images/mattamy/website-1.png"),
          alt: 'mattamy-work-7'
        },
        {
          url: require("../assets/images/mattamy/website-2.png"),
          alt: 'mattamy-work-8'
        }
      ]
    },
    {
      id: "2",
      homeImg: {
        url: require("../assets/images/aurora/poster-6.png"),
        alt: 'aurora1'
      },
      workImgs: [
        {
          url: require("../assets/images/aurora/logo-1.png"),
          alt: 'aurora2'
        },
        {
          url: require("../assets/images/aurora/logo-2.gif"),
          alt: 'aurora3'
        },
        {
          url: require("../assets/images/aurora/logo-3.png"),
          alt: 'aurora4'
        },
        {
          url: require("../assets/images/aurora/logo-4.png"),
          alt: 'aurora5'
        },
        {
          url: require("../assets/images/aurora/business-card-5.png"),
          alt: 'aurora6'
        },
        {
          url: require("../assets/images/aurora/poster-6.png"),
          alt: 'aurora7'
        },
        {
          url: require("../assets/images/aurora/product-7.png"),
          alt: 'aurora8'
        },
        {
          url: require("../assets/images/aurora/pen-8.png"),
          alt: 'aurora9'
        }
      ]
    },
    {
      id: "3",
      homeImg: {
        url: require("../assets/images/mischief/1-logo.png"),
        alt: 'mischief1'
      },
      workImgs: [
        {
          url: require("../assets/images/mischief/1-logo.png"),
          alt: 'mischief2'
        },
        {
          url: require("../assets/images/mischief/2-card.png"),
          alt: 'mischief3'
        },
        {
          url: require("../assets/images/mischief/3-card.png"),
          alt: 'mischief4'
        },
        {
          url: require("../assets/images/mischief/4-stationary.png"),
          alt: 'mischief5'
        },
        {
          url: require("../assets/images/mischief/5-poster.png"),
          alt: 'mischief6'
        },
        {
          url: require("../assets/images/mischief/6-tape.png"),
          alt: 'mischief7'
        },
        {
          url: require("../assets/images/mischief/7-website.png"),
          alt: 'mischief8'
        },
      ]
    },
  ]
}

const getters = {
  works: state => state.works,
  work: state => id => state.works.find(work => work.id === id)
}

const store = createStore({
  state,
  getters
})

export default store