// ==UserScript==
// @name         题库答案搜索
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  题库答案搜索
// @author       lsilencej
// @match        *://cx.icodef.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=icodef.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //获取地址栏里（URL）传递的参数
    function getRequest(value) {
        var url = decodeURI(location.search);
        var object = {};
        if(url.indexOf("?") != -1)
        {
            var str = url.substr(1);
            var strs = str.split("&");
            for(var i = 0; i < strs.length; i ++)
            {
                object[strs[i].split("=")[0]]=strs[i].split("=")[1]
            }
        }
        return object[value];
    }

    var search_text = document.getElementsByClassName("topic")[0];
    var text = getRequest("text");
    console.log(search_text.text);
    console.log(text);
    search_text.value = text;
    search_text.focus();

    let keyboardEvent = document.createEvent('Event')
    keyboardEvent.initEvent('keydown', true, false)
    console.log(event);
    keyboardEvent = Object.assign(keyboardEvent, {
        ctrlKey: false,
        metaKey: false,
        altKey: false,
        which: 13,
        keyCode: 13,
        key: 'Enter',
        code: 'Enter'
    });
    search_text.dispatchEvent(keyboardEvent);

})();