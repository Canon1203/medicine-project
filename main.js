const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // 隐藏默认标题栏
    titleBarStyle: 'hidden',
    // Windows / Linux 上添加原生窗口控件（覆盖层）
    titleBarOverlay: {
      color: '#5C3A1A',        // 控件区域背景色
      symbolColor: '#D4A55A',  // 控件图标颜色（最小化/最大化/关闭）
      height: 40               // 控件区域高度
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
