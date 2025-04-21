let saldo = 0.0
let pin = 1234
let option
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
    //caso a opcao seja depositar dinheiro
    case 3:
      let validacao = Number(prompt(`Insira o seu pin`))
      while (validacao !== pin) {
        validacao = Number(prompt(`Pin invalido, tente novamente!`))
      }
      let deposit = Number(
        prompt('Depositar dinheiro \n\n Qual é o valor que deseja depositar?')
      )
      while ((deposit <= 0) | (deposit === '') | isNaN(deposit)) {
        deposit = prompt(
          `Valor invalido, Tente novamente!\n\n Insira o valor que deseja depositar`
        )
      }
      saldo += deposit //adicionar o valor depositado ao saldo
      let out = prompt(
        `\n\n Deposito de ${deposit.toFixed(
          2
        )} MT concluido com sucesso! \n\n 1.Continuar \n 2.Sair`
      )
      if (out == 2) {
        option = 7
      } //opcao para sair do programa
    case 6:
      const myAcount = Number(
        prompt(`
  1. Verificar saldo
  2. Alterar pin
  3. Voltar
  `)
      );
      switch (myAcount) {
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
  }

} while (option !== 7);
