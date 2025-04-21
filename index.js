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
      
      break;
    default:
    
      break;
  }

} while (option !== 7);


