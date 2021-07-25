'use strict';
// alert('hi');

function Book(name,price){
    this.name=name;
    this.price=price;
    this.max=500;
    this.min=1;
    this.pages=randomNumber(this.min,this.max);
    Book.arrOfBook.push(this);
    
}

let total=0;
let totla=document.getElementById('tot')

// console.log(pages);
Book.arrOfBook=[];

let form = document.getElementById('form');
form.addEventListener('submit',formSubmit);
function formSubmit(event){
    event.preventDefault();
    let newName= event.target.name.value;
    let e = document.getElementById("price");
    let newPrice = e.options[e.selectedIndex].value;
    total+=price;
    new Book(newName,newPrice)
    // console.log(Book.arrOfBook);
    // console.log(event);
    // console.log(newPrice);
    for (let i = 0; i < Book.arrOfBook.length; i++) {
        
        Book.arrOfBook[i].table();
        
    }
    localstorage()
    console.log(Book.arrOfBook);
    // totla.textContent=total;

    
}

function randomNumber(min,max){
    return Math.floor(Math. random() *(max-min+1)+min)
}

let table=document.getElementById('tably')

Book.prototype.table=function(){

    for (let i = 0; i < Book.arrOfBook.length; i++) {
        
        
        let tr1= document.createElement('tr');
        table.appendChild(tr1);
        let td1=document.createElement('td');
        tr1.appendChild(td1);
        td1.textContent=Book.arrOfBook[i].name;
        
        let td2= document.createElement('td');
        tr1.appendChild(td2);
        td2.textContent=Book.arrOfBook[i].pages;

        let td3=document.createElement('td');
        tr1.appendChild(td3);
        td3.textContent=Book.arrOfBook[i].price;
    }
}


function localstorage(){
let conver=Book.arrOfBook;
let stringify=JSON.stringify(conver)
localStorage.setItem('Book',stringify)
}

function getloclStorage(){

    let data=localStorage.getItem('Book')
    let parsed=JSON.parse(data);
    if(parsed){
        for (let i = 0; i < parsed.length; i++) {
        
            let book= new Book(parsed[i].name,parsed[i].price)
            
        }
    }
    for (let i = 0; i < Book.arrOfBook.length; i++) {
        
        Book.arrOfBook[i].table();
        
    }
}
getloclStorage();
