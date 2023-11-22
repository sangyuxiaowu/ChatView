# ChatView

本项目是一个简单的聊天记录查看器，允许用户从不同来源查看和分享聊天记录。应用程序支持多种聊天记录格式。

## 功能

- 从不同来源加载和显示聊天记录
- 将聊天记录分享为格式化文档
- 双击复制单个消息

## 使用方法

1. 使用您喜欢的网络浏览器打开 `index.html` 文件。
2. 将聊天记录 JSON 文件拖放到左侧的 JSON 编辑器中，或手动编辑 JSON 内容。
3. 聊天记录将显示在右侧。
4. 双击消息以将其内容复制到剪贴板。
5. 单击“分享”按钮以打开一个新窗口，其中包含格式化的聊天记录，可供打印或另存为 PDF。

## 支持的聊天记录格式

- 数据库导出的聊天记录，包含字段：`query`（查询）、`response`（回应）和 `create_time`（创建时间）
- Azure GPT Playground JSON 格式，包含字段：`role`（角色）和 `content`（内容）
- Azure GPT Playground JavaScript 工具导出的聊天记录，包含字段：`isAI`（是否为 AI）和 `text`（文本）
- Azure GPT Playground 原始 JSON 格式，包含字段：`role`（角色）和 `content`（内容）

## 依赖库

本项目使用以下库：

- `jsoneditor.min.css` 和 `jsoneditor.min.js` 用于 JSON 编辑
- `marked.min.js` 用于 Markdown 解析
- `highlight.min.js` 用于代码高亮
- `app.css` 用于样式设置