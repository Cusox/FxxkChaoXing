// ==UserScript==
// @name         Fuck ChaoXing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  学习通自动搜题
// @author       lsilencej
// @match        *://*.chaoxing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

var workId = document.querySelector("#oldWorkId").value;
var courseId = document.querySelector("#courseId").value;
if(workId && courseId){
    window.open("https://mooc1.chaoxing.com/api/selectWorkQuestion?workId=" + workId + "&courseId=" + courseId, "_blank");
}
