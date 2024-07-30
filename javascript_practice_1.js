"use strict";

function buildFunctions() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const res = buildFunctions();

res[0]();
console.log("first element");
res[1]();
console.log("secoond element");
res[2]();
console.log("third element");

function greetings(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hell0 " + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }
  };
}

const grettingEnglish = greetings("en");
const greetingSpanish = greetings("es");

grettingEnglish("John", "Doe");
greetingSpanish("Cecs", "Fabregas");
