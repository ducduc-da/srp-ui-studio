# SRP UI 演示交付

首期聚焦外部客户销售演示：对话首页 → 研究 Brief → 模拟生成 → 图文趋势报告 → 继续追问。

## 演示方法

1. 首页选择第一个示例问题。
2. 修改或确认研究范围，点击「确认并开始研究」。
3. 模拟进度结束后打开报告。
4. 查看趋势曲线、消费者声音、示例证据和产品机会矩阵。
5. 点击「展开行动计划」查看两周计划；「导出 PDF」调用浏览器打印，可选择另存为 PDF。

## 约束与边界

全部数据、用户身份、消费者语句和研究结论都是虚构演示内容。研究范围可编辑，但报告始终使用预设轻户外内容。附件仅展示本地文件名，不上传、不解析。追问是预设规则回复，不连接真实 AI 或数据库；刷新恢复初始状态。在线版本仅所有者可访问。

## 设计原则

白灰底与深墨色文字建立信息层级。绿色聚焦品牌和主动作，蓝色、橙色区分趋势。首页以对话为中心，报告以结论、图像、证据和行动建议组织。实现响应式折叠导航、打印样式、键盘输入、生成进度与空输入反馈。

## 图片来源

使用内置 ImageGen 生成，文件 public/outdoor.png。最终提示词：

Use case: photorealistic-natural. Asset type: Wide editorial campaign photograph for a fictional light outdoor fashion trend report. Two young adult East Asian hikers in lightweight white and chartreuse technical jackets with small backpacks moving candidly across a lush green grassy hillside, with distant mountains. Premium outdoor fashion magazine photography, natural realistic textures. 3:2 landscape photograph, ample surrounding landscape, candid movement. Beautiful natural sunlight, fresh relaxed outdoor mood. Realistic lightweight technical fabric, natural grass and skin texture. Exactly two adult hikers. No text, logos, watermarks or UI.

## 验证记录

本地首页 HTTP 200。未开展真实用户测试。WebMCP 页面导航工具使用能力检测与输入校验；当前环境未提供已验证的 WebMCP 调用上下文，未声称完成该契约验证。
