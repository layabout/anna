// header 样式
require("./header.less");

// 公告插件
require("../../../commons/lib/BreakingNews/BreakingNews.css");
require("../../../commons/lib/BreakingNews/BreakingNews.js");
$("#breakingnews").BreakingNews({
    background		:'transparent',
    titlebgcolor	:'transparent',
    linkcolor       :'#fff',
    timer			:6000
});

// 悬浮提示
$('.bs-component [data-toggle="tooltip"]').tooltip();