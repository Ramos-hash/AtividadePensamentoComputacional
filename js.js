let peso = parseFloat(prompt("digite o seu peso"))
let altura = parseFloat(prompt("digite a sua altura"))


function calcularIMC(peso, altura){
   return peso/(altura*altura)
} 
function classificarIMC(imc){
    if(imc > 40){
        alert ("Obesidade III "+imc )
    }else if(imc >= 35){
    alert ("Obesidade II")
    }else if (imc >= 30){
    alert ("Obesidade I")
    }else if(imc >= 25){
    alert ("Levemente acima do peso")
    } else if(imc >= 18.6){
    alert ("Normal")
    }else(imc <= 18.5)
        alert ("Abaixo do peso")}
           

                    
                
            
        
    


function gerarRelatorio(peso, altura){
    let imc =  calcularIMC(peso, altura)
    classificarIMC(imc)
}

gerarRelatorio(peso, altura)
