//img ,href
function ImgScroll(id, imgList, space, speed) {
    this.box = document.getElementById(id);
    this.list = imgList;
    this.space = space || 3000;
    this.speed = speed || 300;
    this.autoScroll();
}
//
ImgScroll.prototype = {
    constructor: imgScroll,
    getStyle: function (dom, attr) {
        return dom.currentStyle ? dom.
    },
    animate: function (ele, json, time, caaback) {},
    createDom: function () {
        var box = this.box;
        var list = this.list;

    }
}
