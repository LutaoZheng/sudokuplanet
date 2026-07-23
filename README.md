# 数独星球 Sudoku Planet

Phaser 3 + TypeScript 的移动端优先数独小游戏 MVP。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：`npm run build`，输出位于 `dist/`。

## 微信小游戏接入

核心玩法不依赖 DOM。`src/platform/WechatAdapter.ts` 已集中预留微信存储、震动、分享和激励广告接口。正式发布时建议使用 Phaser 的微信小游戏构建适配方案，将 Vite 产物转换为小游戏工程，并在适配器中配置真实 `adUnitId`。不使用强制插屏广告。

## 架构

- `scenes/`：页面与流程
- `sudoku/`：生成、求解、棋盘视图
- `systems/`：玩家、奖励、成就
- `platform/`：平台能力隔离层
- `data/`：静态配置
- `ui/`：通用组件和视觉规范

皮肤、排行榜、签到、云存档和运营活动可在现有数据/系统层继续扩展。

## 100 关成长模式

游戏包含休闲、标准、挑战、大师四种模式，每种模式拥有独立的 100 关进度。关卡存档使用 `sudoku-planet-level-progress-v1`，记录当前关卡、已完成关卡、最佳时间和星级。

运行关卡配置完整性检查：

```bash
npm run verify:levels
```

测试指定关卡时，可在浏览器开发环境中清除本地存档后重新进入，或通过设置页切换模式。正常通关会自动推进当前模式的下一关，不会影响其他模式。

## 留存与游戏化系统

- 玩家等级称号与称号解锁金币
- 四个25关章节与章节内进度
- 时间、错误、提示共同决定的三星评价
- 提示券、棋盘主题和数字皮肤商城
- 20项普通及隐藏成就
- Day 1、Day 3、Day 7、Day 30连续挑战奖励

验证留存系统配置：

```bash
npm run verify:retention
```

## 游戏界面与上线前检查

- `ThemeManager` 将商城主题应用到游戏背景、棋盘、高亮、数字、工具栏和键盘
- `AudioManager` 提供可选音效接口；资源不存在时会安全跳过
- `GameModal` 提供暂停、重开、退出和提示券不足确认
- 关卡使用固定 seed，关键关卡会验证重复生成一致且只有唯一解
- `GameScene` 在 shutdown 时清理计时事件、延迟事件和 Tween
