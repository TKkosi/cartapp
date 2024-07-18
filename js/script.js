let qty1 = document.getElementById('qty1')
let qty2 = document.getElementById('qty2')
let qty3 = document.getElementById('qty3')
let total = document.getElementById('total')

function add(ind){
    let qty= document.getElementById(`qty${ind}`)
    let fade= document.getElementById(`fade${ind}`)
    qty.innerText = parseInt(qty.innerText) + 1
    fade.style.opacity= "100%"
}

function sub(ind){
    let qty= document.getElementById(`qty${ind}`)
    let fade= document.getElementById(`fade${ind}`)
    if(parseInt(qty.innerText) >1){
        if(parseInt(qty.innerText) ==2){
            fade.style.opacity= "10%"

        }
        qty.innerText = parseInt(qty.innerText) - 1

    }

    // if (ind == 1){
    //     console.log(qty1.value);
    //     qty1.innerText = parseInt(qty1.innerText) - 1
    //     updateTotal()
    // }
    // else if  (ind == 2){       
    //     qty2.innerText = parseInt(qty2.innerText) - 1
    //     updateTotal()
    // }
    // else if  (ind == 3){
    //     qty3.innerText = parseInt(qty3.innerText) - 1
    //     updateTotal()
    // }
}

function updateTotal(params){
    total.innerText = (parseInt(qty1.innerText) *100) + (parseInt(qty2.innerText) *20) + (parseInt(qty3.innerText) *50)
}
updateTotal()
//let click = document.getElementById('heart')
function changeColor(ind) {
    if(document.getElementById(`heart${ind}`).style.color == "red"){
        document.getElementById(`heart${ind}`).style.color= "black";
    }
    else{
        document.getElementById(`heart${ind}`).style.color= "red";
    }
}    