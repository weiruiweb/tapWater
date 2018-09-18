//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        id1:0,
        id2:1,
        id3:2,
        pre:[
            {item:'0'},{item:'1'},{item:'2'}
        ],
        isShowPassword: true,
        isShowPassword1: true,
        isShowPassword2: true
    },
    //事件处理函数

    onLoad: function() {},
    // showEye: function() {
    //     // var ids = e.currentTarget.dataset.id;
    //     var isShowPasswordEye = !this.data.isShowPassword;
    //     this.setData({
    //         isShowPassword: isShowPasswordEye
    //     })

    // },
     showEye: function(e) {
        var ids = e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset.id)
        this.setData({
            id1: ids,
            id2: ids,
            id3: ids,
        })

    },

    // showEye1: function() {
    //     // var ids = e.currentTarget.dataset.id;
    //     var isShowPasswordEye = !this.data.isShowPassword1;
    //     this.setData({
    //         isShowPassword1: isShowPasswordEye
    //     })

    // },
    // showEye2: function() {
    //     // var ids = e.currentTarget.dataset.id;
    //     var isShowPasswordEye = !this.data.isShowPassword2;
    //     this.setData({
    //         isShowPassword2: isShowPasswordEye
    //     })

    // },

})