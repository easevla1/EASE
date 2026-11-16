# EASE project page

论文网站骨架。标题、摘要来自作者提供的文本；暂不显示作者、机构、会议、论文 PDF、代码地址或实验结果。

项目网址：https://easevla1.github.io/EASE/

网站源码仓库：https://github.com/easevla1/EASE

在线编辑内容：https://github.com/easevla1/EASE/edit/main/dist/content.js

## 修改内容

直接编辑 `dist/content.js`：

- `title`：论文完整副标题，`name`：简称。
- `abstract`：摘要正文。
- `authors`、`affiliations`：数组，填入作者姓名及机构；空数组时隐藏。
- `links.paper`、`links.code`、`links.demo`：填入正式 URL。`null` 时显示 Coming soon，不生成虚假链接。
- `video`：例如 `assets/demo.mp4`，把文件放到 `dist/assets/`。空值时隐藏整个 Demo 区。
- `bibtex`：正式引用信息；空字符串时隐藏 Citation 区。
- `status`：页面状态文案。

编辑后保存。若要调整颜色、字号、布局，修改 `dist/style.css`；调整页面结构则修改 `dist/index.html`。内容通过 `textContent` 渲染，不支持在字段中嵌入 HTML。

本项目无外部字体、分析脚本或运行依赖。可直接双击 `dist/index.html` 本地浏览，也可以用静态 HTTP 服务预览。

## GitHub Pages 发布

1. 把整个项目上传到你拥有的 GitHub 仓库，默认分支为 `main`。
2. 仓库进入 **Settings → Pages → Build and deployment → Source → GitHub Actions**。
3. 推送到 `main` 会触发 `.github/workflows/pages.yml`，自动发布 `dist/`。
4. 发布成功后，GitHub Actions 的 deployment 输出和 Settings → Pages 页面会给出真实网站 URL。
5. 后续在 GitHub 网页中编辑 `dist/content.js` 并提交到 `main`，同一网址会自动更新。

账号密码、恢复信息及双重验证应由账号所有者保管。此项目不含任何账号凭据。
