# TALOS 官网

官网源码纳入 Framework 仓库统一维护。当前内容基线为 2026-09-06，包含十个页面、已确认的透明白字 Logo、交互光影与宣传资料下载。完整软件首版仍在建设与验证。

## 页面与文件

| 目录或文件 | 用途 |
|---|---|
| `index.html` | 首页 |
| `problem.html`、`personal.html`、`enterprise.html` | 问题、首版与企业方向 |
| `trial.html`、`system.html`、`story.html` | 体验、统一基础与发展故事 |
| `proof.html`、`next.html`、`resources.html` | 进展、服务与资料下载 |
| `src/` | 共用样式、Three.js 交互与静态降级逻辑 |
| `public/brand/` | 当前主页使用的透明底白色字母 Logo，黄色 O 保留 |
| `public/downloads/` | 21 份资料 PDF、12 页演示稿 PPTX 及对应 PDF、完整 ZIP 与原始校验清单 |
| `public/fonts/`、`public/textures/`、`public/licenses/` | 字体、图像及深度图、第三方许可文本 |

## 本地运行

使用支持 Vite 8 的 Node.js（20.19+ 或 22.12+；本次使用 Node.js 24），依赖版本由 `package-lock.json` 固定。以下命令均从仓库根目录执行。

安装依赖：

```bash
npm --prefix website ci
```

启动本地开发预览，访问终端显示的地址：

```bash
npm --prefix website run dev -- --host 127.0.0.1
```

构建静态网站：

```bash
npm --prefix website run build
```

预览构建结果：

```bash
npm --prefix website run preview -- --host 127.0.0.1
```

构建输出在 `website/dist/`。页面、下载链接和运行时资源使用相对路径，可放在站点根目录或项目子目录。WebGPU 交互需要浏览器支持；静态背景与正文保留。源码页面需通过开发服务器访问。

## 维护与发布

- 后续官网代码修改在本目录进行；原工作区目录保留为迁入前快照。
- 宣传文案与下载材料继续按已确认产品需求维护，网页不得自行填入价格、发售日期或未经验证的产品能力。
- `public/downloads/` 是分发副本。更新材料时，从宣传资料源同步文件和清单，不直接改写 PDF 或清单中的摘要。
- 下载清单保留生成时的来源路径；这些路径相对原宣传资料源目录，用于追溯，不是本仓库中的运行依赖。此目录中的分发文件按文件名平铺。
- `node_modules/`、`dist/`、本地环境文件及旧内部评审页面不进入版本管理。
- 本次纳入源码不创建官网部署，也不更新 Framework v0.5 的标签或 Release。部署目标和上线状态需另行记录。

第三方代码、图像、字体及现有权利复核边界见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。相关许可文本随网站一同保留。
