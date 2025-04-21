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
  let value;
  const taxa = 10;
  

  switch (option) {
    case 1: // Transferência
      destino = Number(
        prompt(`SEM TAXAS Transferências de qualquer valor de M-pesa para Mpesa
          1. Carteiras Móveis
          2. Banco
          0. Voltar
          `)
      );
      break;
    default:
      alert(`Escolha uma opção válida`);
      break;
  } // fim case option

  switch (destino) {
    case 1: //Transferir para Carteiras Moveis
    const NUMERO = prompt ("Digita um número valido");
    if(
      (NUMERO.length === 9 && NUMERO.charAt(1)==="2") ||
      (NUMERO.length === 9 && NUMERO.charAt (1) === "3")
    ) { 
    
    const VALOR = Number(prompt(`Insira o valor`));
      if (VALOR > saldo) {
        alert(`Saldo insuficiente o seu saldo actual é de ${saldo}`)
      }
        
   const INSIRA_PIN = Number(prompt(`Insira o pin`));
  if (INSIRA_PIN === pin) {
      prompt(`Estas a tranferir ${VALOR} para ${NUMERO} e taxa é de 5mt`)
   } else { 
    INSIRA_PIN !== pin
        alert("Pin incoreto")
   }
   alert(`Confirmado, transferiu ${VALOR} para ${NUMERO} o seu saldo actual é de ${saldo}`)

    if (transferirvalor < saldo){
          alert()
      }
         
     } else {
      transferirvalor -= saldo;
  }

  
      break;
    case 2: // Transferir para banco
      bancaria = Number(
        prompt(` Escolha uma opção:
                1. Digitar NIB/ Numero de Conta
                2. Para procurar na lista
                `)
      );
      break;
    default:
      alert(`Escolha uma opção válida`);
      break; // destino
  }
  switch (bancaria) {
    case 1:
      let nibNumber;
      let accountNum;
      nibNumber = prompt("Insira o NIB/Número da Conta:");
      const isValidAccount =
        nibNumber.length === 21 &&
        [0].includes(nibNumber.charAt(0).charAt(1).charAt(2)) &&
        [1].includes(nibNumber.charAt(3));
      isValidAccount = accountNum.length === 9;
      if (isValidAccount === nibNumber) {
        value = Number(prompt("Insira o montante"));
        if (isNaN(value) || value <= 0) {
          alert("Montante inválido.");
        } else if (value > saldo) {
          alert( `Saldo insuficiente. Estás a tentar transferir ${value.toFixed(2)} MT, 
          mas só tens ${saldo.toFixed(2)} MT.`
          );
        } else {
          saldo = saldo - value;
          saldo = saldo - taxa;
          alert(
            `Transferência de ${value.toFixed(2)} MT para ${nibNumber} realizada com sucesso, e a taxa foi de ${taxa} MT. 
            Saldo actual: ${saldo.toFixed(2)} MT`
          );
        }
      } else if (isValidAccount === accountNum) {
        value = Number(prompt("Insira o montante"));
        if (isNaN(value) || value <= 0) {
          alert("Montante inválido.");
        } else if (value > saldo) {
          alert(
            `Saldo insuficiente. Estás a tentar transferir ${value.toFixed(2)} MT, mas só tens ${saldo.toFixed(2)} MT.`
          );
        } else {
          saldo = saldo - value;
          saldo = saldo - taxa;
          alert(
            `Transferência de ${value.toFixed(2)} MT para ${accountNum} realizada com sucesso, e a taxa foi de ${taxa} MT. 
            Saldo actual: ${saldo.toFixed(2)} MT`
          );
        }
      } else {
        alert(" Número inválido.");
      }
      break;
    case 2:
      alert(`1. ${nibNumber}`);

      break;

    default:
      alert(`Escolha uma opção válida`);
      break;
  }
} while (option !== 7);
