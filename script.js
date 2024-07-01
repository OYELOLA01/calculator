let results =document.getElementById("inputtext")


let calculate=(number)=>{
    results.value+=number;
}

let Result=()=>{
    try{
        results.value=eval(results.value);
    }
    catch(err) {
        alert("Enter the valid Input")
    }
}

function Ac(){
    results.value=''
}
function del(){
    results.value=results.value.slice(0,-1)
}