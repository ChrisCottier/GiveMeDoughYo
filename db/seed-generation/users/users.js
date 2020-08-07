const faker = require("faker");
const fs = require("fs");

let string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.name.firstName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-firstName.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.name.lastName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-lastName.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.internet.email();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-email.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.address.city();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-city.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.address.state();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-state.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.hacker.phrase();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-shortDescription.txt", string, "utf8", (err) => {
  if (err) throw err;
});

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.lorem.paragraph();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("user-aboutMe.txt", string, "utf8", (err) => {
  if (err) throw err;
});
