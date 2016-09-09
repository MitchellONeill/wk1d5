
var setWage = function(){
  min = Math.ceil(0);
  max = Math.floor(100000);
  wage = Math.floor(Math.random() * (max - min)) + min;
  return wage;
}

module.exports = {
  wage: setWage(),
  employment: function(wage) {
    if (this.wage < 20000) {
      job = "part time employment";
    }
    if (this.wage > 20000 && this.wage < 50000) {
      job = "full time employment";
    }
    if (this.wage > 50000){
      job = "developer";
    }
    return job;
  }
};