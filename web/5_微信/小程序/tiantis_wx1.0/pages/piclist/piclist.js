
//引入图片预加载组件
const ImgLoader = require('../img-loader/img-loader.js')
var app = getApp()
Page({
  data: {
    imagelist: [
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listOne.jpg', loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listTwo.jpg', loaded: false }, 
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listThr.jpg', loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listFou.jpg', loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listFiv.jpg',loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listSix.jpg',loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listSen.jpg',loaded: false },   
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listEight.jpg',loaded: false }, 
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/listNine.jpg',loaded: false },
                
    ]
  },
  /*--预览图片--*/
  loadImages() {
    //同时发起全部图片的加载
    this.data.imagelist.forEach(item => {
      this.imgLoader.load(item.image)
    })
  },
  //加载完成后的回调
  imageOnLoad(err, data) {
    const imagelist = this.data.imagelist.map(item => {
      if (item.image == data.src)
        item.loaded = true
      return item
    })
    this.setData({ imagelist })
  },
  onLoad:function(){
    this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this));
    this.data.imagelist.forEach(item => {
      this.imgLoader.load(item.image)
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var x = this.data.imagelist;
    var y = new Array();
    for (var i in x) {
      y.push(x[i].image);
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: y // 需要预览的图片http链接列表  
    })
  }
})