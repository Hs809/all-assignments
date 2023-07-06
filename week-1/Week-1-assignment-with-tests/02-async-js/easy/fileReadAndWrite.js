const fs = require("fs");

try {
  const data = fs.readFileSync("./3-read-from-file.md", "utf8");
  console.log(data);
  const content = data + "\nMy name is hitesh pal";
  fs.writeFile("./3-read-from-file.md", content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
} catch (err) {
  console.error(err);
}
