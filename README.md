# TALOS

**从你的资料出发，把大模型用进真实工作。**

TALOS 围绕个人与企业的数据管理，提供与大模型协作的方法、学习路径和场景解决方案，帮助用户把资料和目标转化为可用成果。用什么模型、让 AI 参与多少，由用户选择。

> **当前阶段 · 2026-09-06**
> Framework v0.5 正式文稿已定稿。软件首版范围已基本确认，完整产品正在建设与验证，尚未正式发售。这个仓库是公开框架、论文、基础模板与官网源码的入口。

## 从这里开始

| 你想了解什么 | 阅读入口 |
|---|---|
| TALOS 的首版做什么 | [首版产品方向](#首版产品方向) |
| 官网页面、宣传资料与本地预览 | [官网源码与运行说明](website/README.md) |
| 怎样组织自己的上下文 | [基础模板](template/minimal-talos/README.md) |
| v0.5 正式框架 | [v0.5 中文正式版](whitepaper/TALOS_Manifesto_v0.5.md) · [English v0.5](whitepaper/TALOS_Manifesto_v0.5_EN.md) |
| 已发表的框架 | [v0.4 中文论文](whitepaper/TALOS_Manifesto_v0.4.md) · [PDF](whitepaper/TALOS_Manifesto_v0.4.pdf) |
| 早期产品探索 | [Dashboard 历史项目](https://github.com/Hanhan758/talos-dashboard) |

## 首版产品方向

首版将**规范、模板、学习与场景方案包**和 **Obsidian 插件**配套，帮助用户配置自己的大模型工作系统。

| 场景 | 从哪里开始 | 希望得到什么 |
|---|---|---|
| 资料变成果 | 选定已有资料，整理、检索并协作撰写 | 有依据、可以使用的报告、方案或内容 |
| 目标变交付 | 明确目标、组织资料、推进任务 | 可检查的成果与能够继续的项目记录 |
| 重复工作自动化 | 约定输入、步骤、输出与 AI 参与范围 | 可复用、由人检查结果的流程 |

三类场景均进入首版完整流程的建设范围。任务内引导和教程、示例、练习配套，让用户在完成工作时学习使用方法。

首阶段以 **macOS、单用户、单设备本地使用**为切入，Obsidian 笔记库为主，本地文件夹辅助。根据选定资料提出配置建议，对话补充后由用户确认；可以保留现有目录，或确认后整理。

计划支持 MD、TXT、PDF、Word、Excel、PPT 与图片文字识别。已有库适配、资料驱动配置、办公文档与图片识别，以及真实模型完整任务仍需补齐验证。这里的范围说明不等于对应功能已可安装使用。

## 统一基础与母版

TALOS 从第一版采用统一的数据标准、协作规范和接入接口。前期优先借鉴超级大脑中已由用户验证的真实数据与使用经验，现有部署包和插件作为实现母版，再按产品需求改造和验证。

基础规则围绕几个可理解的问题组织：资料来自哪里、当前目标是什么、哪些内容已经确认、任务进行到哪一步、谁决定下一步、成果是否有用。

用户上下文可以包含身份、目标、偏好、经验、项目、样例、工作流程和权限边界。既有八层模型是整理这些内容的方法参考；产品配置以用户的实际资料和工作为依据。

## 系统与仓库的关系

| 部分 | 职责 |
|---|---|
| TALOS Framework（本仓库） | 公开框架、版本化论文、基础模板与官网源码 |
| 首版规范方案包与插件 | 配置、资料管理、学习引导及三类工作流程的产品实现 |
| TALOS System | 统一的项目事实、状态、决定、验证与协作接口 |
| lili 与专业应用 | 按共同规则提供桌面入口或专业能力，兼容范围按版本说明 |
| TALOS Dashboard | 已停止维护的早期交互探索，保留代码与历史资料 |
| TALOS World | 在数据和工作基础上逐阶段发展的长期虚拟世界愿景 |

首版先服务个人及企业员工的单人使用，团队与组织协作后续建设。各部分保留自己的源码、数据归属和验证范围，仓库与原型的存在不代表所有能力已进入首版。

## 怎样评估进展

真实使用经验、工程测试、合成演示与真实用户成果分别看待。首版验证先检查成果是否满足实际用途，再比较总耗时和人工修改量。当前不提供未经测量的效率倍数或客户成功数字。

基础工作空间采用本地方式。模型或外部工具调用的数据流向取决于用户所选服务与配置，应明确发送范围。AI 的建议与已确认事实分开，关键决定由用户掌握。

## 开放内容、产品与服务

完整产品计划收费，采用版本许可；用户保留已购版本，后续更新可以免费或收费。服务方向包括自助、初始化指导和场景陪跑，也可按需加购。可选年度维护包含约定支持及付费升级优惠。

基础规范与部分实现开放，进阶实现与专业服务商业化。**本仓库现有内容继续按已有许可证授权**；其他组件依各自许可证。新产品的具体开放清单、价格、服务细则和发售时间另行公布。

## 论文与版本

- [v0.5 中文正式版](whitepaper/TALOS_Manifesto_v0.5.md)与[英文正式版](whitepaper/TALOS_Manifesto_v0.5_EN.md)：正式框架文稿；软件实现与验证仍按各自阶段说明。
- [v0.4 已发表论文](whitepaper/TALOS_Manifesto_v0.4.md)：保留原文及其版本。
- [v0.3 英文论文](whitepaper/TALOS_Manifesto_v0.3_EN.md)：历史英文版本。
- [既有 DOI 记录](https://doi.org/10.5281/zenodo.20567444)：仍对应既有发表记录，v0.5 不将旧 DOI 标作本版 DOI，未登记新的 DOI。

[v0.5 中文 PDF](whitepaper/TALOS_Manifesto_v0.5.pdf) · [English PDF](whitepaper/TALOS_Manifesto_v0.5_EN.pdf) · [版本说明](RELEASE_NOTES_v0.5.md)

论文、模型与历史模板中的术语按其发表时间理解。当前首版范围以本页的日期和阶段说明为准，不改写已发表论文以追认产品能力。

## 参与讨论

欢迎围绕资料组织、学习路径、场景方法、模板和接口提出具体问题或改进建议。讨论真实使用时请使用可分享的合成示例，不提交私人资料、密钥或未经授权的客户数据。

## English

**Start with your own data. Put language models to work.**

TALOS helps individuals and businesses manage their data, learn to collaborate with language models, and turn information and goals into useful results. Users choose their models, tools and level of AI involvement.

The first release combines a methods and learning package with an Obsidian plugin. It starts with one user on one macOS device. Source-to-deliverable, goal-to-delivery and repeatable workflows with human review are all in scope. The complete product is still being built and validated; it is not on sale yet.

This repository contains the public framework, papers, basic templates and [website source](website/README.md). The published papers retain their versions and license terms. Team collaboration, model subscription access and TALOS World are future directions.

## License

Framework material remains under **Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)**. See [LICENSE](LICENSE) for the applicable terms. This introduction does not change licenses for this repository or other TALOS components.

The website preserves its [third-party notices](website/THIRD_PARTY_NOTICES.md) and bundled license texts. These components retain their respective licenses.

作者：外脑玩家。仓库维护：[Hanhan758](https://github.com/Hanhan758)。既有论文的作者、引用与版本信息保留在各篇原文中。
