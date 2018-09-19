// pages/server/server.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: "none",
    show: "block",
  },
  change: function () {
    this.setData({
      hidden: "none",
      show: "block"
    });
  },
  cancle: function () {
    this.setData({
      show: "none",
      hidden: "block"
    })
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
  backup: function () {
    wx.navigateBack({
      delta: 1
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