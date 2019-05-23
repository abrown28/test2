const { ipcMain, app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false
    },
    frame: true
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  return win;
}

app.on('ready', createWindow)



ipcMain.on('new-window', (event, arg) => {
  console.log(arg) // prints "ping"
  //event.reply('asynchronous-reply', 'pong')
  win = createWindow();
  console.log(win.webContents.id);
});

ipcMain.on('log', (event, arg) => {
    console.log(arg);
})