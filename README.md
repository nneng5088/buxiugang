# 浙江中五钢管制造有限公司官网静态站

这是一个纯静态中文企业官网，不需要后台、数据库或登录系统。所有页面都可以直接用浏览器打开，也可以部署到 Cloudflare Pages 或 GitHub Pages。

## 文件结构

- `index.html`：首页
- `about.html`：关于我们
- `products.html`：产品中心
- `seamless-pipe.html`：不锈钢无缝管
- `welded-pipe.html`：不锈钢焊管
- `sanitary-pipe.html`：不锈钢卫生管
- `pipe-fittings.html`：不锈钢管件
- `quality.html`：质量控制
- `factory.html`：工厂实力
- `packing.html`：包装发货
- `news.html`：新闻动态
- `contact.html`：联系我们
- `assets/css/style.css`：网站统一样式
- `assets/js/main.js`：手机端导航脚本
- `TODO.md`：后续需要补充的资料清单

## 本地查看

方法一：直接双击 `index.html`。

方法二：在当前文件夹启动静态服务：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

## 预览密码

当前网站加了一个简单的前端预览密码，方便先发给同事看效果。

注意：这是静态网站的前端密码门，只适合临时预览，不适合作为严格安全保护。预览密码请向项目负责人索取，不要写入公开仓库。

## 如何替换图片

1. 在项目中创建图片目录，例如 `assets/images/`。
2. 把真实图片放进去，例如 `assets/images/factory-gate.jpg`。
3. 找到页面中的占位区域，例如：

```html
<div class="placeholder">此处后续放置厂门照片。</div>
```

4. 替换为：

```html
<img src="assets/images/factory-gate.jpg" alt="浙江中五钢管制造有限公司厂门">
```

建议图片命名使用英文或拼音，避免空格，例如：

- `factory-gate.jpg`
- `workshop.jpg`
- `seamless-pipe.jpg`
- `iso-certificate.jpg`
- `loading-container.jpg`

## 如何修改文字

直接打开对应 `.html` 文件，搜索需要修改的文字后替换即可。

注意：网站当前内容只使用旧官网公开资料。新增数据前建议先确认来源，避免展示不准确参数。

## 如何新增页面

1. 复制一个现有页面，例如 `news.html`。
2. 改名为新页面文件名，例如 `case.html`。
3. 修改页面标题、正文内容和导航。
4. 在每个页面顶部导航和底部快速导航中增加新页面链接。

## 部署到 Cloudflare Pages

1. 把当前项目上传到 GitHub 仓库。
2. 登录 Cloudflare。
3. 进入 Pages，选择连接 GitHub 仓库。
4. 构建设置保持为空：
   - Build command：不填
   - Build output directory：`/`
5. 部署完成后，Cloudflare 会提供一个临时域名。
6. 如需绑定正式域名，再按 Cloudflare 提示添加 DNS。不要在未确认前修改 DNS。

## 部署到 GitHub Pages

1. 把当前项目上传到 GitHub 仓库。
2. 进入仓库 Settings。
3. 打开 Pages。
4. Source 选择 Deploy from a branch。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 生成访问地址。

## 维护提醒

- 上传证书、营业执照、检测报告前，请先打码敏感信息。
- 不要把 `.env`、私钥、Cookie、Token、钱包文件、客户隐私文件放进网站目录。
- 客户案例、出口案例、项目照片发布前，确认是否允许公开。
