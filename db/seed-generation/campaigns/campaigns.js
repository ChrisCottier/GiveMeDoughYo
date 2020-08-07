const faker = require("faker");
const fs = require("fs");

function randomNumBetween(num1, num2) {
  let chosen = Math.floor(Math.random() * num2);

  while (chosen < num1) {
    chosen = Math.floor(Math.random() * num2);
  }

  return chosen;
}

console.log(randomNumBetween(1, 5));

//title

let string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.company.companyName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-title.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//tagline

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.company.catchPhrase();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-tagline.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//userId

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(1, 227);
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-UserId.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//duration

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(4, 10) * 10;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-duration.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//story

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.random.words(800);
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-story.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//contactEmail

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.internet.email();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-contactEmail.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//campaignGoal

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(1, 100) * 1000;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-campaignGoal.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//campaignTotal

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(1, 10000);
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-campaignTotal.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//perkCost

//1

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(1, 5) * 10;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-perk1Cost.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//2

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(5, 20) * 10;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-perk2Cost.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//3

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(20, 50) * 10;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-perk3Cost.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//4

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(50, 100) * 10;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-perk4Cost.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//5

string = "";
for (let i = 0; i < 1000; i++) {
  let num = randomNumBetween(1, 10) * 1000;
  string = string + `${num},` + "\n";
}

fs.writeFile("campaign-perk5Cost.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//perk

//1

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.commerce.productName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-perk1.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//2

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.commerce.productName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-perk2.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//3

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.commerce.productName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-perk3.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//4

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.commerce.productName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-perk4.txt", string, "utf8", (err) => {
  if (err) throw err;
});

//5

string = "";
for (let i = 0; i < 1000; i++) {
  let name = faker.commerce.productName();
  string = string + `\`${name}\`,` + "\n";
}

fs.writeFile("campaign-perk5.txt", string, "utf8", (err) => {
  if (err) throw err;
});
