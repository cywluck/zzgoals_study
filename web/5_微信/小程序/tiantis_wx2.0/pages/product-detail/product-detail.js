// pages/product-detail/product-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      textTitle:"家政公司又叫保姆公司，提供月嫂，保洁等服务",
      biaoti:"产品详情",
      text1:"指的是提供室内外清洁、打蜡，房屋开荒，月嫂、育婴，催乳，老年护理员，护工，钟点工，涉外家政，别墅管家，等服务的公司。家政公司又称保姆公司，指的是提供、月子护理、家庭管家、老人陪护、管道疏通、开荒保洁、室内外清洁、打蜡、清洗地毯、沙发、月嫂服务、管家、钟点工，等服务的公司。",
      text2:"指的是提供室内外清洁、打蜡，房屋开荒，月嫂、育婴，催乳，老年护理员，护工，钟点工，涉外家政，别墅管家，等服务的公司。家政公司又称保姆公司，指的是提供、月子护理、家庭管家、老人陪护、管道疏通、开荒保洁、室内外清洁、打蜡、清洗地毯、沙发、月嫂服务、管家、钟点工，等服务的公司。"
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