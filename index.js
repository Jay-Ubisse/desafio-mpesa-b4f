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
