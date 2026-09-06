# 仓库介绍图片

内容基线：2026-09-06。图片用于 Framework README，采用精确文字和原生 SVG 排版，PNG 为兼容展示导出；目前为本次仓库改动的审阅稿。

| 图片 | 展示内容 | 可编辑文件 |
|---|---|---|
| [TALOS 概览](talos-overview.png) | 定位、已发布框架、当前网站与宣传资料数量 | [SVG](talos-overview.svg) |
| [首版范围](talos-first-release.png) | 资料、共同基础、三类建设流程与长期方向 | [SVG](talos-first-release.svg) |

## 事实依据

| 图片中的内容 | 来源 |
|---|---|
| Framework v0.5 中英文文稿已发布 | [正式 Release](https://github.com/Hanhan758/talos-framework/releases/tag/v0.5) 与 [版本说明](../../RELEASE_NOTES_v0.5.md) |
| 官网 10 页 | [Vite 构建入口](../../website/vite.config.js)中的 10 个 HTML 页面 |
| 21 份宣传资料 PDF | [下载清单](../../website/public/downloads/download-manifest-v1.1-review.1.json)的 21 条 documents；不含单独的演示稿 PDF |
| 12 页可编辑演示稿 | [PPTX](../../website/public/downloads/talos-overview-presentation-v1.1-review.1.pptx) 中实际 12 个 slide 文件 |
| 首阶段、母版、AI 选择、三类流程及长期方向 | [当前仓库介绍](../../README.md)和[网站首版说明](../../website/personal.html)，承接已确认产品需求 |
| Logo | 原样复用[官网透明白字资产](../../website/public/brand/talos-logo-transparent-light-wordmark-20260906.png)，SHA-256 为 `f9b647b5bae2ae7ac1151905476418f68377aad3ba4b3f1338bc4eb55abdc804` |

图片中的首版流程是已确认的建设范围，完整软件首版仍在建设与验证，尚未正式发售。团队协作、模型订阅接入和 TALOS World 标为长期方向。更新事实时同步修改 SVG、PNG、替代文本与本文来源。

## 视觉依据

沿用 TALOS 视觉语言系统的语义令牌：`semantic.light.text.primary`、`semantic.light.surface.canvas`、`semantic.light.text.secondary`、`semantic.light.border.default`、`semantic.light.action.current.bg`；字体角色为 `font.family.brand`。SVG 的颜色值来自上述令牌解析，Logo 保留批准原图。PNG 已检查文字、留白和完整边界；此检查不代替用户视觉确认。
