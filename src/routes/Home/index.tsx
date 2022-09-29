import React from "react";

function Home() {
  return (
    <main className="main">
      <h1 className="title">D-One 大前端团队</h1>

      <p className="description">
        Create more than User Experience(UX), So we named XUX.
      </p>

      <div className="grid">
        <a href="https://one.dev-one.cn" className="card">
          <h2>D-One &rarr;</h2>
          <p>全流程开发平台 🛫️</p>
        </a>

        <a
          href="https://dev-one.cn/#/zh-cn/one-cli/"
          className="card"
        >
          <h2>团队 Cli &rarr;</h2>
          <p>Quick start ⚡️</p>
        </a>

        <a href="https://components.dev-one.cn" className="card">
          <h2>基础组件 &rarr;</h2>
          <p>基础组件站点 ⛰️</p>
        </a>

        <a href="https://utils.dev-one.cn" className="card">
          <h2>团队 Utils &rarr;</h2>
          <p>统一公共工具 🔧 </p>
        </a>

        <a href="https://hooks.dev-one.cn" className="card">
          <h2>团队 Hooks &rarr;</h2>
          <p>统一公共Hooks 🔥 </p>
        </a>

        <a href="https://oneapi.dev-one.cn" className="card">
          <h2>OneAPI &rarr;</h2>
          <p> API 自动化 🤖️ </p>
        </a>

        <a href="https://legao.dev-one.cn" className="card">
          <h2>乐高 &rarr;</h2>
          <p>至强 UI PASS 💪 </p>
        </a>

        <a href="https://eagle.dev-one.cn" className="card">
          <h2>Eagle-eye &rarr;</h2>
          <p>统一埋点平台 🐛 </p>
        </a>

      </div>
    </main>
  );
}

export default Home;
