const { app, BrowserWindow, Menu } = require("electron");
const path = require("node:path");

function createWindow() {
  const window = new BrowserWindow({
    width: 500,
    height: 820,
    minWidth: 360,
    minHeight: 620,
    backgroundColor: "#120b24",
    autoHideMenuBar: true,
    title: "TermAPK",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  window.loadFile(path.join(__dirname, "principal.html"));
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
