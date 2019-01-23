"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 1200, height: 900 });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://localhost:9001/index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => (mainWindow = null));
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
electron_1.app.on("activate", () => {
    if (mainWindow === null)
        createWindow();
});
