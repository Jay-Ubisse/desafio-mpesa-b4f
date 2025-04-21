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
    case 1:
      let receberNumero = prompt("Digita um número válido:");
      if ((receberNumero.length === 9 && receberNumero.charAt(1) === "6")||
      (receberNumero.length === 9 && receberNumero.charAt(1) === "7")){
      alert ("Você está transferindo dinheiro para uma conta E-mola");
      }
      else{
        prompt ("Número de conta inválido, por favor introduza novamente o número de conta");
      }
      
      let valor = prompt ("Digita o valor:");
      if (valor>saldo) { alert ("Falha, o saldo da sua conta M-pesa é insuficiente para completar a transaccao.")
        
      } else {
      }
      
      let pin1 = Number(prompt("Por favor introduza o PIN:"));

      if (pin === pin1) { 
        alert ("Confirmado. Transferiste o valor com sucesso");
      } else { 
        alert ("PIN incorrecto, por favor verifica o PIN e tenta novamente")
      }
        
        
      }
      
      break;
  
    
  }
 while (option !== 7);
