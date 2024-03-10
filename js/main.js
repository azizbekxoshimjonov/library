//https://65eaf57143ce16418932e936.mockapi.io/library


function setBoock(e){
    e.preventDefault()
    let boock = {
        title: e.target.title.value,
        img: e.target.img.value,
        price: e.target.price.value,

    }
    fetch('https://65eaf57143ce16418932e936.mockapi.io/library',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(boock)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
let elList = document.querySelector('.list')
fetch('https://65eaf57143ce16418932e936.mockapi.io/library')
    .then((res)=> res.json())
    .then((data)=> {
        data.forEach(element => {
            let newLi = document.createElement('li')
            newLi.innerHTML = `
            <img src=${element.img} width="100px" alt="">
            <p>${element.price}</p>
            <button onclick="DelCar(${element.id})">${element.title}</button>
            <button class="btn btn-info " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setId(${element.id})">Edit</button>
            `

            elList.appendChild(newLi)
            

            
        });

    })

    function DelCar(id){
        fetch(`https://65eaf57143ce16418932e936.mockapi.io/library/${id}`,{
            method:'DELETE',
            headers:{'content-type':'application/json'},
          
        })
        .then((res)=> res.json())
        .then((data) => console.log(data))
    }
    function setId(id){
        window.localStorage.setItem('id', id)
    }

    function carEdit(e) {
      let id =  window.localStorage.getItem('id')
        e.preventDefault()
        let boock = {
            title: e.target.title.value,
            img: e.target.img.value,
            price: e.target.price.value,
    
        }
        fetch(`https://65eaf57143ce16418932e936.mockapi.io/library/${id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(boock)
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }
