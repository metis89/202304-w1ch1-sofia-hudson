
let counter = document.querySelector("#counter");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let restart = document.querySelector("#restart");
let counterDisplay = 0;

increment.addEventListener("click", () => {
    if (counterDisplay >= 15) {   
      counter.textContent = counterDisplay;
    }else{
  counterDisplay++;
  counter.textContent = counterDisplay;
  }
});

decrement.addEventListener("click", () => {
    if (counterDisplay <= 0) {   
      counter.textContent = counterDisplay;
    }else{
  counterDisplay--;
  counter.textContent = counterDisplay;
  }  
  });

restart.addEventListener("click", () => {
    counterDisplay = 0;
    counter.textContent = counterDisplay;
 });



