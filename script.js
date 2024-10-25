let num=0.0;
let k=1;
let l=0.0;
function adding(){
    let ch=document.getElementById("in1")
    let n=Number(document.getElementById("in2").value)
    let text=(ch.value).toUpperCase();
    
    switch(text){
        case 'O':
            num+=10*n;
            break;
        case 'A+':
            num+=9*n;
            break;
        case 'A':
            num+=7*n;
            break;
        case 'B+':
            num+=6*n;
            break;
        case 'B':
            num+=5*n;
            break;
        case 'C+':
            num+=4*n;
            break;
    }
    l+=n;
    document.getElementById("count").textContent=k+"-value added"
    k++;
    ch.value="";
    document.getElementById("in2").value="";
    
}
function calculate(){
    let ans=num/l;
    let ans1=ans.toFixed(2);
    document.getElementById("result").textContent=ans1
    num=0;
    document.getElementById("count").textContent="0-value added"
    k=1;
    document.getElementById("result").style.borderStyle="solid";
}