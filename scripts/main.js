var brown = document.getElementsByClassName("brown");

for(var i=0; i<brown.length; i++) {
    let element = brown[i];
    element.innerHTML = "brown";
    let estyle = element.style;
       if(i%2===0){
        estyle.backgroundColor = "red";
    }else {
        estyle.backgroundColor = "green";
    }
    if(i == brown.length-1){
        estyle.backgroundColor = "violet";
    }
    if((i+1)%3===0){
        estyle.backgroundColor = "yellow";
    }
    estyle.border = "1px solid white";
    estyle.height = "40px";
    estyle.color = "white";
}

