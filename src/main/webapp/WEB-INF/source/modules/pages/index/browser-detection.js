var userAgent = window.navigator.userAgent.toLowerCase();
var tester = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

var getBrowser  = function() {
    return tester[1];
};

var getVersion  = function() {
    return tester[2];
};

exports.browser = getBrowser;
exports.version = getVersion;
