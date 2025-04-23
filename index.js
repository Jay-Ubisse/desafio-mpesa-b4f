<<<<<<< HEAD
 
let saldo = 50.0;
let pin = 1234;
let option;
let destino;
let bancaria;
const taxaBanco = 10;
const taxaMovel = 5;

//funções
function isNibValid(nib) {
  if (nib.startsWith("0001")) return "Millennium BIM";
  if (nib.startsWith("0034")) return "Moza Banco";
  return null;
}
function askPin() {
  const TRY = Number(prompt("Insira o PIN: "));
  return TRY === pin;
}
function confirmMessageBank(destination, valTransfer, taxaBanco) {
  const confirmation = Number(
    prompt(`Estás a transferir ${valTransfer}MT para ${destination}, com a taxa de ${taxaBanco}MT
    1. Confirmar
    2. Cancelar`)
  );
  return confirmation === 1;
}
function bankTransfer(valTransfer, taxaBanco) {
  saldo = saldo - (valTransfer + taxaBanco);
  alert(` Transferiu com sucesso ${valTransfer}MT para a conta.
        O seu novo saldo é ${saldo}`);
}
=======
let saldo = 500;
let pin = 1234;
let option;
let pacotes;
let conf;
function isValidatedPassword() {
  let password = Number(prompt(" digite o pin: "));
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
              `));
     //switch case dos pacotes de internet         
  switch (pacotes) {
    case 1:
      if (isValidatedPassword() == true) {

        if (saldo > 0.0) {
          saldo -= 2; 
          option=Number(prompt(
            `1.Confirmar
             2.cancelar
             `
          ))
          if(option===1){
            return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
          }else{
            return;
          }
        
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }

      }
      break;
    case 2:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 4;
          option=Number(prompt(
            `1.Confirmar
            2.cancelar`
          ))
          if(option===1){
            alert (`PARABÉNS, comprou sms's no valor de 4MT, o saldo da sua conta é ${saldo}.`)
          }else{
            return;
          }
        }else{
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 3:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 10;
          option=Number(prompt(
            `1.Confirmar
            2.cancelar`
          ))
          if(option===1){
            alert (`PARABÉNS, comprou sms's no valor de 10MT, o saldo da sua conta é ${saldo}.`)
          }else{
            return;
          }
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 4:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 20;
          option=Number(prompt(
            `1.Confirmar
            2.cancelar`
          ))
          if(option===1){
            alert (`PARABÉNS, comprou sms's no valor de 20MT, o saldo da sua conta é ${saldo}.`)
          }else{
            return;
          }
      
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
    case 5:
      if (isValidatedPassword() == true) {
        if (saldo > 0.0) {
          saldo -= 40;
          option=Number(prompt(
            `1.Confirmar
            2.cancelar`
          ))
          if(option===1){
            alert (`PARABÉNS, comprou sms's no valor de 40MT, o saldo da sua conta é ${saldo}.`)
          }else{
            return;
          }
         
        } else {
          alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
        }
      }
      break;
      //case para voltar ao menu anterior
      case 6:
        return;
      //case para voltar ao menu principal
      case 7:
      return BuyMyNumber();
  }
}
function buyToAnotherNumber() {
  const receiveNumber = prompt("digita o numero");
  if (
    (receiveNumber.length === 9 && receiveNumber.charAt(1) === 4)
      (receiveNumber.length == 9 && receiveNumber.charAt(1) !== 6)
      ((receiveNumber.length == 9 && receiveNumber.charAt(1) !== 2))
  ) {
    option = Number(
      prompt(
        `1. 2MT = 200 SMS/1d
      2. 4MT = 400mt SMS/3d
      3. 10MT = 1000 SMS/7d
      4. 20MT = 2000 SMS/7d
      5. 40MT = 4000 SMS/30d 
      6. voltar
      7. Menu Principal`
      ));
    switch (option) {
      case 1:
        if (isValidatedPassword() == true) {

          if (saldo > 0.0) {
            saldo -= 2;
            return (`PARABÉNS, comprou sms's no valor de 2MT do  para o ${receiveNumber}, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }

        }
        break;
      case 2:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 4;
            return (`PARABÉNS, comprou sms's no valor de 4MT para o ${receiveNumber}, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 3:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 10;
            return (`PARABÉNS, comprou sms's no valor de 10MT semanal para o ${receiveNumber}, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 4:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 20;
            return (`PARABÉNS, comprou sms's no valor de 20MT para p ${receiveNumber}, o saldo da sua conta é ${saldo}.`)
          } else {
            alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
          }
        }
        break;
      case 5:
        if (isValidatedPassword() == true) {
          if (saldo > 0.0) {
            saldo -= 40;
            return (`PARABÉNS, comprou sms's no valor de 40MT para o ${receiveNumber}, o saldo da sua conta é ${saldo}.`)
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
        alert(manageCounters());
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
              if (saldo > 0.0) {
                // option = Number(prompt(`comfirmas a compra de CREDELECT de ${valorCompra}  para ${name}1. comfimar a compra 2. sair`));
                return (`PARABÉNS, comprou CREDELEC no valor de ${valorCompra}, para ${name}.`);
              } else {
                alert(`Saldo Insuficiente, para a Compra. Obrigado!`);
              }
            } else {
              alert("Montante Invalido");
            };
          } else {
            alert("Número do contador inválido!");
          }
          break;
        }
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

>>>>>>> g3
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
<<<<<<< HEAD
    case 1: // Transferência
      destino = Number(
        prompt(`SEM TAXABancoS Transferências de qualquer valor de M-pesa para Mpesa
          1. Carteiras Móveis
          2. Banco
          0. Voltar
          `)
      );
      switch (destino) {
        case 1: //Transferir para Carteiras Moveis
          // M-pesa
          const DIGITAR_NUMERO = prompt("Digita um número valido");
            if (DIGITAR_NUMERO.length === 9 && (DIGITAR_NUMERO.charAt(1) === "4" || DIGITAR_NUMERO.charAt(1) === "5")
             );
          const TRANSFERIR_VALOR = Number(prompt("Insira o valor"));
          
            if (TRANSFERIR_VALOR < saldo) {
              const MEU_PIN = Number(prompt(`Insira o pin válido`));
              if (MEU_PIN === pin) {
                let confirmacao = Number(
                  prompt(`Estas a tranferir ${TRANSFERIR_VALOR}MTs para ${DIGITAR_NUMERO} escolha uma opção
            1. Confirmar
            2. Cancelar `));
                switch (confirmacao) {
                  case 1:
                    saldo = saldo - TRANSFERIR_VALOR;
                    alert(
                      `Confirmado, transferiste ${TRANSFERIR_VALOR}MTs para ${DIGITAR_NUMERO} com sucesso o seu saldo actual é de ${saldo}MTs`
                    );
    
                    break;
                  case 2:
                    alert("Transferência Cancelada");
                    break;
                  default:
                    alert("Opção Inválida");
                }
              } else {
                alert("Pin incoreto");
              }
            } else {
              alert(
                "Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção."
              );
            };
          
    
            // M-kesh
            const NUMERO = prompt("Digita um número valido");
            if (NUMERO.length === 9 && (NUMERO.charAt(1) === "2" || NUMERO.charAt(1) === "3")){
              const VALOR = Number(prompt(`Digita o valor`));
              if (VALOR + taxaMovel < saldo) {
                const INSIRA_PIN = Number(prompt(`Insira o pin`));
                if (INSIRA_PIN === pin) {
                  let confirmacao = Number(
                    prompt(`Estas a tranferir ${VALOR} para ${NUMERO} e a taxa é de 5Mts
                    1. Confirmar
                    2. Cancelar
              
                    `));
                    switch (confirmacao) {
                    case 1:
                      alert(
                        `Confirmado, transferiste ${VALOR}MTs para ${NUMERO} com sucesso a taxa é de ${taxaMovel}MTs e o seu saldo actual é de ${saldo}MTs`
                      );
                      break;
                    case 2:
                      alert("Opção Inválida");
                      break;
                  }
                } else {
                  alert("Pin incoreto");
                }
    
              }
            }  else {alert("Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção.");};
    
            //E-mola
            let receberNumero = prompt(`Digita um número válido`);
            if (receberNumero.length === 9 && (receberNumero.charAt(1) === "6" ||
              receberNumero.charAt(1) === "7")) {
              alert("Você está transferindo dinheiro para uma conta E-mola");
            } else {
              alert(
                "Número de telefone inválido, por favor introduza novamente o número"
              );
            };
    
            const valor = Number(prompt("Digita o valor:"));
            if (valor + taxaMovel < saldo) {
              const pin1 = Number(prompt("Por favor introduza o PIN:"));
              if (pin === pin1) {
                let confirma = Number(prompt(`Estas a tranferir ${valor} para ${receberNumero} e a taxa é de 5Mts
                1. Confirmar
                2. Cancelar
              
                `));
                switch (confirma) {
                  case 1:
                    saldo = saldo - (valor + taxaMovel);
                    alert(
                      `Confirmado, transferiste ${valor}MTs para ${receberNumero} com sucesso a taxa é de ${taxaMovel}MTs e o o seu saldo actual é de ${saldo}Mts`
                    );
                    break;
                  case 2:
                    alert("Transferência Cancelada");
                    break;
                  default:
                    alert("Opção Inválida");
                    break;
                }
              
              } else {alert("PIN incorrecto, por favor verifica o PIN e tenta novamente")};
            } else {
              alert(
              "Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção."
              );
            };
    

          
          break;
      
    
          
        case 2: // Transferir para banco
      bancaria = Number(
        prompt(` Escolha uma opção:
                    1. Digitar NIB/ Numero de Conta
                    2. Para procurar na lista
                    `));
      switch (bancaria) {
      case 1:
        const nibNumber = prompt("Insira o NIB (21 números)");
        if (nibNumber.length !== 21 || isNaN(nibNumber)) {
          alert("NIB Inválido");
          break;
        }
        const bankName = isNibValid(nibNumber);
        if (!bankName) {
          alert("Introduza um NIB válido: Banco desconhecido");
          break;
        }
    
        const accountNum = prompt("Insira o número da conta (9 números)");
        if (accountNum.length !== 9 || isNaN(accountNum)) {
          alert("Número de Conta Inválido");
          break;
        }
        const value = Number(prompt("Insira o montante a transferir:"));
        if (isNaN(value) || value <= 0) {
          alert("Montante inválido.");
          break;
        }
        if (value + taxaBanco > saldo) {
          alert(`Saldo insuficiente. Estás a tentar transferir ${value.toFixed(2)} MT, 
              mas só tens ${saldo.toFixed(2)} MT.`);
          break;
        }
        if (!askPin()) {
          alert("PIN Inválido");
          break;
        }
        if (confirmMessageBank(`${bankName} Conta: ${accountNum} `, value, taxaBanco)) {
          bankTransfer(value, taxaBanco);
    
        } else {
          alert("Transferência Cancelada");
        }
        break;
      case 2:
        alert(`1. ${nibNumber}`);
    
        break;
    
      default:
        //alert(`Escolha uma opção válida`);
        break;
      }
    }
      break;
    default:
      alert(`Escolha uma opção válida`);
      break;
  } // fim case option 
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
  pinValidation()
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
      pinValidation()  
      alert(`O seu saldo é de ${saldo.toFixed(2)} MT`);
        break;
      case 2:
        const lastPIN = Number(prompt("Insira o pin anterior"));
        if (lastPIN === pin) {
          const newPIN = Number(prompt("Insira o novo pin"));
          if (newPIN !== pin) {
            Number(prompt("confirma o pin"));
            alert("PIN alterado com sucesso");
            pin = newPIN;
          } else 
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
        pinValidation()
        if (amount + 5 > saldo) {
          alert("Saldo insuficiente.");
        } else {
          saldo -= amount+5;
          alert(
            `Você levantou ${amount} MT do agente ${agentNumber}. A taxa foi de 10Mt, o seu  novo saldo é: ${
              saldo - 5
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
          pinValidation()
          alert(`Insira o código ${generateRandomNumbers()} no ATM`);
          break;
        case 2:
          pinValidation()
          alert(`Insira o código ${generateRandomNumbers()} no ATM`);
        
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

function pinValidation(){
  let validacao = Number(prompt(`Insira o seu pin`));
  while (validacao !== pin) {
    validacao = Number(prompt(`Pin invalido, tente novamente!`));
  }
}
=======
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
          alert(buyToAnotherNumber());
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
>>>>>>> g3
