// ==UserScript==
// @name         学习通明文翻译
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  学习通明文翻译
// @author       lsilencej
// @match        *://*.chaoxing.com/api/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", function(event) {
        var titles = document.getElementsByClassName("Zy_TItle clearfix");
        for (var i = 0; i < titles.length; i++) {
            var title = titles[i].getElementsByClassName("clearfix")[0];
            console.log(title.innerHTML);
            title.addEventListener('click', function() {
                window.open("https://cx.icodef.com/query.html?text=" + title.innerHTML);
            });
        }
    })

    document.addEventListener('copy',function(e){
		let clipboardData = e.clipboardData || window.clipboardData;
		if(!clipboardData) return ;
		let text = window.getSelection().toString();
		if(text){
			e.preventDefault();
            window.open("https://cx.icodef.com/query.html?text=" + text);
		}
	})

})();