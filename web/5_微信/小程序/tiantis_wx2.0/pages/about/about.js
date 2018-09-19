// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1:"郑州全家福家政服务公司",
    text2:"公司提供室内外清洁、打蜡，房屋开荒，月嫂、育婴，催乳，老年护理员，护工，钟点工，涉外家政，别墅管家，等服务的公司。家政公司又称保姆公司，指的是提供、月子护理、家庭管家、老人陪护、管道疏通、开荒保洁、室内外清洁、打蜡、清洗地毯、沙发、月嫂服务、管家、钟点工，等服务的公司。",
    text3:"服务型公司",
    text4: "员工属于公司管理和培训，由公司发工资，服务项目以钟点工为主；",
    text5:"优势：统一管理，员工的控制度比较好，客户服务满意度较高；劣势：1、公司运作需要按照劳动法来实施，运行成本较高，承担的风险较大；",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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