import * as types from './mutation-types.js';

const mutations = {
  [types.SET_COLLAPSE] (state, flag){
    state.collapse = flag;
  },
}
export default mutations;