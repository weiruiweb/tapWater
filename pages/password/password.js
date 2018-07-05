//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   isShowPassword:true,
   isShowPassword1:true,
   isShowPassword2:true
  },
  //事件处理函数
  
  onLoad: function () {
  },
  showEye:function(){
    // var ids = e.currentTarget.dataset.id;
    var isShowPasswordEye = !this.data.isShowPassword;
    this.setData({
      isShowPassword:isShowPasswordEye
    })

  },
  showEye1:function(){
    // var ids = e.currentTarget.dataset.id;
    var isShowPasswordEye = !this.data.isShowPassword1;
    this.setData({
      isShowPassword1:isShowPasswordEye
    })

  },
  showEye2:function(){
    // var ids = e.currentTarget.dataset.id;
    var isShowPasswordEye = !this.data.isShowPassword2;
    this.setData({
      isShowPassword2:isShowPasswordEye
    })

  },


})
