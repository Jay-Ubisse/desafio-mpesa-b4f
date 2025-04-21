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
<<<<<<< HEAD


  switch
  (option){
  
  case 1:
  const númerodoreceptor = prompt ("Digita um numero valido");
    if(
      (númerodoreceptor.length === 9 && númerodoreceptor.charAt(1)==="4") ||
      (númerodoreceptor.length === 9 && númerodoreceptor.charAt (1) === "5")
    ){
    
      const transferirvalor = Numero (prompt ("Digita o valor a transferir"));
  
      if (transferirvalor){
  
      }
         
     } else {
      saldo -= transferirvalor;
  }
      /*if (transferirvalor>0 && transferirvalor <= saldo){
        alert (`transferencia de ${transferirvalor}5mt para ${númerodoreceptor} feita com sucesso`)
    }
  
  
  
  
  //porfavor introduza o pin*/
  }
} while (option !== 7);
=======
  switch (option) {
    case 1:  
    prompt (
          `
          Tranferir Dinheiro:
          
          1. Carteira Movel
          2. Bancos
          0. Voltar
          `
        )
      
      break;
    default:
    
      break;
  }

} while (option !== 7);


>>>>>>> 712d36edde2ede170ff38b301a0c0cd1a8e0b267
