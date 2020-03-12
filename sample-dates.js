Date.prototype.getWeek = function() {
    var dt = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
};

var today = new Date();
var currentWeekNumber = today.getWeek();
console.log(currentWeekNumber);
