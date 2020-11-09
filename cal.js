function add(){
var a = parseInt(document.getElementById("nhapA").value)
var b = parseInt(document.getElementById("nhapB").value)
var c = a + b
document.getElementById("result").innerText = ("Ađition Resut = " + c)
}
function sub(){
    var a = parseInt(document.getElementById("nhapA").value)
    var b = parseInt(document.getElementById("nhapB").value)
    var d = a - b
    document.getElementById("result").innerText = ("Subtraction Resut = " + d)
}
function mul(){
    var a = parseInt(document.getElementById("nhapA").value)
    var b = parseInt(document.getElementById("nhapB").value)
    var e = a*b
    document.getElementById("result").innerText = ("Multiplition Resut = " + e)
}
function div(){
    var a = parseInt(document.getElementById("nhapA").value)
    var b = parseInt(document.getElementById("nhapB").value)
    var f = a/b
    document.getElementById("result").innerText = ("Divison Resut = " + f)
}