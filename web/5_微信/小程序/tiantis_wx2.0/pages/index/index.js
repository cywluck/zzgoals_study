//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: '0371-55952848'
    })
  },
  onShareAppMessage:function(){},
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
