var userAgent = window.navigator.userAgent.toLowerCase();
var tester = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
var brower = tester[1];
var version = tester[2];

if(brower == 'msie' && version < 8) {
    alert("当前浏览器版本太低！请及时升级浏览器");
}