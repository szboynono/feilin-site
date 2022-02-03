import { createStore } from "vuex";

const state = {
  works: [
    {
      id: "1",
      disable: false,
      homeImg: {
        url: require("../assets/images/keewatin/Keewatin_6_Cover.jpg"),
        loaded: false,
        alt: "keewatin",
      },
      workImgs: [
        {
          url: require("../assets/images/keewatin/Keewatin_1.jpg"),
          loaded: false,
          alt: "keewatin-work-1",
        },
        {
          url: require("../assets/images/keewatin/Keewatin_2.jpg"),
          loaded: false,
          alt: "keewatin-work-2",
        },
        {
          url: require("../assets/images/keewatin/Keewatin_3.jpg"),
          loaded: false,
          alt: "keewatin-work-3",
        },
        {
          url: require("../assets/images/keewatin/Keewatin_4.jpg"),
          loaded: false,
          alt: "keewatin-work-5",
        },
        {
          url: require("../assets/images/keewatin/Keewatin_5.jpg"),
          loaded: false,
          alt: "keewatin-work-4",
        },
        {
          url: require("../assets/images/keewatin/Keewatin_6_Cover.jpg"),
          loaded: false,
          alt: "keewatin-work-6",
        },
      ],
    },
    {
      id: "2",
      disable: false,
      homeImg: {
        url: require("../assets/images/rom-mps/ROM_MPS_5_Cover.jpg"),
        loaded: false,
        alt: "rom-mps",
      },
      workImgs: [
        {
          url: require("../assets/images/rom-mps/ROM_MPS_1.jpg"),
          loaded: false,
          alt: "rom-mps-work-1",
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_2.jpg"),
          loaded: false,
          alt: "rom-mps-work-2",
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_3.jpg"),
          loaded: false,
          alt: "rom-mps-work-3",
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_4.jpg"),
          loaded: false,
          alt: "rom-mps-work-5",
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_5_Cover.jpg"),
          loaded: false,
          alt: "rom-mps-work-4",
        },
        {
          url: require("../assets/images/rom-mps/ROM_MPS_6.jpg"),
          loaded: false,
          alt: "rom-mps-work-6",
        },
      ],
    },
    {
      id: "3",
      disable: false,
      homeImg: {
        url: require("../assets/images/aurora/4-letterhead.png"),
        loaded: false,
        alt: "aurora1",
      },
      workImgs: [
        {
          url: require("../assets/images/aurora/1-logo.gif"),
          loaded: false,
          alt: "aurora2",
        },
        {
          url: require("../assets/images/aurora/2-logo.png"),
          loaded: false,
          alt: "aurora3",
        },
        {
          url: require("../assets/images/aurora/3-card.png"),
          loaded: false,
          alt: "aurora4",
        },
        {
          url: require("../assets/images/aurora/4-letterhead.png"),
          loaded: false,
          alt: "aurora5",
        },
        {
          url: require("../assets/images/aurora/5-folder.png"),
          loaded: false,
          alt: "aurora6",
        },
        {
          url: require("../assets/images/aurora/6-brochure.png"),
          loaded: false,
          alt: "aurora7",
        },
        {
          url: require("../assets/images/aurora/7-packaging.png"),
          loaded: false,
          alt: "aurora8",
        },
      ],
    },
    {
      id: "4",
      disable: false,
      homeImg: {
        url: require("../assets/images/mischief/9-website-cover.png"),
        loaded: false,
        alt: "mischief1",
      },
      workImgs: [
        {
          url: require("../assets/images/mischief/1-logo.png"),
          loaded: false,
          alt: "mischief2",
        },
        {
          url: require("../assets/images/mischief/2-card.png"),
          loaded: false,
          alt: "mischief3",
        },
        {
          url: require("../assets/images/mischief/3-cards.png"),
          loaded: false,
          alt: "mischief4",
        },
        {
          url: require("../assets/images/mischief/4-stationary.png"),
          loaded: false,
          alt: "mischief5",
        },
        {
          url: require("../assets/images/mischief/5-tape.png"),
          loaded: false,
          alt: "mischief6",
        },
        {
          url: require("../assets/images/mischief/6-poster.png"),
          loaded: false,
          alt: "mischief7",
        },
        {
          url: require("../assets/images/mischief/7-poster2.png"),
          loaded: false,
          alt: "mischief8",
        },
        {
          url: require("../assets/images/mischief/8-website.png"),
          loaded: false,
          alt: "mischief9",
        },
        {
          url: require("../assets/images/mischief/9-website-cover.png"),
          loaded: false,
          alt: "mischief10",
        },
        {
          url: require("../assets/images/mischief/10-website.png"),
          loaded: false,
          alt: "mischief11",
        },
        {
          url: require("../assets/images/mischief/11-website.png"),
          loaded: false,
          alt: "mischief12",
        },
        {
          url: require("../assets/images/mischief/12-tshirt.png"),
          loaded: false,
          alt: "mischief13",
        },
      ],
    },
    {
      id: "5",
      disable: false,
      homeImg: {
        url: require("../assets/images/sap/1-logo.png"),
        loaded: false,
        alt: "sap1",
      },
      workImgs: [
        {
          url: require("../assets/images/sap/1-logo.png"),
          loaded: false,
          alt: "sap2",
        },
        {
          url: require("../assets/images/sap/2-bottle.png"),
          loaded: false,
          alt: "sap3",
        },
        {
          url: require("../assets/images/sap/3-postal-card.png"),
          loaded: false,
          alt: "sap4",
        },
        {
          url: require("../assets/images/sap/4-postal-card.png"),
          loaded: false,
          alt: "sap5",
        },
      ],
    },
    {
      id: "6",
      disable: false,
      homeImg: {
        url: require("../assets/images/cracker/0-thumbnail.png"),
        loaded: false,
        alt: "cracker1",
      },
      workImgs: [
        {
          url: require("../assets/images/cracker/1-before-after.png"),
          loaded: false,
          alt: "cracker2",
        },
        {
          url: require("../assets/images/cracker/2-crackers.png"),
          loaded: false,
          alt: "cracker3",
        },
        {
          url: require("../assets/images/cracker/3-crackers.png"),
          loaded: false,
          alt: "cracker4",
        },
        {
          url: require("../assets/images/cracker/4-all.png"),
          loaded: false,
          alt: "cracker5",
        },
      ],
    },
    {
      id: "7",
      disable: false,
      homeImg: {
        url: require("../assets/images/mattamy/logo-1.png"),
        loaded: false,
        alt: "mattamy1",
      },
      workImgs: [
        {
          url: require("../assets/images/mattamy/logo-1.png"),
          loaded: false,
          alt: "mattamy-work-1",
        },
        {
          url: require("../assets/images/mattamy/logo-2.png"),
          loaded: false,
          alt: "mattamy-work-2",
        },
        {
          url: require("../assets/images/mattamy/logo-collection.png"),
          loaded: false,
          alt: "mattamy-work-3",
        },
        {
          url: require("../assets/images/mattamy/card.png"),
          loaded: false,
          alt: "mattamy-work-5",
        },
        {
          url: require("../assets/images/mattamy/poster.png"),
          loaded: false,
          alt: "mattamy-work-4",
        },
        {
          url: require("../assets/images/mattamy/business-card.png"),
          loaded: false,
          alt: "mattamy-work-6",
        },
        {
          url: require("../assets/images/mattamy/website-1.png"),
          loaded: false,
          alt: "mattamy-work-7",
        },
        {
          url: require("../assets/images/mattamy/website-2.png"),
          loaded: false,
          alt: "mattamy-work-8",
        },
      ],
    },
    {
      id: "8",
      disable: false,
      homeImg: {
        url: require("../assets/images/astellas/5-ad-cover.png"),
        loaded: false,
        alt: "astellas1",
      },
      workImgs: [
        {
          url: require("../assets/images/astellas/1-logo.png"),
          loaded: false,
          alt: "astellas2",
        },
        {
          url: require("../assets/images/astellas/2-hotel.png"),
          loaded: false,
          alt: "astellas3",
        },
        {
          url: require("../assets/images/astellas/3-letterhead.png"),
          loaded: false,
          alt: "astellas4",
        },
        {
          url: require("../assets/images/astellas/4-card.png"),
          loaded: false,
          alt: "astellas5",
        },
        {
          url: require("../assets/images/astellas/5-ad-cover.png"),
          loaded: false,
          alt: "astellas6",
        },
        {
          url: require("../assets/images/astellas/6-website.png"),
          loaded: false,
          alt: "astellas7",
        },
        {
          url: require("../assets/images/astellas/7-insta.png"),
          loaded: false,
          alt: "astellas8",
        },
      ],
    },
    {
      id: "9",
      disable: false,
      homeImg: {
        url: require("../assets/images/burnbrae-egg/thumbnail-0.png"),
        loaded: false,
        alt: "burnbrae-egg1",
      },
      workImgs: [
        {
          url: require("../assets/images/burnbrae-egg/single-front-1.jpg"),
          loaded: false,
          alt: "burnbrae-egg2",
        },
        {
          url: require("../assets/images/burnbrae-egg/single-side-2.jpg"),
          loaded: false,
          alt: "burnbrae-egg3",
        },
        {
          url: require("../assets/images/burnbrae-egg/single-side-3.jpg"),
          loaded: false,
          alt: "burnbrae-egg4",
        },
        {
          url: require("../assets/images/burnbrae-egg/single-open-4.jpg"),
          loaded: false,
          alt: "burnbrae-egg5",
        },
        {
          url: require("../assets/images/burnbrae-egg/single-dieline-5.jpg"),
          loaded: false,
          alt: "burnbrae-egg6",
        },
        {
          url: require("../assets/images/burnbrae-egg/three-front-6.jpg"),
          loaded: false,
          alt: "burnbrae-egg7",
        },
        {
          url: require("../assets/images/burnbrae-egg/three-side-7.jpg"),
          loaded: false,
          alt: "burnbrae-egg9",
        },
        {
          url: require("../assets/images/burnbrae-egg/three-stuck-8.jpg"),
          loaded: false,
          alt: "burnbrae-egg10",
        },
        {
          url: require("../assets/images/burnbrae-egg/three-open-9.jpg"),
          loaded: false,
          alt: "burnbrae-egg11",
        },
        {
          url: require("../assets/images/burnbrae-egg/three-open-10.jpg"),
          loaded: false,
          alt: "burnbrae-egg12",
        },
      ],
    },
    {
      id: "10",
      disable: false,
      homeImg: {
        url: require("../assets/images/tweed/1-logo-cover.gif"),
        loaded: false,
        alt: "tweed1",
      },
      workImgs: [
        {
          url: require("../assets/images/tweed/1-logo-cover.gif"),
          loaded: false,
          alt: "tweed2",
        },
        {
          url: require("../assets/images/tweed/2-image.png"),
          loaded: false,
          alt: "tweed3",
        },
        {
          url: require("../assets/images/tweed/3-tbc.png"),
          loaded: false,
          alt: "tweed4",
        },
      ],
    },
    {
      id: "11",
      disable: false,
      homeImg: {
        url: require("../assets/images/jardin/2-cards-cover.png"),
        loaded: false,
        alt: "jardin1",
      },
      workImgs: [
        {
          url: require("../assets/images/jardin/1-logo.png"),
          loaded: false,
          alt: "jardin2",
        },
        {
          url: require("../assets/images/jardin/2-cards-cover.png"),
          loaded: false,
          alt: "jardin3",
        },
        {
          url: require("../assets/images/jardin/3-coming.png"),
          loaded: false,
          alt: "jardin4",
        },
      ],
    },
    {
      id: "12",
      disable: true,
      homeImg: {
        url: require("../assets/images/riocan/riocan.jpg"),
        loaded: false,
        alt: "riocan",
      },
      workImgs: [],
    },
  ],
};

const getters = {
  works: (state) => state.works,
  work: (state) => (id) => state.works.find((work) => work.id === id),
};

const mutations = {
  loadedHomeImage(state, id) {
    state.works[id - 1].homeImg.loaded = true;
  }
};

const store = createStore({
  state,
  getters,
  mutations,
});

export default store;
