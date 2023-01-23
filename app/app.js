function greet(){
    var table = document.getElementById("to-do-table");
    var todo = document.getElementById('to-do-item').value;

    console.log(`adding new to-do ${todo}`);
    
    // 1. create row element
    var tr = document.createElement('tr')
    var td = document.createElement('td')

    var todoTxt = document.createTextNode(todo)

    td.appendChild(todoTxt)
    tr.appendChild(td)
    table.appendChild(tr)
    // 2. append row element to table

}