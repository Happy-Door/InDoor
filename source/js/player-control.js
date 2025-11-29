document.addEventListener("DOMContentLoaded", enhanceButtons);
document.addEventListener("pjax:complete", enhanceButtons);

function enhanceButtons() {
    document.querySelectorAll('.aplayer').forEach(player => {
        const orderBtn = player.querySelector('.aplayer-icon-order');
        const loopBtn = player.querySelector('.aplayer-icon-loop');

        if (!orderBtn || !loopBtn) return;

        // 设置提示（鼠标悬停提示）
        orderBtn.title = "顺序播放";
        loopBtn.title = "循环模式（点击切换 单曲/列表）";

        // 默认图标
        orderBtn.innerText = "🔁";  // 顺序播放

        // 根据 loop 模式切换图标
        player.aplayer.on('listswitch', () => {
            updateLoopIcon();
        });
        player.aplayer.on('ended', () => {
            updateLoopIcon();
        });

        updateLoopIcon();

        function updateLoopIcon() {
            const mode = player.aplayer.options.loop; // 'all', 'one', 'none'

            if (mode === 'one') {
                loopBtn.innerText = "🔂"; // 单曲循环
            } else if (mode === 'all') {
                loopBtn.innerText = "🔁"; // 列表循环
            } else {
                loopBtn.innerText = "➡️"; // 不循环（很少见）
            }
        }
    });
}
