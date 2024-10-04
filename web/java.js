console.log("start");
var a=100;
console.log(window.a);
console.log(this.a);


let b=200;
console.log(b);

function  rio()
{
    var x=1000;
    console.log(x);
    let y=2000;
    console.log(y);
    console.log(a);
    console.log(b);
}
rio();


