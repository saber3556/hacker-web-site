let array_script=[];
let count=0;
let text=document.getElementById("text");
let container=document.getElementById("container");

for(h of hacking_script){
    array_script.push(h);
} 


window.addEventListener("keypress",()=>{
    container.scrollTop=container.scrollHeight;
    count++;
    if((array_script[count-1]=="{" || array_script[count-1]=="}" || array_script[count-1]==";" || array_script[count-1]==")" || array_script[count-1]=="/") && array_script[count]==" "){
        text.innerHTML += array_script[count-1] + '<br><br>';
        array_script[count]= '';
    }else{
        text.innerHTML += array_script[count-1]
    }
})