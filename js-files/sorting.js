let arr = new Array();
let bars = new Array();

function createArray(){
    var arr_size = document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
    for(let i=0; i<no_of_bar; i++){
        arr.push(Math.floor(((Math.random())*100))*2);
        let bar = document.createElement("div");
        bars.push(bar);
        bars[i].classList.add("mystyle");
        var element = document.getElementById("bar");
        element.append(bars[i]);
    }
    for(let i=0; i<no_of_bar; i++){
        bars[i].style.height = arr[i]+"px";
    }
}
function swap(a,b){

    bars[a].style.height = arr[b] + "px";
    bars[b].style.height = arr[a] + "px";
    
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

async function bubbleSort(){
    var arr_size = document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
    var speed = document.querySelector("#spd");
    spd_val = Number(speed.max) - Number(speed.value) + Number(speed.min);
    let flag = 1;
    while(flag){
        flag = 0;
        for(let i=0; i<no_of_bar;i++){
            if(arr[i+1] < arr[i])
            {
                bars[i+1].style.background = "red";
                bars[i].style.background = "red";
                flag = flag + 1;
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), spd_val)
                });
                let result = await promise;
                swap(i,i+1);
                bars[i+1].style.background ="mediumblue";
                bars[i].style.background = "mediumblue"; 
            }    
        }        
    }
   document.getElementById("back").style.backgroundColor = "green";
}

document.getElementById("newarray").addEventListener("click",createArray);
document.getElementById("bubblesort").addEventListener("click",bubbleSort);
