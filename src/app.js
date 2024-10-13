/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    let who = ["The horse", "My grandpa", "The mailman", "My rat"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my apple", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    document.getElementById("excuse").innerText = excuse;
  }

  console.log(generateExcuse());
  console.log("Hello Rigo from the console!");
};
