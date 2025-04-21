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
function isValidateNumberCell() {
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
  const inputContador = prompt("Número do contador");

  // Verifica se o contador tem 11 numeros
  if (inputContador.length !== 11 || isNaN(inputContador)) {

    return "Número do contador inválido!";
  } else {
    return true;
  }

}

function isValidatedAmount() {
  const valorCompra = Number(prompt("Insira o montante da compra"));
  if (valorCompra < 10 || valorCompra > 25000 || isNaN(valorCompra)) {

    return "Valor da compra inválido!";
  } else {
    return true;
  }

}

function comprarCedelec() {
  option = Number(prompt(`
              1. Novo contador
              2. Lista dos favoritos
              3. Reenviar a ultima Compra
              4. Sair`));
  switch (option) {
    case 1:
      option = Number(
        prompt(`
           1. Novo contador
           2. Lista dos favoritos
           3. Sair
         `));
      switch (option) {
        case 1:
          ;
          if (isValidatedNumberCont() == true) {
            if (isValidatedAmount() == true) {
              if (isValidatedPassword() == true) {
                alert(`comfirmas a compra de CREDELECT de ${valorCompra} 1. comfimar a compra 2. sair`);
              } else {
                alert("O pin é inválido")
              };
            } else {
              alert("Montante inválido");
            };

          } else {
            alert("Número do contador inválido!")
          }

          break;
        case 2:
          option = Number(
            prompt(`
           1. adicionar  Novo contador
           2. Remover Contador
           3. Sair
         `));
          switch (option) {
            case 1:
              let name = prompt("digite o nome do contador");
              if (isValidatedNumberCont() == true) {
                if (isValidatedAmount() == true) {
                  if (isValidatedPassword() == true) {
                    alert(`comfirmas a compra de CREDELECT de ${valorCompra} 1. comfimar a compra 2. sair`);
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
              //Remover Contador 
              alert("sem favoritos");
              option = Number(prompt(`3. Sair `));
              break;
            case 3:
              if (isValidatedPassword() == true) {
                alert("Por favor aguarde a messagem");
              }

              break;
            default:
              break;
          }
          break;
        case 4:
          break;
        default:
          break;
      }
  }

}

function ComprarmeuNumero() {
  pacotes = Number(prompt(`
              1. 2MT = 100 SMS/1d
              2. 4MT = 180 SMS/3d
              3. 10MT = 500 SMS/7d
              4. 20MT = 1000 SMS/7d
              5. 40MT = 2000 SMS/30d
              6. voltar
              7. Menu Principal
              `))
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

    case 4:
      let opcao = Number(prompt(
        `1.Comprar para meu número
                2.Comprar para outro número
                3.voltar` ));
      switch (opcao) {
        case 1:
          alert(ComprarmeuNumero());
          break;
        case 2:
          alert(isValidateNumberCell());
          break;
        case 3:
          break;
        default:
          break;
      } break;
    case 5:
      alert(comprarCedelec());
      break;
    case 6:
      break;
    case 7:
      break;

    default:
      break;
  }

} while (option !== 7);


function isValidatedPassword() {
  let password = Number(prompt(" digite o pin"));
  if (pin !== password) {
    alert("pin errado");

  } else {
    let comfimar = Number(prompt(`comnfirmas a compra de CREDELECT de ${valorCompra} 1. comfimar a compra 2. sair`));


  }
}


function isValidatedNumberCont() {

  const inputContador = prompt("Número do contador");

  // Verifica se o contador tem 11 numeros
  if (inputContador.length !== 11 || isNaN(inputContador)) {
    alert("Número do contador inválido!");
    return false;
  }

  // Conversão para número após validação
  const numeroContador = Number(inputContador);

  // Validação do valor de compra
  const valorCompra = Number(prompt("Insira o montante da compra"));
  if (valorCompra < 10 || valorCompra > 25000 || isNaN(valorCompra)) {
    alert("Valor da compra inválido!");
    return false;
  }

  return true;
}
