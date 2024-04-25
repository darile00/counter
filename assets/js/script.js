let counter = 0;

//select the container of the counter
let countOutput = document.querySelector(".countOutput");

//create new element
let count = document.createElement('h1');
count.innerHTML = counter;

//connet the new element to the body
countOutput.appendChild(count);

//select the container of the buttons
let btnContainer = document.querySelector(".btnContainer");

//creatte new buttons
let increment = document.createElement("button");
let decrement = document.createElement("button");

increment.textContent = "+";
increment.className = "btn"

decrement.textContent = "-";
decrement.className = "btn";


//append the two new buttons to the page
btnContainer.appendChild(increment);
btnContainer.appendChild(decrement);


//targetEvent
increment.addEventListener("click", e =>{
    count.innerHTML = ++counter;
});

decrement.addEventListener("click", e =>{
    if(counter == 0){
        alert("Operation not available. The counter is set to 0")
    }else{
        count.innerHTML = --counter;
    }
})


