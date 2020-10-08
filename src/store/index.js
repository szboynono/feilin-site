import { createStore } from 'vuex'

const state = {
  works: [
    {
      id: "1",
      imgUrl: "https://loremflickr.com/800/600/pig",
    },
    {
      id: "2",
      imgUrl: "https://loremflickr.com/800/600/cat",
    },
    {
      id: "3",
      imgUrl: "https://loremflickr.com/800/600/dog",
    },
    {
      id: "4",
      imgUrl: "https://loremflickr.com/800/600/lion",
    },
    {
      id: "5",
      imgUrl: "https://loremflickr.com/800/600/fish",
    },
    {
      id: "6",
      imgUrl: "https://loremflickr.com/800/600/horse",
    },
    {
      id: "7",
      imgUrl: "https://loremflickr.com/800/600/gun",
    },
    {
      id: "8",
      imgUrl: "https://loremflickr.com/800/600/girl",
    },
    {
      id: "9",
      imgUrl: "https://loremflickr.com/800/600/bird",
    },
  ]
}

const getters = {
  works: state => state.works
}

const store = createStore({
  state,
  getters
})

export default store