/**
 * 岐黄之道 — 中医门户网站
 * 交互逻辑脚本
 * 所有可点击元素统一使用 alert('功能开发中') 作为临时交互
 */

/**
 * 统一的提示函数：alert('功能开发中')
 * @param {Event} e - 点击事件（可选）
 */
function showAlert(e) {
  if (e) {
    e.preventDefault();
  }
  alert('功能开发中');
}

/**
 * 搜索框回车事件处理
 * @param {KeyboardEvent} e
 */
function handleSearchEnter(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    alert('功能开发中');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('🌿 岐黄之道 — 中医门户网站已就绪');
  console.log('   知身自查 · 未病先防');
});
