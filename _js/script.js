function saibaMais(){
    var botao1 = document.getElementById('1')
    if(botao1.click){
        window.location.href = "_js/candidato1.html"
 
    }
}    
function saibaMais2(){
    var botao2 = document.getElementById('2')
    if(botao2.click){
        window.location.href = "_js/candidato2.html"
 
    }
}
function saibaMais3(){
    var botao3 = document.getElementById('3')
    if(botao3.click){
        window.location.href = "_js/candidato3.html"
 
    }
}
function saibaMais4(){
    var botao4 = document.getElementById('4')
    if(botao4.click){
        window.location.href = "_js/candidato4.html"
 
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }