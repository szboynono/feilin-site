import { createStore } from 'vuex'

const state = {
  works: [
    {
      id: "1",
      disable: false,
      homeImg: {
        url: require("../assets/images/keewatin/Keewatin_6_Cover.jpg"),
        alt: 'keewatin'
      },
      workImgs: [
        {
          url: require("../assets/images/keewatin/Keewatin_1.jpg"),
          alt: 'keewatin-work-1'
        },
        {
          url: require("../assets/images/keewatin/Keewatin_2.jpg"),
          alt: 'keewatin-work-2'
        },
        {
          url: require("../assets/images/keewatin/Keewatin_3.jpg"),
          alt: 'keewatin-work-3'
        },
        {
          url: require("../assets/images/keewatin/Keewatin_4.jpg"),
          alt: 'keewatin-work-5'
        },
        {
          url: require("../assets/images/keewatin/Keewatin_5.jpg"),
          alt: 'keewatin-work-4'
        },
        {
          url: require("../assets/images/keewatin/Keewatin_6_Cover.jpg"),
          alt: 'keewatin-work-6'
        },
      ]
    },
    {
      id: "2",
      disable: false,
      homeImg: {
        url: require("../assets/images/rom-mps/ROM_MPS_5_Cover.jpg"),
        alt: 'rom-mps'
      },
      workImgs: [
        {
          url: require("../assets/images/rom-mps/ROM_MPS_1.jpg"),
          alt: 'rom-mps-work-1'
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_2.jpg"),
          alt: 'rom-mps-work-2'
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_3.jpg"),
          alt: 'rom-mps-work-3'
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_4.jpg"),
          alt: 'rom-mps-work-5'
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_5_Cover.jpg"),
          alt: 'rom-mps-work-4'
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_6.jpg"),
          alt: 'rom-mps-work-6'
        },
      ]
    },
    {
      id: "3",
      disable: false,
      homeImg: {
        url: require("../assets/images/aurora/4-letterhead.png"),
        alt: 'aurora1'
      },
      workImgs: [
        {
          url: require("../assets/images/aurora/1-logo.gif"),
          alt: 'aurora2'
        },
        {
          url: require("../assets/images/aurora/2-logo.png"),
          alt: 'aurora3'
        },
        {
          url: require("../assets/images/aurora/3-card.png"),
          alt: 'aurora4'
        },
        {
          url: require("../assets/images/aurora/4-letterhead.png"),
          alt: 'aurora5'
        },
        {
          url: require("../assets/images/aurora/5-folder.png"),
          alt: 'aurora6'
        },
        {
          url: require("../assets/images/aurora/6-brochure.png"),
          alt: 'aurora7'
        },
        {
          url: require("../assets/images/aurora/7-packaging.png"),
          alt: 'aurora8'
        }
      ]
    },
    {
      id: "4",
      disable: false,
      homeImg: {
        url: require("../assets/images/mischief/9-website-cover.png"),
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
          url: require("../assets/images/mischief/3-cards.png"),
          alt: 'mischief4'
        },
        {
          url: require("../assets/images/mischief/4-stationary.png"),
          alt: 'mischief5'
        },
        {
          url: require("../assets/images/mischief/5-tape.png"),
          alt: 'mischief6'
        },
        {
          url: require("../assets/images/mischief/6-poster.png"),
          alt: 'mischief7'
        },
        {
          url: require("../assets/images/mischief/7-poster2.png"),
          alt: 'mischief8'
        },
        {
          url: require("../assets/images/mischief/8-website.png"),
          alt: 'mischief9'
        },
        {
          url: require("../assets/images/mischief/9-website-cover.png"),
          alt: 'mischief10'
        },
        {
          url: require("../assets/images/mischief/10-website.png"),
          alt: 'mischief11'
        },
        {
          url: require("../assets/images/mischief/11-website.png"),
          alt: 'mischief12'
        },
        {
          url: require("../assets/images/mischief/12-tshirt.png"),
          alt: 'mischief13'
        }
      ]
    },
    {
      id: "5",
      disable: false,
      homeImg: {
        url: require("../assets/images/sap/1-logo.png"),
        alt: 'sap1'
      },
      workImgs: [
        {
          url: require("../assets/images/sap/1-logo.png"),
          alt: 'sap2'
        },
        {
          url: require("../assets/images/sap/2-bottle.png"),
          alt: 'sap3'
        },
        {
          url: require("../assets/images/sap/3-postal-card.png"),
          alt: 'sap4'
        },
        {
          url: require("../assets/images/sap/4-postal-card.png"),
          alt: 'sap5'
        }
      ]
    },
    {
      id: "6",
      disable: false,
      homeImg: {
        url: require("../assets/images/cracker/0-thumbnail.png"),
        alt: 'cracker1'
      },
      workImgs: [
        {
          url: require("../assets/images/cracker/1-before-after.png"),
          alt: 'cracker2'
        },
        {
          url: require("../assets/images/cracker/2-crackers.png"),
          alt: 'cracker3'
        },
        {
          url: require("../assets/images/cracker/3-crackers.png"),
          alt: 'cracker4'
        },
        {
          url: require("../assets/images/cracker/4-all.png"),
          alt: 'cracker5'
        }
      ]
    },
    {
      id: "7",
      disable: false,
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
      id: "8",
      disable: false,
      homeImg: {
        url: require("../assets/images/astellas/5-ad-cover.png"),
        alt: 'astellas1'
      },
      workImgs: [
        {
          url: require("../assets/images/astellas/1-logo.png"),
          alt: 'astellas2'
        },
        {
          url: require("../assets/images/astellas/2-hotel.png"),
          alt: 'astellas3'
        },
        {
          url: require("../assets/images/astellas/3-letterhead.png"),
          alt: 'astellas4'
        },
        {
          url: require("../assets/images/astellas/4-card.png"),
          alt: 'astellas5'
        },
        {
          url: require("../assets/images/astellas/5-ad-cover.png"),
          alt: 'astellas6'
        },
        {
          url: require("../assets/images/astellas/6-website.png"),
          alt: 'astellas7'
        },
        {
          url: require("../assets/images/astellas/7-insta.png"),
          alt: 'astellas8'
        },
      ]
    },
    {
      id: "9",
      disable: false,
      homeImg: {
        url: require("../assets/images/burnbrae-egg/thumbnail-0.png"),
        alt: 'burnbrae-egg1'
      },
      workImgs: [
        {
          url: require("../assets/images/burnbrae-egg/single-front-1.jpg"),
          alt: 'burnbrae-egg2'
        },
        {
          url: require("../assets/images/burnbrae-egg/single-side-2.jpg"),
          alt: 'burnbrae-egg3'
        },
        {
          url: require("../assets/images/burnbrae-egg/single-side-3.jpg"),
          alt: 'burnbrae-egg4'
        },
        {
          url: require("../assets/images/burnbrae-egg/single-open-4.jpg"),
          alt: 'burnbrae-egg5'
        },
        {
          url: require("../assets/images/burnbrae-egg/single-dieline-5.jpg"),
          alt: 'burnbrae-egg6'
        },
        {
          url: require("../assets/images/burnbrae-egg/three-front-6.jpg"),
          alt: 'burnbrae-egg7'
        },
        {
          url: require("../assets/images/burnbrae-egg/three-side-7.jpg"),
          alt: 'burnbrae-egg9'
        },
        {
          url: require("../assets/images/burnbrae-egg/three-stuck-8.jpg"),
          alt: 'burnbrae-egg10'
        },
        {
          url: require("../assets/images/burnbrae-egg/three-open-9.jpg"),
          alt: 'burnbrae-egg11'
        },
        {
          url: require("../assets/images/burnbrae-egg/three-open-10.jpg"),
          alt: 'burnbrae-egg12'
        },
      ]
    },
    {
      id: "10",
      disable: false,
      homeImg: {
        url: require("../assets/images/tweed/1-logo-cover.gif"),
        alt: 'tweed1'
      },
      workImgs: [
        {
          url: require("../assets/images/tweed/1-logo-cover.gif"),
          alt: 'tweed2'
        },
        {
          url: require("../assets/images/tweed/2-image.png"),
          alt: 'tweed3'
        },
        {
          url: require("../assets/images/tweed/3-tbc.png"),
          alt: 'tweed4'
        },
      ]
    },
    {
      id: "11",
      disable: false,
      homeImg: {
        url: require("../assets/images/jardin/2-cards-cover.png"),
        alt: 'jardin1'
      },
      workImgs: [
        {
          url: require("../assets/images/jardin/1-logo.png"),
          alt: 'jardin2'
        },
        {
          url: require("../assets/images/jardin/2-cards-cover.png"),
          alt: 'jardin3'
        },
        {
          url: require("../assets/images/jardin/3-coming.png"),
          alt: 'jardin4'
        },
      ]
    },
    {
      id: "12",
      disable: true,
      homeImg: {
        url: require("../assets/images/riocan/riocan.jpg"),
        alt: 'riocan'
      },
      workImgs: [
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