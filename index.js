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
