console.log("start");
var a=100;
console.log(a);
function demo(){
    var b=1000;
    console.log(b);
    
    function demo2()
    {
        let c=200;
        
        function demo3()
        {
            console.log(c);
            console.log(b);
            
        }
        return demo3;
    }
    return demo2;
    
}
 demo()()()