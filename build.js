var electronInstaller = require("electron-winstaller");

// In this case, we can use relative paths
var settings = {
  // Specify the folder where the built app is located
  appDirectory: "./nmw-win32-x64",
  // Specify the existing folder where
  outputDirectory: "./nmw-built-installers",
  // The name of the Author of the app (the name of your company)
  authors: "Ajay Kumbhare.",
  // The name of the executable of your built
  exe: "./nmw.exe"
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(
  () => {
    console.log(
      "The installers of your application were succesfully created !"
    );
  },
  e => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`);
  }
);
