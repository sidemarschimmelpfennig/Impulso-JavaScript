
let cont = 0;
let texto = '';
const CURENT = document.getElementById("currentNumber")
const TEXT_CURRENT = document.getElementById("NumberType")
const MESSAGE = document.getElementById("mensagem")
const INCREMENT = document.getElementById("increment") 
const DECREMENT = document.getElementById("decrement")

const increment = () =>{
    cont++;
    generalVerificate(cont)
    CURENT.innerHTML = cont;
}

const generalVerificate = (cont) =>{
    verificatePos(cont)
    incrementMessage(cont)
}

const decrement = () => {
    cont--;
    generalVerificate(cont)
    CURENT.innerHTML = cont;
}

const limpe = () => {
    dustructorMessage() 
    cont = 0  
    CURENT.innerHTML = cont
    setInterval(()=>{
        generalVerificate(cont)
    }, 2000)
}

const recaregue = () => {
    updateMessage()  
    setInterval(() => {
        window.location.reload();
        }, 4000) 
       
      
}
const incrementMessage = (value) =>{
  
   if (value >= 100){
        INCREMENT.classList.add('gost')
        texto = "Parabens: <br> Voce chegou a 100 que é o maior permitido volte,limpe ou resete seu codigo"
        MESSAGE.classList.add('Sucess')
        CURENT.classList.remove
        MESSAGE.innerHTML = texto
     
   }
   else if(value <= -100 ){
    DECREMENT.classList.add('gost')
    texto = "Parabens: <br> Voce chegou a -100 que é o menor numero permitido volte,limpe ou resete seu codigo"
    MESSAGE.classList.add('Sucess')
    CURENT.classList.remove
    MESSAGE.innerHTML = texto
   }
   else if((value == 90) ||(value == -90) ){
        texto = "Atençao: <br> faltam você esta chegando ao valor maximo/minimo"
        MESSAGE.classList.add('Warning')
        MESSAGE.innerHTML = texto
    }
    else{    
    
        texto = ""
        DECREMENT.classList.remove("gost")
        INCREMENT.classList.remove('gost')
        MESSAGE.classList.remove('Warning')
        MESSAGE.classList.remove('Error')
        MESSAGE.classList.remove("Sucess")
        MESSAGE.className.matchAll
        MESSAGE.classList.add('Message') 
        MESSAGE.innerHTML = texto
    }
   }
const dustructorMessage = () => {
        texto = "Atençao: Zerado Com Sucesso"
        MESSAGE.classList.add('Error')
        MESSAGE.innerHTML = texto
} 
const updateMessage = () =>{
    texto = "Ateção: <br> Aguarde um segundo seu Contador ja sera resetado "
    MESSAGE.classList.add("Sucess")
    MESSAGE.innerHTML = texto
}
function verificatePos(cont) {
    if(cont < 0){
        texto = "Esse Numero é Negativo"
        TEXT_CURRENT.innerText = texto
    }
    else {
        texto = ""
        TEXT_CURRENT.innerText = texto
    }
}