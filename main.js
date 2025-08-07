// main.js
import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

const isDev = !app.isPackaged

function createWindow() {
  const win = new BrowserWindow({
    width: 814,
    height: 464,
    minWidth: 814,
    minHeight: 464,
    frame: false, // 隐藏默认标题栏
    resizable: false,
    maximizable: false, 
    fullscreen: false,
    fullscreenable: false,// 禁用全屏
    webPreferences: {
      preload: path.join(import.meta.dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false
    }
  })

  // 监听最小化
  ipcMain.on('window-minimize', () => {
    console.log('[IPC] 最小化窗口')
    win.minimize()
  })

  // 监听关闭
  ipcMain.on('window-close', () => {
    console.log('[IPC] 关闭窗口')
    win.close()
  })


  // 加载页面
  if (isDev) {
    win.loadURL('http://localhost:5173')
    //win.webContents.openDevTools()
  } else {
    win.loadFile('dist/index.html')
  }

  return win
}

app.whenReady().then(() => {
  const win = createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})