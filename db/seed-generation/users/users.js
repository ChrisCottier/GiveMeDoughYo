const faker = require("faker");
const fs = require("fs");

let string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.name.firstName();
  string = string + name + "\n";
}

fs.writeFile("user-firstName.txt", string, "utf8", (err) => {
  if (err) throw err;
});
