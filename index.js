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
    //Opção Levantar Dinheiro
    case 2:
      withdrawMoney();
      break;
    //caso a opcao seja depositar dinheiro
    case 3:
      depositarDinheiro();
      break;
    case 6:
      opcaoMinhaConta();
      break;
    default:
      alert("Opção inválida");
  }
} while (option !== 7);

function depositarDinheiro() {
  let validacao = Number(prompt(`Insira o seu pin`));
  while (validacao !== pin) {
    validacao = Number(prompt(`Pin invalido, tente novamente!`));
  }
  let deposit = Number(
    prompt("Depositar dinheiro \n\n Qual é o valor que deseja depositar?")
  );
  while ((deposit <= 0) | (deposit === "") | isNaN(deposit)) {
    deposit = prompt(
      `Valor invalido, Tente novamente!\n\n Insira o valor que deseja depositar`
    );
  }
  saldo += deposit; //adicionar o valor depositado ao saldo
  let out = prompt(
    `\n\n Deposito de ${deposit.toFixed(
      2
    )} MT concluido com sucesso! \n\n 1.Continuar \n 2.Sair`
  );
  if (out == 2) {
    option = 7;
  } //opcao para sair do programa
}

function opcaoMinhaConta() {
  do {
    option = Number(
      prompt(` 
    1.Verificar saldo
    2.Alterar o pin
    3.Sair
    `)
    );
    switch (option) {
      case 1:
        let nr = Number(prompt("digite o pin"));

        if (nr === pin) {
          alert(`O seu saldo é de ${saldo.toFixed(2)} MT`);
        } else {
          alert("pin errado");
        }
        break;
      case 2:
        const lastPIN = Number(prompt("Insira o pin anterior"));
        if (lastPIN === pin) {
          const newPIN = Number(prompt("Insira o novo pin"));
          if (newPIN !== pin) {
            alert("PIN alterado com sucesso");
            pin = newPIN;
          } else {
            alert("O pin Actual deve ser diferente do Antigo");
          }
        } else {
          alert("PIN incorreto, tente novamente");
        }
    }
  } while (option !== 3);
}

function withdrawMoney() {
  const raiseMoney = Number(
    prompt(`
         M-pesa
         
         1. No Agente
         2. Na ATM
         3. Voltar
         `)
  );
  switch (raiseMoney) {
    case 1: //Levantar do Agente
      const agentNumber = prompt("Insira número do Agente");

      if (agentNumber.length === 6) {
        const amount = Number(prompt("Insira o montante para levantar"));
        if (amount + 10 > saldo) {
          alert("Saldo insuficiente.");
        } else {
          saldo -= amount;
          alert(
            `Você levantou ${amount} MT do agente ${agentNumber}. A taxa foi de 10Mt, o seu  novo saldo é: ${
              saldo - 10
            } Mt`
          );
        }
      } else {
        alert("Número de agente inválido. O número deve ter 6 dígitos.");
      }
      break;
    case 2: // Levantar do ATM
      const atm = Number(
        prompt(`
             M-pesa
           
             1. Ponto 24
             2. Carteira Movel/SIMO
             3. Voltar
           `)
      );
      switch (atm) {
        case 1:
          const ponto24 = Number(prompt("Insira o seu PIN"));
          if (ponto24 === pin) {
            alert(`Insira o código ${generateRandomNumbers()} no ATM`);
          } else {
            alert("O PIN está incorreto");
          }
          break;
        case 2:
          const simoRede = Number(prompt("Insira o seu PIN"));
          if (simoRede === pin) {
            alert(`Insira o código ${generateRandomNumbers()} no ATM`);
          } else {
            alert("O PIN está incorreto");
          }
          break;
        case 3:
          break;
        default:
          alert("Opção inválida");
      }
      break;
    case 3: // Voltar
      break;
    default:
      alert("Opção inválida");
      break;
  }
}

function generateRandomNumbers() {
  let numeros = "";
  for (let i = 0; i < 6; i++) {
    numeros += Math.floor(Math.random() * 10);
  }
  return numeros;
}
