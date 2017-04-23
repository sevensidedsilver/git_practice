//create a function that keeps track of the passenger count on a bus
//an array of 2 digit arrays represents the change at each stop
//The first number is the passenger count that enters the bus
//the second number, the count of passengers who leave the bus

var number = function(busStops){
   var count = 0;
   for (var i = 0; i < busStops.length; i ++) {
     count = count + busStops[i][0];
     count = count - busStops[i][1];
   
   }
   
   return count;
   
   
}