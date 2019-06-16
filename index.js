const { app, BrowserWindow } = require("electron");

let win;
console.log(BrowserWindow);
function createWindow() {
    win = new BrowserWindow({
        title: "BeatABox",
        width: 500,
        height: 450,
        icon:  "./icon.jpg",
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("./ui/index.html");
    win.setMenu(null);
    win.on("closed", () => win = null);
}

app.on("ready", createWindow);
app.on("windows-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (win === null) createWindow();
});