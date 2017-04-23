// create a function to print the names of people (from an argument array) who like something on a site

function likes(names) {
  var statement = "no one likes this";

  if (names.length === 1) {
    statement = names.toString() + " likes this";
    }
  
  if (names.length === 2) {
    statement = names.join(' and ') + " like this";
  }
  
  if (names.length === 3) {
    names = names.join(' and ');
    names = names.split(' ');
    names[0] = names[0] + ",";
    names.splice(1, 1);
    names = names.join(' ');
    statement = names + " like this";
    return statement;
  }
  
  if (names.length > 3) {
    var firstTwo = names[0] + ", " + names[1];
    statement = firstTwo + " and " + (names.length - 2) + " others like this";
  
  
  }
  
  return statement;
  
  
}