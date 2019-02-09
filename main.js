var myCar = {
    wheels: 4,
    doors: 4,
    engine: 1,
    name: "Jaguar"
}
var globalKey = 'carInLocalStorage';
var localCar = stringfyObj(myCar);
localStorage.setItem(globalKey, localCar);
function rewriteCar (){
    myCar.name =  "Audi";
    myCar.engine = 2;
    myCar.helloWorls = "";
    localCar = stringfyObj(myCar);
    localStorage.setItem(globalKey, localCar);
}

function stringfyObj(objToStringfy) {
    return JSON.stringify(objToStringfy);
}
function globalRemove(){
    removeCar(globalKey);
}
function removeCar(key){
  localStorage.removeItem(key);
}