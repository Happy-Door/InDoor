document.addEventListener("DOMContentLoaded", function () {

  // 创建浮动按钮容器
  const box = document.createElement("div");
  box.id = "scroll-buttons";
  box.innerHTML = `
    <button id="to-top">↑</button>
    <button id="to-bottom">↓</button>
  `;
  document.body.appendChild(box);

  // 回到顶部
  document.getElementById("to-top").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 滚动到底部
  document.getElementById("to-bottom").onclick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

});
