// pages/server/server.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
      produceList: [
        { id: "1", name: "保洁清洗" },
        { id: "2", name: "保洁" },
        { id: "3", name: "保洁清洗" },
        { id: "4", name: "保洁清w" },
        { id: "5", name: "保洁清洗" },
        { id: "6", name: "保洁清洗" }
        ],
      currentItem:"1",
      mamebers:"保洁清洗"
  },
  change:function(){ 
    this.setData({
      flag: 1,
    });
    
  },
  cancle:function(){
    this.setData({
      flag: 0,
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: '0371-55952848'
    })
  },
  homeBack: function () {
    wx.redirectTo({

      url: '../index/index'
    })
  },
  case1: function () {
    wx.redirectTo({

      url: '../server/server'
    })
  },
  yuyue: function () {
    wx.redirectTo({

      url: '../online/online'
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
  tiao:function(){
    wx.navigateTo({
      url: '../product-detail/product-detail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
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