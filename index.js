<<<<<<< HEAD
let saldo = 200.0;
let pin = 1234;
let option;

function generateRandomNumbers() {
  let numeros = "";
  for (let i = 0; i < 6; i++) {
    numeros += Math.floor(Math.random() * 10);
  }
  return numeros;
}

=======
let saldo = 0.0
let pin = 1234
let option
>>>>>>> 6af276dd0364e0a3dc1f5cfbedee77523a720ca8
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
<<<<<<< HEAD
  );

  switch (option) {
    case 1:
      break;
    case 2: //Levantar dinheiro
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
            if (amount > saldo) {
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
      }
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (option !== 7);

/*
 if (amount > saldo) {
              alert(
                `Não tens saldo suficiente para Levantar ${amount.toFixed(
                  2
                )} MT. O seu saldo é de ${saldo} MT.`
              );
            } else {
              saldo -= amount;
              alert(
                `Acabou de Levantar ${amount.toFixed(
                  2
                )} MT, No agente ${agentNumber}. O seu saldo actual é de ${saldo.toFixed(
                  2
                )} MT`
              );
            }
*/
=======
  )
  switch (option) {
    //caso a opcaop seja depositar dinheiro
    case 3:
      let deposit = prompt(
        'Depositar dinheiro \n\n Qual é o valor que deseja depositar?'
      )
      while ((deposit <= 0) | (deposit === '') | isNaN(deposit)) {
        deposit = prompt(
          `Valor invalido, Tente novamente!\n\n Insira o valor que deseja depositar`
        )
      }
      saldo += Number(deposit)
      let out = prompt(
        `\n\n Deposito de ${deposit} MT concluido com sucesso! \n\n 1.Continuar \n 2.Sair`
      )
      if (out == 2) {
        option = 7
      } //opcao para sair do programa
  }
} while (option !== 7) //sair do programa
>>>>>>> 6af276dd0364e0a3dc1f5cfbedee77523a720ca8
