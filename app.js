let arr = [];
let model = {};

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let cnic = document.getElementById("cnic");
let phone = document.getElementById("phone");
let tableBody = document.getElementById("tableBody");
let searchInp = document.getElementById("searchInp");
let searchKey = document.getElementById("searchKey");


function renderTable(){
    tableBody.innerHTML = "";
    for(var i = 0; i < arr.length; i++){
        var x = arr[i];
    tableBody.innerHTML += `
    <tr>
    <td>${x.firstName}</td>
    <td>${x.lastName}</td>
    <td>${x.age}</td>
    <td>${x.cnic}</td>
    <td>${x.phone}</td>
    </tr>
    `; 
}
}

function btnClick() {
model.firstName = firstName.value;
model.lastName = lastName.value;
model.age = age.value;
model.cnic = cnic.value;
model.phone = phone.value;

arr.push({...model});

firstName.value= "";
lastName.value= "";
age.value= "";
cnic.value= "";
phone.value= "";

console.log(arr);
renderTable()
}