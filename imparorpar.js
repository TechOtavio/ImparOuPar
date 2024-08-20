var contador = 0;

function imparorpar(){
    var numero = Number.parseFloat(prompt("Digite o numero escolhido: "));
    let Novamente = "";
    if(numero == Number(numero)){
        if(numero % 2 == 0){
            alert("Seu número é par!");
        }else{
            alert("Seu número é impar!");
    }
}else{
    alert("Isso não é um número, digite um número por favor.");
}
Novamente = prompt("Você deseja testar outro número? (S/N)");
if(Novamente == "S"){
    imparorpar();
}else if(Novamente == "N"){
    alert("Tudo bem, Até a proxima!");
}
};
imparorpar();