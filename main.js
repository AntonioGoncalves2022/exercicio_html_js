const form = document.getElementById('form-numero');

let CampoA = document.getElementById("CampoA");
let CampoB = document.getElementById("CampoB");

form.addEventListener("submit", function(e){
    console.log(CampoA)
    console.log(CampoB)
    e.preventDefault();

    if(CampoA.valueAsNumber > CampoB.valueAsNumber){
        alert("O Campo A não pode ser maior que o Campo B")
}else{
    alert("Preenchimneto correto");
}
})


