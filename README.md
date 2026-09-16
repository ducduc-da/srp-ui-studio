# SRP UI Studio

Social Research Pro 的产品界面原型，包含首页、智能问数、专题分析、资产中心、工作区和图表回答等页面状态。

## 本地运行

环境要求：Node.js 22.13+、pnpm。

```bash
pnpm install
pnpm dev
```

启动后打开终端显示的地址，通常为 `http://localhost:3000/`。

## 构建检查

```bash
pnpm build
```

## UI 规范

新增或修改产品页面前，请先阅读：

- [`docs/ui-guidelines/README.md`](docs/ui-guidelines/README.md)
- [`docs/ui-guidelines/AGENTS.md`](docs/ui-guidelines/AGENTS.md)
- [`docs/ui-guidelines/06-验收清单.md`](docs/ui-guidelines/06-验收清单.md)

设计变量位于 `docs/ui-guidelines/tokens.json` 与 `docs/ui-guidelines/tokens.css`。

## 说明

本项目中的用户身份、研究数据、对话内容和分析结论均为演示内容，不代表真实研究结果。
