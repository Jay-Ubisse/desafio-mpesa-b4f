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
    prompt (
          `
          Tranferir Dinheiro:
          
          1. Carteira Movel
          2. Bancos
          0. Voltar
          `
        )
        const númerodoreceptor = prompt ("Digita um numero valido");
    if(
      (númerodoreceptor.length === 9 && númerodoreceptor.charAt(1)==="4") ||
      (númerodoreceptor.length === 9 && númerodoreceptor.charAt (1) === "5")
    ){
    
      const transferirvalor = (prompt ("Digita o valor a transferir"));
  
      if (transferirvalor){
  
      }
         
     } else {
      saldo -= transferirvalor;
  }
      /*if (transferirvalor>0 && transferirvalor <= saldo){
        alert (`transferencia de ${transferirvalor}5mt para ${númerodoreceptor} feita com sucesso`)
    }*/

    const numero = prompt ("Digita um numero valido");
    if(
      (numero.length === 9 && numero.charAt(1)==="2") ||
      (numero.length === 9 && numero.charAt (1) === "3")
    ){
    
      const transferirvalor = valor (prompt ("Digita o valor a transferir"));
  
      if (transferirvalor){
  
      }
         
     } else {
      transferirvalor -= saldo;
  }
      /*if (transferirvalor>0 && transferirvalor <= saldo){
        alert (`transferencia de ${transferirvalor}5mt para ${númerodoreceptor} feita com sucesso`)
    }*/
      
      break;
    default:
    
      break;
  }

} while (option !== 7);


