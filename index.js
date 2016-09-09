var chalk = require("chalk");
var prompt = require('prompt');

var message = "Hello " + chalk.green("World") + ": It's time to explore your continents!!\n";
var continents = chalk.underline(chalk.bgRed("Africa") + chalk.bgBlack("Antarctica")+ chalk.bgYellow("Australia") +
chalk.bgBlue("Europe") + chalk.bgMagenta("The Americas"));
console.log(message + continents);

var favCont = function (){
  prompt.start();
  prompt.get(['What is your favorite continent'], function (err, result) {
    arr = ["Europe", "Antarctica", "Australia", "The Americas"];
    if (err) { return onErr(err); }
    if (arr.indexOf(result['What is your favorite continent']) != -1){
    console.log('You chose: ' + result['What is your favorite continent']);
  } else {
    console.log("Pick a real continent");
    favCont();
  }
});
  function onErr(err) {
    console.log(err);
    return 1;
  }
}

favCont()
  //arr = ["Europe" || "Antarctica" || "Australia" || "The Americas"]
  //arr.indexOf(result['What is your favorite continent'])