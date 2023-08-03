function scuberGreetingForFeet(feet){

  // Write your code here!
    //Everything I want my function to do I put inside these curly braces
    //In this example, let's say I want my function, addFive, to add 5 to
    //any number I pass in (someNumber), but only IF the number is greater
    //than zero:
    if (feet <= 400) {
      return 'This one is on me!';
    } else if (feet <= 2000) {
      return 'That will be twenty bucks.';
    } else if (2000 < feet && feet <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else {
      return 'No can do.';
    }
  }


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.' : `No go.`
}

function switchOnCharmFromTip(charm){
  // Write your code here!
  switch(charm){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default:
      return 'Bye.'
  }

}