require('../../commons/common.less');
require('../../commons/layout/base/base-layout.less');
require('./solution.less');

require("../components/header/header");
require("../components/footer/footer");

$("#banner").attr("src", require("./img/hyfa.jpg"));

$(".slide-bg-1-1").attr("src", require("./img/ico1.jpg"));

$('.carousel').carousel({
    interval: 5000
})