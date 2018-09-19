//index.js
const ImgLoader = require('../img-loader/img-loader.js')

//获取应用实例
var app = getApp()
Page({
  data: {
    imagelist: [
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/proOne.jpg', text: '空调清洗', loaded: false},
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/proTwo.jpg', text: '空调清洁', loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/proThr.jpg', text: '空调维修', loaded: false },
      { image: 'https://ui.tiantis.com/Images/ShopSite/xcx/kongtiaoweixiu/proFou.jpg', text: '厨房设备维修安装', loaded: false },
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
  previewImage:function (e) {
    var current = e.target.dataset.src;
    var x = this.data.imagelist;
    var y = new Array();
    for (var i in x) {
      y.push(x[i].image);
    }
    wx.previewImage({
      current:current, // 当前显示图片的http链接  
      urls: y // 需要预览的图片http链接列表  
    })
  },
  onLoad: function () {
    var local_database =
      {
        tips: "空调维修我们最专业",
        title: "郑州市中原区新印象空调维修部",
        headImgSrc: "/images/logo.png",
        text: "宗旨：信誉至上、至信至诚、开拓市场、争创一流、以信为本、以质求生的宗旨",
        phone: "公司电话",
        call: "15638840662",
        imgSrc: "/images/crab.png",
        service: "联系客服",
        addTitle: "公司地址",
        Address: "中原区西路191号院9号楼6单元50号",
        scrollTitle: "公司产品",
        cpyTitle: "公司简介",
        scrollText: "郑州市新印象空调维修部多年来，本着信誉至上、至信至诚、开拓市场、争创一流、以信为本、以质求生的宗旨目标。以专业的技术、优质的服务受到了广大客户的认同和称赞，为了更好的为客户提供更优质的上门服务，提高中心的形象与荣誉，不仅制定了全面的服务规范，服务承诺……",
      }
      this.setData(local_database)
      this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this));
      this.data.imagelist.forEach(item => {
        this.imgLoader.load(item.image)
      })
  },
  cpmap:function()
  {
    wx.openLocation({
      latitude: 34.7842100000,
      longitude: 113.6800100000,
      scale: 16,
      name:'郑州市中原区新印象空调维修部',
      address:'河南省郑州市中原区中原西路191号院9号楼6单元50号'
    })
  },
  callme:function()
  {
    wx.makePhoneCall({
      phoneNumber: '15638840662'
    })
  },
  cpyIntrodty:function () {
    wx.navigateTo({
      url: '../introducty/introducty'
    })
  },
  piclist: function () {
    wx.navigateTo({
      url: '../piclist/piclist'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '郑州市中原区新印象空调维修部',
      path: '/pages/index/index',
    }
  }
})
