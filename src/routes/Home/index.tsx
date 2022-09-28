import React from "react";

function Home() {
  return (
    <main className="main">
      <h1 className="title">D-One 大前端团队</h1>

      <p className="description">
        Create more than User Experience(UX), So we named XUX.
      </p>

      <div className="grid">
        <a href="/xux/done" className="card">
          <h2>D-One &rarr;</h2>
          <p>全流程开发平台 🛫️</p>
        </a>

        <a href="http://localhost:3000/" className="card">
          <h2>乐高 &rarr;</h2>
          <p>至强 UI PASS 💪 </p>
        </a>

        <a href="http://localhost:9002/" className="card">
          <h2>基础组件 &rarr;</h2>
          <p>基础组件站点 ⛰️</p>
        </a>

        <a href="http://localhost:9000/" className="card">
          <h2>业务组件 &rarr;</h2>
          <p>业务组件站点 🔨</p>
        </a>

        <a href="http://localhost:9001/" className="card">
          <h2>XUX-Charts &rarr;</h2>
          <p>可复用图表样式 📈 </p>
        </a>

        <a
          href="https://dev-one.cn/#/zh-cn/one-cli/"
          className="card"
        >
          <h2>团队 Cli &rarr;</h2>
          <p>Quick start ⚡️</p>
        </a>

        <a href="http://localhost:8000/" className="card">
          <h2>团队 Utils &rarr;</h2>
          <p>统一公共工具 🔧 </p>
        </a>

        <a href="http://localhost:8002/" className="card">
          <h2>团队 Hooks &rarr;</h2>
          <p>统一公共Hooks 🔥 </p>
        </a>

        <a href="http://localhost:4001/" className="card">
          <h2>团队 RichText</h2>
          <p>统一 RichText</p>
        </a>

        <a href="http://localhost:3001/" className="card">
          <h2>Formily &rarr;</h2>
          <p>统一表单搭建 🏠 </p>
        </a>

        <a href="http://localhost:3000/" className="card">
          <h2>OneAPI &rarr;</h2>
          <p> API 自动化 🤖️ </p>
        </a>

        <a href="http://localhost:7000/" className="card">
          <h2>Eagle-eye &rarr;</h2>
          <p>统一埋点平台 🐛 </p>
        </a>

        <a href="http://localhost:3003/public/index.html" className="card">
          <h2>XUX-OSS &rarr;</h2>
          <p>静态资源上传 📁 </p>
        </a>

      </div>
    </main>
  );
}

export default Home;
