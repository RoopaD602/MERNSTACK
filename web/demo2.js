/*console.log("********higher order function***********");
function max(a,b,c)
{
   return  c(a,b);
    
}
let data1=max(10,20,function(x,y)
{
    return x+y;
    
})
let data2=max(200,100,function(a,b)
{
   return a*b;
    
})
console.log(data1);
console.log(data2);

console.log("********callback function**********");

function rio()
{
    console.log("i am function");
    lio();
}
function lio()
{
    console.log("i am second function");
    tio();
    
}
function tio()
{
    console.log("i am third function");
    
}
rio();*/

var car=new vehicles("honda","white","2010","UK");
console.log(car);

function vehicles(model,color,year,country)
{
    this.model=model;
    this.color=color;
    this.country=country;
}


function foo()
{
    let x=(y=0);
    x++;
    y++;
    return x;
}
console.log(foo(),typeof x,typeof y);

var y=1;
if(function f() {})
{
    y+=typeof f;
}
y()






