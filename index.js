let saldo = 0.0;
let pin = 1234;
let option;

do {
  option = Number(
    prompt(`
    M-pesa
      
    1. Transferir dinheiro
    2. Levantar dinheiro
    3. Depositar dinheiro
    4. Chamadas, sms e dados
    5. Comprar credelec
    6. Minha conta
    7. Sair
    `)
  );
switch (option) {
  case 4:
    let opcao = Number(prompt(
      `1.Comprar para meu número
       2.Comprar para outro número
       3.voltar`
    
    ));
    break;

}
}while(option!==7);



/*switch (opcao) {
  case 1 :
    
    break;
case 3 :

}*/
function validarPin(){
  let p1n2;
  if(pin===pin2){

  }
}
function ComprarmeuNumero(){
  let pacotes=Number(prompt(`
     1. 2MT = 100 SMS/1d
     2. 4MT = 180 SMS/3d
     3. 10MT = 500 SMS/7d
     4. 20MT = 1000 SMS/7d
     5. 40MT = 2000 SMS/30d
     6. voltar
     7. Menu Principal
    `)) 
    switch (pacotes) {
      case 1:
      Number(prompt("Digite o seu pin: "))
       if(pin === pin2){
        if (saldo>0.0){
        return saldo-= 2;
        }else{
          alert (`Saldo Insuficiente, por favor faça um depósito. O seu saldo é de ${saldo} MTS.`)
        }
       }else{
        alert("Pin Incorrecto,")
       }
        break;
    case 2:
        break;
        case 3:
          break;
    }
}
