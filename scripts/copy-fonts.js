const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "../assets/fonts");
const targetDir = path.join(__dirname, "../dist/fonts");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fontFiles = fs.readdirSync(sourceDir);
fontFiles.forEach((file) => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
});
