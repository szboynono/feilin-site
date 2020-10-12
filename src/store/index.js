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
          url: require("../assets/images/mattamy/poster.png"),
          alt: 'mattamy-work-4'
        },
        {
          url: require("../assets/images/mattamy/card.png"),
          alt: 'mattamy-work-5'
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
        url: require("../assets/images/mattamy/logo-2.png"),
        alt: 'mattamy1'
      },
      workImgs: [
        {
          url: require("../assets/images/mattamy/logo-2.png"),
          alt: 'mattamy2'
        },
        {
          url: require("../assets/images/mattamy/logo-collection.png"),
          alt: 'mattamy3'
        },
        {
          url: require("../assets/images/mattamy/poster.png"),
          alt: 'mattamy4'
        },
        {
          url: require("../assets/images/mattamy/website-1.png"),
          alt: 'mattamy5'
        },
        {
          url: require("../assets/images/mattamy/website-2.png"),
          alt: 'mattamy6'
        }
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