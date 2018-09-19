// pages/server/server.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1: "地址：河南省郑州市高新区电子商务产业园3号楼",
    text2: "电话：400 - 6698 - 090",
    text3: "邮编：450000",
    text4:"邮箱：2506497160@qq.com",
    markers: [{
      iconPath: "../../images/ad.jpg",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: '0371-55952848'
    })
  },
  homeBack: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  tagChoose: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    that.setData({
      'currentItem': id
    })
    var mamebers = that.data.mamebers;
    that.setData({
      mamebers: e.currentTarget.dataset.name
    })
  },
  tiao: function () {
    wx.navigateTo({
      url: '../product-detail/product-detail'
    })
  },
  tiao1: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})