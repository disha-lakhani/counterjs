let count1=localStorage.getItem("like")||0

document.getElementById("count1").innerHTML=count1
let like=()=>{
    count1++
    document.getElementById("count1").innerHTML=count1
    localStorage.setItem("like",count1)
}
document.getElementById("btn1").addEventListener("click",like)

let count2=localStorage.getItem("subscribe")||0

document.getElementById("count2").innerHTML=count2
let subscribe=()=>{
    count2++
    document.getElementById("count2").innerHTML=count2
    localStorage.setItem("subscribe",count2)
}
document.getElementById("btn2").addEventListener("click",subscribe)

let count3=localStorage.getItem("comment")||0

document.getElementById("count3").innerHTML=count3
let comment=()=>{
    count3++
    document.getElementById("count3").innerHTML=count3
    localStorage.setItem("comment",count3)
}
document.getElementById("btn3").addEventListener("click",comment)

let count4=localStorage.getItem("ratting")||0

document.getElementById("count4").innerHTML=count4
let ratting=()=>{
    count4++
    document.getElementById("count4").innerHTML=count4
    localStorage.setItem("ratting",count4)
}
document.getElementById("btn4").addEventListener("click",ratting)