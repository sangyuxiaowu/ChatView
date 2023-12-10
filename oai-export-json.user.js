// ==UserScript==
// @name         Azure OpenAI Studio 聊天会话导出
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  将 ChatGPT 操场的会话记录导出为 json
// @updateURL       https://raw.githubusercontent.com/sangyuxiaowu/ChatView/master/oai-export-json.user.js
// @downloadURL     https://raw.githubusercontent.com/sangyuxiaowu/ChatView/master/oai-export-json.user.js
// @author       sangsq
// @match        https://oai.azure.com/*
// @icon         https://oai.azure.com/favicon.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('click', function(event) {
        if(event.target.closest('div.chat')) {
            if(document.getElementById("exportjson")) return;
            var newButton = document.createElement('button');
            newButton.type = 'button';
            newButton.id = 'exportjson';
            newButton.role = 'button';
            newButton.setAttribute('style', 'outline:transparent;background:#fff;border: none;');
            newButton.innerHTML = `<span class="ms-Button-flexContainer flexContainer-223" data-automationid="splitbuttonprimary">
            <i data-icon-name="Download" aria-hidden="true" style="font-family:FabricMDL2Icons;font-style:normal;color:#0078d4"></i>
            <span class="ms-Button-textContainer textContainer-224"><span class="ms-Button-label label-257">导出 Json</span></span></span>`;
            var codeViewButton = document.querySelector("button[data-bi-name='cg_chatsession_code-view']");
            codeViewButton.parentNode.insertBefore(newButton, codeViewButton.nextSibling);
        }
    });

    document.addEventListener('click', function(event) {
        if(event.target.closest('#exportjson')) {
            var jsonData = JSON.parse(sessionStorage.getItem('OAISessionStorage')).chatGPTChatHistoryForAllResources[0].chatTranscript;
            // 将 JSON 数据转换为字符串
            var jsonString = JSON.stringify(jsonData, null, 2);

            // 创建一个 Blob 对象，用于保存 JSON 数据
            var blob = new Blob([jsonString], { type: "application/json" });

            // 创建一个临时链接并设置其属性，使用户可以下载 JSON 文件
            var url = URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "data.json");

            // 将链接添加到页面上并模拟点击它以触发下载
            document.body.appendChild(link);
            link.click();

            // 清理临时链接对象
            URL.revokeObjectURL(url);
        }
    });
})();
