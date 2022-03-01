var elForm = document.querySelector(".form")

var elInput = document.querySelector(".input")

var elReset= document.querySelector(".reset")

var juft = []

var toq = []

elForm.addEventListener("submit", function(event){
    event.preventDefault();

    if(elInput.value % 2 == 0){
    elReset.textContent = "bu son juft son"
    juft.push(elInput.value)
    console.log(juft)
 
    }
    else{
    elReset.textContent = "bu son toq son"
    toq.push(elInput.value)
    console.log(toq);

    }
  });

