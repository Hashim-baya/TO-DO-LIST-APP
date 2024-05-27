let name = "NAME : HASHIM BAYA NASSORO " ;
const age = "AGE : 18 " ;
let occupation = "OCCUPATION : STUDENT" ;

console.log (name) ;
console.log (age) ;
console.log (occupation) ;

        //DATA TYPES
        //STRINGS

let message = "HELLO " + "HASHIM " + "AND " + "WELCOME " ;
console.log (message);

message = "HELLO, HASHIM" ;
console.log ("THE MESSAGE IS : " + message  ) ;

let my_name = "HASHIM" ;
let topic = "JavaScript" ;
console.log (my_name + " is learning " + topic + " today" ) ;

         //Numbers (integers and floats) in JavaScript

let num1 = 10 ;
let num2 = 10.5 ; 
console.log (num1 + num2);

         //UNDEFINED

let first_name ;
console.log (first_name) ;

         //TYPE CONVERSION

let num = "7" ;
let num3 = 3 ;
console.log (Number(num) + num3 ) ;

        //ARRAYS
        //PUSH METHOD

let birds = ["Owl", "Eagle"];
birds.push("Sparrow");
console.log(birds);

       //POP METHOD

let bird = ["Owl", "Eagle", "Sparrow"];
bird.pop();
console.log(bird);

       //UNSHIFT METHOD

let fishes = ['Salmon', 'Goldfish', 'Tuna'];
fishes.unshift("Sardine");
console.log(fishes);

       //SHIFT METHOD

fishes.shift();
console.log(fishes);

     //CONTROL FLOWS
     //IF ELSE 

let balance = 5000;
if(balance > 300){
        console.log("You can withdraw money");
}else{
        console.log("You have insufficient funds");
}

       //SWITCH

let day = "Monday";
switch(day){
        case "Monday":
                console.log("Today is Monday");
                break;

        case "Tuesday":
                console.log("Today is Tuesday");
                break;
                
        case "Wednasday":
                console.log("Today is Wednasday");
                break;
                
        default:
                console.log("Today is not a weekday");
                break;

}

        //FOR LOOP

let i;
    for(i=0; i <= 10; i++){
        console.log(i);
    }

    for(i=0 ; i <= 100; i+=5 ){
        console.log(i);
    }

       //WHILE LOOP

let j = 0;
    while (j <= 10){
        console.log(j);
        j++;
    }

      //FUNCTIONS

function greet(name, weather){
        console.log("Hello " + name + " !");
        console.log("It is " + weather + " today"); 
}
     greet("HASHIM", "Sunny");

function check_age (age){
        if(age >= 18){
                return "You are an adult";
        }else{
                return "You are a minor";
        }
}
      console.log(check_age(19));
      console.log(check_age(17));

function calculate_square (side){
        let area = side * side;
        console.log("The area is " + area);

        let perimeter = 4 * side ;
        console.log("The perimeter is " + perimeter);
}
       calculate_square(8);

       //OBJECTS

let my_book = {
        author : "HASHIM BAYA NASSORO",
        title : "JAVA SCRIPT INTRODUCTION",
        publication : "DECEMBER 2015",
       
}
      console.log(my_book);
           
          //ACCESSING OBJECT ITEMS

      console.log(my_book.author);
      console.log(my_book.title);
      console.log(my_book.publication);

          //ADDING NEW ITEMS
          
        my_book.year = 2015;
        my_book.publisher = "CODE WITH HASHIM";
        console.log(my_book);

          //MODIFYING ITEMS

        my_book.author = "ZAKIA KAHASO";
        console.log(my_book);

          //DELETING ITEMS
        
        delete my_book.year;
        console.log(my_book);

          //CHECKING IF PROPERTY EXISTS IN OBJECT

        console.log("author" in my_book);
        console.log("year" in my_book);


          //EXE 1

        let person = {
                name : "HASHIM BAYA NASSORO",
                age : 19,
                greet : function  (){
                        console.log("My name is " + person.name  + " and I'm  " + person.age + " years old");
                }
        }
           console.log(person);
           console.log(person.greet());

        

       






