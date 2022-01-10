var currentNumWapper = document.getElementById('currentNum')
var currentNum = 0

function add() {
    currentNum ++
    currentNumWapper.innerHTML = currentNum
}

function del() {
    if (currentNum!=0){
        currentNum --
        currentNumWapper.innerHTML = currentNum
    }
}