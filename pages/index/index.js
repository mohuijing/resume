// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:"莫慧婧",
    spell:"MoHuiJing",
    job:"软件开发",
    exp:"实习生",
    tel:"18978749340",
    sex:"女",
    age:21,
    email:"2769278509@qq.com",
    address:"南宁市西乡塘区大学东路168号",
    skill:[
      {name:"Java",percent:80},
      {name:"Python",percent:40},
      {name:"Liunx",percent:40},
      {name:"MySQL",percent:75},
      {name:"HTML/Css/JavaScript",percent:80}
    ],
    education:[
      {
        school:"广西国际商务职业技术学院",
        major:"软件技术(阿里大数据分析)",
        year:"2019-2022",
        desc:"在校课程：Java面向对象编程，JavaWeb程序设计，MySQL数据库管理，网页设计与制作，合同、方案、标书制作实训，办公自动化，商务写作与沟通等。"
      }
    ],
    project:[
      {
        name:"客户管理系统",
        desc:"完成了项目的设计、开发、测试工作。此系统非前后分离,持久层使用的是MyBatis-Plus框架;后端渲染页面使用Thymeleaf模板引擎,SpringBoot提供支持,前端使用Layui框架，密码使用密文和盐值进行加密;用Maven、GitHub管理项目依赖和代码，数据库使用MySQL"
      }
    ],
    work:[
      {
        department:"信息工程系学习部",
        job:"干事",
        year:"2019-2020",
        desc:"负责协助我系老师开展奖学金及助学金评比工作,为同学树立正确的学习目标、端正学习态度,完成组织交办的其他任务"
      },
      {
        department:"19大数据班",
        job:"纪检委员",
        year:"2019-2021",
        desc:"负责班级的考勤工作,督促同学按时出勤,对当天的出勤情况进行记录,整理好纸质版、电子档名单与纪检部交接工作，完成老师交办的其他任务"
      },
      {
        department:"宿舍",
        job:"舍长",
        year:"2019-2021",
        desc:"督促同学养成良好的生活习惯、遵守学校寝室规章制度，纠正不卫生行为，处理好同学关系"
      },
      {
        department:"广西国际职业技术学院",
        job:"志愿者",
        year:"2020-2020",
        desc:"负责新生接待工作,协助班助完成新生注册任务,核对新生身份行程信息,分配宿舍发放校牌、热水卡,为新生答疑解惑"
      }
    ],
    introduction:[
      {
        desc:"1.软件技术专业+专科 学历"
      },
      {
        desc:"2.热爱IT行业，喜欢编程"
      },
      {
        desc:"3.编码认真严谨且规范"
      },
      {
        desc:"4.熟悉MySQL、PolarDB数据库"
      },
      {
        desc:"5.可以用HTML、Css、Js制作网页"
      },
      {
        desc:"5.使用过SpringBoot、MyBatis-Plus、Layui框架"
      },
      {
        desc:"6.熟悉使用Git、Maven进行项目管理"
      },
      {
        desc:"7.能使用Linux的常用命令"
      },
      {
        desc:"8.自学能力强,工作态度好,有良好的团队合作精神"
      },
      {
        desc:"8.抗压能力强,能适应出差"
      }
    ]
      
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
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
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