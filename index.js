let saldo = 0.0;
let pin = 1234;
let option;
let pacotes;
function isValidatedPassword() {
  let password = Number(prompt(" digite o pin"));
  if (pin !== password) {
    alert("pin errado");

  } else {
    return true;
  }

}
function BuyMeuNumber() {
  option = Number(prompt(`
              1. 2MT = 100 SMS/1d
              2. 4MT = 180 SMS/3d
              3. 10MT = 500 SMS/7d
              4. 20MT = 1000 SMS/7d
              5. 40MT = 2000 SMS/30d
              6. voltar
              7. Menu Principal
              `))
  switch (option) {
    case 1:
      if (isValidatedPassword() == true) {

        if (saldo > 0.0) {
          saldo -= 2;
          return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }

      }
      break;
    case 2:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 4;
          return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 3:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 10;
          return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 4:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 20;
          return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 5:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 40;
          return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
  }
}
function compareToAnotherNumber() {
  const receberNumero = prompt("digita o numero");
  if (
    (receberNumero.length === 9 && receberNumero.charAt(1) === 4)
      (receberNumero.length == 9 && receberNumero.charAt(1) !== 6)
      ((receberNumero.length == 9 && receberNumero.charAt(1) !== 2))
  ) {
    pacotes = Number(
      prompt(
        `1. 2MT = 200 SMS/1d
      2. 4MT = 400mt SMS/3d
      3. 10MT = 1000 SMS/7d
      4. 20MT = 2000 SMS/7d
      5. 40MT = 4000 SMS/30d 
      6. voltar
      7. Menu Primcipal`
      ));
    switch (pacotes) {
      case 1:
        if (isValidatedPassword() == true) {

          if (saldo > 0.0) {
            saldo -= 2;
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }

        }
        break;
      case 2:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 4;
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 3:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 10;
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 4:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 20;
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 5:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 40;
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
    }
  }

}
function isValidatedNumberCont() {
  const INPUTCONTADOR = prompt("Número do contador");

  // Verifica se o contador tem 11 numeros
  if (INPUTCONTADOR.length !== 11 || isNaN(INPUTCONTADOR)) {
    return "Número do contador inválido!";
  } else {
    return true;
  }

}

function isValidatedAmount() {
  let valorCompra = Number(prompt("Insira o montante da compra"));
  if (valorCompra < 10 || valorCompra > 25000 || isNaN(valorCompra)) {

    return "Valor da compra inválido!";
  } else {
    return true;
  }

}

function buyCredelec() {
  do {
    option = Number(prompt(`
              1. Novo contador
              2. Lista dos favoritos
              3. Reenviar a ultima Compra
              4. Sair`));
    switch (option) {
      case 1:
        alert(buyNewCount());
        break;
      case 2:
        alert(gerirCredelec());
        break;
      case 3:
        if (isValidatedPassword() == true) {
          alert("Por favor aguarde a messagem");
        }
        break;
      default: alert("opcao ivalida");
        break;
    }
  } while (option != 4);
}
function buyNewCount() {
  do {
    option = Number(
      prompt(`
                    1. Novo contador
                    2. Lista dos favoritos
                    3. Sair
                `));
    switch (option) {
      case 1:
        let name = prompt("digite o nome do contador");
        if (isValidatedNumberCont() == true) {
          if (isValidatedAmount() == true) {
            if (isValidatedPassword() == true) {
              alert(`comfirmas a compra de CREDELECT de ${valorCompra}  para ${name}1. comfimar a compra 2. sair`);
              //falta mostrar no final de cada compra uma messagem nao sei porque nao funciona
            } else {
              alert("O pin e Invalide")
            };
          } else {
            alert("Montante Invalido");
          };
        } else {
          alert("Número do contador inválido!")
        }
        break;
      case 2:
        alert(manageCounters());
        break;
      default: alert("opcao ivalida");
        break;
    }
  } while (opcaoCredelec !== 3);
}
function manageCounters() {
  do {
    option = Number(prompt(`
            1.Adicionar Novo contador
            2. Remover contador
            3. Sair`));
    switch (option) {
      case 1:
        alert(buyNewCount());
        break;
      case 2:
        alert("sem favoritos");
        gerirCredelec = Number(prompt(`3. Sair `));
        break;
      default:
        break;
    }
  } while (option !== 3);
}

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
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      option = Number(prompt(`
                1.Comprar para meu número
                2.Comprar para outro número
                3.voltar` ));
      switch (option) {
        case 1:
          alert(BuyMeuNumber());
          break;
        case 2:
          alert(isValidatedPassword());
          break;
        default: alert("opcao invalida");
          break;
      } break;
    case 5:
      alert(buyCredelec());
      break;
    case 6:
      break;
    default: alert("opcao invalida");
      break;
  }

} while (option !== 7);