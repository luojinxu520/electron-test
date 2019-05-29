const {app, BrowserWindow} = require('electron')

let win = null

app.on('ready', () => {
    var WindowOption = {
        width:400,
        height:400,
        webPreferences:{
            nodeIntegration:true
       }
    }
    win = new BrowserWindow(WindowOption)
    win.loadFile('index.html')
    // 默认打开调试窗口
    win.webContents.openDevTools()
    win.on('closed',() => {
        win = null
    })
})



