// 混入: 切换 tags 时,每个的 scrollTop 进行保存
export const saveScrollTopMixin = {
  data: function () {
    return {
      scrollTop: 0
    }
  },
  activated (){
    this.$refs.scroll.scrollTo(0, this.scrollTop, true);
  },
  deactivated (){
    this.scrollTop = this.$refs.scroll.scrollTop;
  },
  destroyed (){
    this.scrollTop = 0;
  }
}