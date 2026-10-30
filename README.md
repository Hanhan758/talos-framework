<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brand/lockup-horizontal-reverse.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/brand/lockup-horizontal.svg">
    <img alt="TALOS" src="assets/brand/lockup-horizontal.svg" width="347">
  </picture>
</p>

# TALOS

**从自己的资料出发，与智能体持续协作。**

TALOS 探索如何组织资料、目标与经验，让人和智能体在清楚的边界内协作，留下可核对、可接续的成果。用户选择自己的资料、模型和工具，并决定 AI 参与的范围。

这个仓库汇集 TALOS 的公开框架、理念与系统介绍、基础模板和官网源码。Framework v0.5 文稿已发布；资料库框架包和相关入口仍在建设与分阶段验证。独立 Agent OS 运行系统和 TALOS World 是后续规划，各部分的成熟度不同。

## 从这里开始

| 想了解什么 | 入口 |
|---|---|
| TALOS 的理念与协作方式 | [Agent OS 理念](docs/agent-os/manifesto.md) |
| 系统由哪些部分组成 | [系统与应用关系](docs/agent-os/system-map.md) |
| 目前已经做到什么、哪些还待验证 | [当前状态](docs/agent-os/status.md) |
| 未来的世界愿景 | [TALOS World](docs/agent-os/world.md) |
| 名称与文化来源 | [TALOS 的名称](docs/agent-os/origins.md) |
| 如何组织自己的资料 | [基础模板](template/minimal-talos/README.md) |
| 公开论文和历史版本 | [论文与版本](#论文与版本) |
| 官网源码和本地预览 | [官网说明](website/README.md) |

## 首版产品方向

当前工作重点是面向个人的资料库框架包：帮助使用者从新建资料库或已有资料出发，组织内容、检索来源，并与自己的智能体工具协作。本机候选已验证部分新建、接入和升级流程；Obsidian 内的显示与完整真实用户流程仍待核对。详细状态和范围见[当前状态](docs/agent-os/status.md)。

TALOS 控制底座已有特定本机基线的验收记录；跨 AI 的统一入口仍处于接口设计阶段。独立 Agent OS 运行系统尚未开始产品开发。产品入口、插件和长期探索分别推进，仓库中的文稿或示意图不代表所有能力已经集成或可供安装。

本仓库现有官网和宣传资料包含不同时期的说明；其中标注 2026 年 9 月的状态是当时的记录，当前进展以本仓库[状态页](docs/agent-os/status.md)及各组件实际发布说明为准。

## 统一基础与母版

TALOS 以资料、任务和协作规则为共同基础；资料库框架包以既有实践为参考逐步建设。各部分的可用范围、验证证据与当前状态分别说明，见[系统与应用关系](docs/agent-os/system-map.md)。

## 论文与版本

- [Framework v0.5 中文正式版](whitepaper/TALOS_Manifesto_v0.5.md) · [English v0.5](whitepaper/TALOS_Manifesto_v0.5_EN.md) · [版本说明](RELEASE_NOTES_v0.5.md)
- [v0.5 中文 PDF](whitepaper/TALOS_Manifesto_v0.5.pdf) · [English PDF](whitepaper/TALOS_Manifesto_v0.5_EN.pdf)
- [v0.4 已发表论文](whitepaper/TALOS_Manifesto_v0.4.md) · [PDF](whitepaper/TALOS_Manifesto_v0.4.pdf) · [既有 DOI](https://doi.org/10.5281/zenodo.20567444)
- [v0.3 英文论文](whitepaper/TALOS_Manifesto_v0.3_EN.md) · [GitHub Releases](https://github.com/Hanhan758/talos-framework/releases)

已发表论文保留原文与版本；既有 DOI 对应其原发表记录，不作为 v0.5 或本次更新的新 DOI。论文及历史模板中的术语按其发表时间理解。

## 系统与仓库的关系

[2026-09-10 Agent OS 公开版本快照](history/agent-os-2026-09-10/README.md)保留原文、图解、来源和校验清单。它是历史记录，其中的阶段描述不代表现在的产品状态。旧仓库的原始提交和文件仍可从 [talos-agent-os](https://github.com/Hanhan758/talos-agent-os) 查阅。

[TALOS Dashboard](https://github.com/Hanhan758/talos-dashboard) 是已停止维护的早期交互探索，仓库已归档。Obsidian 插件的源码及实际可下载版本见独立的 [TALOS Plugin 仓库](https://github.com/WAINAO-Haaper/talos-plugin)。

## 怎样评估进展

设计、代码、本机测试、真实使用和用户验收是不同的证据。每项能力按对应版本的验证范围说明，不以文稿、原型或演示代替实际结果；见[当前状态](docs/agent-os/status.md)。

## 开放内容、产品与服务

公开框架、Agent OS 内容与其他组件的使用边界分别见下方权利说明。历史产品和服务设想保留在[2026 年 9 月首页版本](https://github.com/Hanhan758/talos-framework/blob/17ec9b7c02d552dbf086a3fbdde31538eff21255/README.md)，不视为当前的价格或发售承诺。

## 参与讨论

欢迎在 [Framework Issues](https://github.com/Hanhan758/talos-framework/issues) 讨论公开内容；请使用可分享的示例，不提交私人资料、密钥或未经授权的客户数据。

## License

本仓库包含不同来源和权利范围的内容：

- Framework 原有材料继续按 [CC BY-SA 4.0](LICENSE) 授权；既有论文、模板及第三方内容仍按各自声明使用。
- Agent OS 历史快照中的原创文字与图解保留原有权利，未因迁入本仓库而改为开放许可；请阅读其 [NOTICE](history/agent-os-2026-09-10/NOTICE.md) 和 [PROVENANCE](history/agent-os-2026-09-10/PROVENANCE.md)。
- 本仓库新整理的 Agent OS 文档沿用其原有权利声明，详见[本目录权利说明](docs/agent-os/NOTICE.md)；[品牌标志与资产](assets/brand/README.md)、第三方素材和官网依各自的来源与许可处理。官网第三方材料详见 [THIRD_PARTY_NOTICES](website/THIRD_PARTY_NOTICES.md)。

仓库公开可阅读不等于所有内容具有相同的再利用许可。各部分的原有授权、适用的法定例外及 GitHub 平台权利继续适用。

## English

TALOS explores a way to organize personal information, goals and experience for ongoing work with AI agents. Framework v0.5 is published; the knowledge workspace package and related interfaces remain under development and staged validation. The independent Agent OS runtime and TALOS World are future directions. See the [current status](docs/agent-os/status.md) for the scope and limits of each part.

Framework materials retain their existing [CC BY-SA 4.0 license](LICENSE). The [Agent OS historical snapshot](history/agent-os-2026-09-10/NOTICE.md) retains its original rights notice; third-party materials remain subject to their own terms.

作者：外脑玩家 · 维护：[Hanhan758](https://github.com/Hanhan758)
