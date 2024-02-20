// elementos
const alturaInput = document.querySelector("#height");
const pesoInput = document.querySelector("#weight");
const calcularBtn = document.querySelector("#calcular");
const cleanBtn = document.querySelector("#cleanBtn");
const backBtn = document.querySelector("#backBtn");

const formContainer = document.querySelector("#formContainer");
const resultContainer = document.querySelector("#result-container");


function calcularIMC(){
    let altura = alturaInput.value.replace(",", ".");
    let peso = pesoInput.value.replace(",", ".");
    const imcResult = document.querySelector("span");
    
    if((isNaN(altura) && isNaN(peso)) || (isNaN(altura) && peso) || altura && isNaN(peso)){
        alert("IMC Inválido, tente novamente!");

    }else if(!altura && !peso){
        alert("Introduza altura e o peso!");

    }else{

        let imcTotal = peso / (altura * altura);
        imcResult.innerHTML = "";

        if(imcTotal >= 18.5 && imcTotal <= 24.9){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "green";
        }else if(imcTotal >= 25.0 && imcTotal <= 29.9){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "orangered";
        }else if(imcTotal >= 30.0 && imcTotal <= 34.9){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "red";
        }else if(imcTotal >= 35.0 && imcTotal <= 39.9){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "red";
        }else if(imcTotal >= 40.0){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "red";
        }else if(imcTotal < 18.4){
            imcResult.innerHTML += imcTotal.toFixed(2);
            imcResult.style.color = "orange";
        }
exibirResultado()
    
    }
}


calcularBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    calcularIMC();
})

backBtn.addEventListener("click", ()=>{
    resultContainer.classList.add("hide");
    formContainer.classList.remove("hide");
})


function exibirResultado(){
    formContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}