// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow
} = require('electron')
const url = require('url')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 500,
    height: 450,
    backgroundColor: '#323232',
    title: 'CGDI 0.0.5',
    center: true,
    resizable: true,
    webPreferences: {
      nodeIntegrationInWorker: true,
      textAreasAreResizable: false,
      webgl: true,
      webaudio: false,
      preload: '/js/particles.min.js',
      preload: '/js/particlesconfig.js',
    }
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    slashes: true,
    protocol: 'File',
  }))
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})