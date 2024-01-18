const fs = require("fs");
const path = require("path");

// Read
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Create
fs.writeFile(path.join(__dirname, "files", "reply.txt"), "reply.", (err) => {
  if (err) throw err;
  console.log(`wirting file completed.`);
});

// Update
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "response.",
  (err) => {
    if (err) throw err;
    console.log(`append file completed.`);
  }
);

// Delete
fs.unlink(path.join(__dirname, "files", "test.txt"), (err) => {
  if (err) throw err;
  console.log("file delete successfully");
});

process.on("uncaughtException", (err) => {
  console.log(`there was uncaughterror ${err}`);
  process.exit(1);
});
