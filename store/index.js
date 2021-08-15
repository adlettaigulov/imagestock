export const state = () => ({
  images: {}
});

export const mutations = {
  addImage(state, image) {
    state.images = image;
  }
};

export const actions = {
  addImage(context) {
    context.commit("addImage");
  }
};

export const getters = {
  getImageUrl: state => {
    return state.images;
  }
};
