const fs = require("fs");

try {
  const data = fs.readFileSync("./sample.txt", "utf8");
  console.log({ data });
  const content = data
    .split(" ")
    .filter((data) => data)
    .join(" ")
    .slice(0, -2);
  console.log({ content });
  fs.writeFile("./sample.txt", content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
} catch (err) {
  console.error(err);
}
