function addValue(num){
    var inputField = document.getElementById("inputField")
    inputField.value += num
}
function answer(){
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}
function allClear(){
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}
function oneClear(){
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0,-1)
}