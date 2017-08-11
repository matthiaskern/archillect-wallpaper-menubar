const path = require('path');
const {app, shell, Menu, Tray} = require('electron');

const iconPath = path.join(__dirname, 'assets/iconTemplate.png');


const contextMenu = Menu.buildFromTemplate([
  {
    label: 'Feedback',
    type: 'normal',
    click() {
      shell.openExternal('https://github.com/matthiaskern/archillect-wallpaper-menubar');
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Quit',
    type: 'normal',
    role: 'quit'
  }
]);


app.on('ready', () => {
  app.dock.hide();

  const changeWallpaper = require('archillect-wallpaper')
  const tray = new Tray(iconPath);

  tray.setToolTip('Archillect');

  tray.on('click', () => changeWallpaper());
  tray.on('right-click', () => tray.popUpContextMenu(contextMenu));
});
