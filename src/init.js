'use strict';

$(document).ready(function() {
    const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    const jq = document.createElement('script');
    jq.setAttribute("src", chrome.extension.getURL('jquery.js'));
    head.insertBefore(jq, head.lastChild);


    const script = document.createElement('script');
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.extension.getURL('src/main.js'));
    head.insertBefore(script, head.lastChild);
});

