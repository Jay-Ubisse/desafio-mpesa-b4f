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
  let destino;
  let bancaria;
  switch (option) {

    case 1: // Transferência
      destino = Number(
        prompt(`SEM TAXAS Transferências de qualquer valor de M-pesa para Mpesa
          1. Carteiras Móveis
          2. Banco
          `));
      break;// option
    default: Number(prompt(`Escolha uma opção válida`));
    break;
      }// fim case option


      switch (destino) {
        case 1: //Transferir para Carteiras Moveis
          break;
        case 2: // Transferir para banco
          bancaria = Number(
            prompt(` Escolha uma opção:
                1. Digitar NIB/ Numero de Conta
                2. Para procurar na lista
                `));
          break;
        default: Number(prompt(`Escolha uma opção válida`));
          break;// destino
          const isValidAccount = (nibNumber.length === 21 && [0].includes(nibNumber.charAt(0).charAt(1).charAt(2)) &&  
          [1].includes(nibNumber.charAt(3)) || (accountNum.length===9));
          if (isValidAccount) {
            const value = Number(prompt("Insira o montante"));
          }

      }// fim case destino

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


