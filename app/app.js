function greet(){
    var nameElm = document.getElementById('tname');
    console.log(nameElm)
    var elem = document.getElementById("name")
    elem.innerHTML='<b>'+nameElm.value+'</b>'
}