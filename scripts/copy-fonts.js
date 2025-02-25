const fs = require("fs");
const path = require("path");

const sourceDir = path.join(
  __dirname,
  "../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts"
);
const targetDir = path.join(__dirname, "../assets/fonts");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fontFiles = fs.readdirSync(sourceDir);
fontFiles.forEach((file) => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
});
