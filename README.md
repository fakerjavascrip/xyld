## 官网项目（React + Vite）

### 本地启动

```bash
npm install
npm run dev
```

### 构建

```bash
npm run build
```

### 素材说明

- 页面使用 `public/img/1.png` ~ `public/img/7.png` 作为首屏与各业务模块的主要视觉内容。

### 发布到 GitHub Pages（免费）

本项目已配置 GitHub Actions 自动部署到 Pages（见 `.github/workflows/deploy.yml`）。

1. 在 GitHub 新建仓库（建议命名如 `xyld`），把本项目 push 到仓库的 `main` 分支
2. 打开仓库 Settings → Pages
3. 在 **Build and deployment** 里，Source 选择 **GitHub Actions**
4. 以后每次 push 到 `main` 都会自动发布

说明：
- 站点使用 `HashRouter`，在 GitHub Pages 下刷新/直达子页面不会 404

