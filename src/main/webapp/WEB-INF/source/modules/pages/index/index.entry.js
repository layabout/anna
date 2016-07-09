if (process.env.NODE_ENV !== 'production') {
    require('../../../../templates/index.html');
}
// 公共基础样式
require("../../commons/common.less");
// Bootstrap 480px-767px响应式布局扩展
require("../../commons/lib/bootstrap-extension/bootstrap-grid-ms.min.css");
// 首页私有样式
require('./index.less');
//  页面组件
require("../components/header/header");
require("../components/footer/footer");



// 幻灯片轮播速度
$('.carousel').carousel({
    interval: 5000 //changes the speed
})

// 合作金融机构logo
$(".cooperation .unionpay").attr('src',require('./img/bank/bank-yinlian.png'));
$(".cooperation .boc").attr('src',require('./img/bank/bank-zhongguo.png'));
$(".cooperation .icbc").attr('src',require('./img/bank/bank-gongshang.png'));
$(".cooperation .ccb").attr('src',require('./img/bank/bank-jianshe.png'));
$(".cooperation .abc").attr('src',require('./img/bank/bank-nongye.png'));
$(".cooperation .cmb").attr('src',require('./img/bank/bank-zhaoshang.png'));
$(".cooperation .bcm").attr('src',require('./img/bank/bank-jiaotong.png'));
$(".cooperation .ceb").attr('src',require('./img/bank/bank-guangda.png'));
$(".cooperation .citic").attr('src',require('./img/bank/bank-zhongxin.png'));
$(".cooperation .cbb").attr('src',require('./img/bank/bank-bohai.png'));
$(".cooperation .cib").attr('src',require('./img/bank/bank-xingye.png'));
$(".cooperation .cmbc").attr('src',require('./img/bank/bank-mingsheng.png'));

