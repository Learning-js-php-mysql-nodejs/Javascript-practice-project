function first(){
    console.log("hello");
}


function second(){
     first();
     console.log("virendra");
}

function third(){
    console.log("how are you");
}

function fourth(){
     second();
     console.log("uikey");
     third();
}

fourth();