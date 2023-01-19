let food = [
    
        {
            "image":"./burger.jpg",
            "name":"Burger",
            "category":"Snac",
            "calorie":400,
            "isJunkFood":"Yes"
        },
         {
             "image":"./cereal.jpg",
            "name":"Cereal",
            "category":"Breakfast",
            "calorie":250,
            "isJunkFood":"No"
        },
         {
             "image":"friedrice.jpg",
            "name":"Fried Rice",
            "category":"Snac",
            "calorie":400,
            "isJunkFood":"Yes"
        },
         {
             "image":"noodles.jpg",
            "name":"Noodles",
            "category":"Snac",
            "calorie":400,
            "isJunkFood":"Yes"
        },
         {
             "image":"omlette.jpg",
            "name":"Omlette",
            "category":"Breakfast",
            "calorie":250,
            "isJunkFood":"No"
        },
         {
             "image":"palakpaneer.jpg",
            "name":"Palak paneer",
            "category":"Food",
            "calorie":300,
            "isJunkFood":"No"
        },
         {
             "image":"pancakes.jpg",
            "name":"Pancakes",
            "category":"Breakfast",
            "calorie":400,
            "isJunkFood":"Yes"
        },
         {
             "image":"pasta.jpg",
            "name":"Pasta",
            "category":"Breakfast",
            "calorie":400,
            "isJunkFood":"Yes"
        },
         {
             "image":"salad.jpg",
            "name":"Salad",
            "category":"Breakfast",
            "calorie":250,
            "isJunkFood":"No"
        },
         {
             "image":"sandwitch.jpg",
            "name":"Sandwitch",
            "category":"Snac",
            "calorie":400,
            "isJunkFood":"Yes"
        },
    
]

 

let newfood1= food.filter((element)=>{

    if(element.category==="Breakfast")
    {
        return element;
    }

})

let newfood2= food.filter((element)=>{

    if(element.calorie<300)
    {
        return element;
    }

})
let newfood3= food.filter((element)=>{

    if(element.isJunkFood==="Yes")
    {
        return element;
    }

})

var app = document.querySelector("#food-items"); 

document.querySelector("#btn1").addEventListener("click",()=>{
    const show=food.map(function(element){
    return `<div class="card">
    <img src="${element.image}" alt="img">
    <div class="wrap">
       <p class="para">Name:${element.name}</p>
       <p class="para">Category:${element.category}</p>
       <p class="para">Calories:${element.calorie}</p>
       <p class="para">Junk Food:${element.isJunkFood}</p>
    </div>
    </div>`

})
app.innerHTML=show
})

// console.log(Array.from(document.getElementsByClassName("btn")))

document.querySelector("#btn2").addEventListener("click",()=>{
    const show1=newfood1.map(function(element){
   return `<div class="card">
    <img src="${element.image}" alt="img">
    <div class="wrap">
       <p class="para">Name:${element.name}</p>
       <p class="para">Category:${element.category}</p>
       <p class="para">Calories:${element.calorie}</p>
       <p class="para">Junk Food:${element.isJunkFood}</p>
    </div>
    </div>`
})
app.innerHTML=show1
})

document.querySelector("#btn3").addEventListener("click",()=>{
    const show2=newfood2.map(function(element){
    return `<div class="card">
    <div class="wrap">
    <img src="${element.image}" alt="img">
    </div>
    <div class="wrap">
       <p class="para">Name:${element.name}</p>
       <p class="para">Category:${element.category}</p>
       <p class="para">Calories:${element.calorie}</p>
       <p class="para">Junk Food:${element.isJunkFood}</p>
    </div>
     </div>`
})
app.innerHTML=show2
})

document.querySelector("#btn4").addEventListener("click",()=>{
    const show3=newfood3.map(function(element){
    return `<div class="card">
    <img src="${element.image}" alt="img">
    <div class="wrap">
       <p class="para">Name:${element.name}</p>
       <p class="para">Category:${element.category}</p>
       <p class="para">Calories:${element.calorie}</p>
       <p class="para">Junk Food:${element.isJunkFood}</p>
    </div>
    </div>`

})
app.innerHTML=show3
})