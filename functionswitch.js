
var number = 2;
 switch (number)
 {
     case 1: 
     var k = 2;
     first(k);
     
     break;
     
     case 2: 
     var k = 1;
     first(k);

      
     break;
     

     case 3: 
     var k = 3;
     first(k);
         
     break;
     
     default: 
         console.log("please enter valid number");
     
 }


function first(veriable){
    switch(veriable){

        case 1: 
          console.log("variable first");

        break;

        case 2: 
          console.log("variable second");

        break;

        case 3: 
          console.log("variable third");

        break;

        default:
            console.log("variable not here");


    }
}