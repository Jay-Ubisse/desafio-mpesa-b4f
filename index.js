let saldo = 0;
let pin = 1234;
let option;
let destino;
let bancaria;
const taxaBanco = 10;
const taxaMovel = 5;
const SALDO_TOTAL = "";

//funções
function isNibValid(nib) {
  if (nib.statswith("0001")) return "Millennium BIM";
  if (nib.statswith("0034")) return "Moza Banco";
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
  alert(` Transferiu com sucesso ${valTransfer}MT para a conta ${destination}.
        O seu novo saldo é ${saldo}`);
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
    6. Minha contaq
    7. Sair
    `)
  );

  switch (option) {
    case 1: // Transferência
      destino = Number(
        prompt(`SEM TAXABancoS Transferências de qualquer valor de M-pesa para Mpesa
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
      // M-pesa
      const DIGITAR_NUMERO = prompt("Digita um número valido");
      if (
        (DIGITAR_NUMERO.length === 9 && DIGITAR_NUMERO.charAt(1) === "4") ||
        (DIGITAR_NUMERO.length === 9 && DIGITAR_NUMERO.charAt(1) === "5")
      ) {
        const TRANSFERIR_VALOR = Number(prompt("Insira o valor"));

        if (TRANSFERIR_VALOR > saldo) {
          alert(
            "Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção."
          );
        } else {
        }

        const MEU_PIN = Number(prompt(`Insira o pin válido`));
        if (MEU_PIN === pin) {
          let confirmacao = Number(
            prompt(`Estas a tranferir ${TRANSFERIR_VALOR}MTs para ${DIGITAR_NUMERO} e a taxaBanco é de 0Mts
        1. Confirmar
        2. Cancelar
          
        `)
          );
          switch (confirmacao) {
            case 1:
              alert(
                `Confirmado, transferiste ${TRANSFERIR_VALOR}MTs para ${DIGITAR_NUMERO} com sucesso a taxaBanco é 0MTs o seu saldo actual é de ${saldo}MTs`
              );

              break;
            case 2:
              prompt(option);
          }
        }
      } else {
        alert("Pin incoreto");
      }
      // M-kesh
      const NUMERO = prompt("Digita um número valido");
      if (
        (NUMERO.length === 9 && NUMERO.charAt(1) === "2") ||
        (NUMERO.length === 9 && NUMERO.charAt(1) === "3")
      ) {
        const VALOR = Number(prompt(`Digita o valor`));
        if (VALOR > saldo) {
          alert(
            "Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção."
          );
        }

        const INSIRA_PIN = Number(prompt(`Insira o pin`));
        if (INSIRA_PIN === pin) {
          let confirmacao = Number(
            prompt(`Estas a tranferir ${VALOR} para ${NUMERO} e a taxaBanco é de 5Mts
        1. Confirmar
        2. Cancelar
          
        `)
          );
          switch (confirmacao) {
            case 1:
              alert(
                `Confirmado, transferiste ${VALOR}MTs para ${NUMERO} com sucesso a taxaBanco é de ${taxaMovel}MTs e o seu saldo actual é de ${saldo}MTs`
              );
              break;
            case 2:
              prompt(option);
              break;
          }
        } else {
          alert("Pin incoreto");
        }
        if ((SALDO_TOTAL = saldo - (VALOR - taxaMovel))) {
        }

        //E-mola
        let receberNumero = promt(`Digita um número válido`);
        if (
          (receberNumero.length === 9 && receberNumero.charAt(1) === "6") ||
          (receberNumero.length === 9 && receberNumero.charAt(1) === "7")
        ) {
          alert("Você está transferindo dinheiro para uma conta E-mola");
        } else {
          prompt(
            "Número de conta inválido, por favor introduza novamente o número de conta"
          );
        }

        let valor = prompt("Digita o valor:");
        if (valor > saldo) {
          alert(
            "Falha, o saldo da sua conta M-pesa é insuficiente para completar a transacção."
          );
        } else {
        }

        let pin1 = Number(prompt("Por favor introduza o PIN:"));

        if (pin === pin1) {
          prompt(`Estas a tranferir ${valor} para ${receberNumero} e a taxaBanco é de 5Mts
      1. Confirmar
      2. Cancelar
        
      `);
          switch (confirmacao) {
            case 1:
              alert(
                `Confirmado, transferiste ${valor}MTs para ${receberNumero} com sucesso a taxaBanco é de ${taxaMovel}MTs e o o seu saldo actual é de ${saldo}Mts`
              );
              break;
            case 2:
              prompt(option);
          }
        } else {
          alert("PIN incorrecto, por favor verifica o PIN e tenta novamente");
        }

        if ((SALDO_TOTAL = saldo - (valor - taxaMovel))) {
        }
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
      //alert(`Escolha uma opção válida`);
      break; // destino
  }
  switch (bancaria) {
    case 1:
      const nibNumber = prompt("Insira o NIB (21 números)");
      if (nibNumber.length !== 21 || isNaN(nibNumber)) {
        alert("NIB Inválido");
        break;
      }
      const isValidBank = isNBank(nibNumber);
      if (!isValidBank) {
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
      if (confirmMessageBank(`${isValidBank}-Conta: ${accountNum} `, value, taxaBanco)) {
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
  /*let accountNumber;
  let nuib;
  let currentAmmount = 4500;
  let ammountToTranfer;
  const FEE = 10;
  let popMessage;

  function confirm(nextaxaMovelethod, prevMethod) {
    let confirmDialog = console.log(prompt("1. Confirmar\n 2. Voltar"));
    if (confirmDialog === 1) return nextaxaMovelethod;
    else if (confirmDialog === 2) return prevMethod;
  }

  function insertNuib() {
    nuib = prompt("Insira o NUIB");

    if (isNaN(nuib) || nuib.substring(0, 4) !== "0034" || nuib.length !== 8)
      //ainda por verificar
      window.alert("erro!");
    else {
      // window.alert("sucesso");
      insertAccountNumber();
      // confirm(insertAccountNumber, insertNuib);
      return nuib;
    }
  }

  function insertAccountNumber() {
    accountNumber = prompt("Insira o número de conta");
    if (isNaN(accountNumber) || accountNumber.length !== 8)
      window.alert("Número de conta inválido!");
    else {
      insertAmmount();
    }
    return accountNumber;
  }

  function insertAmmount() {
    ammountToTranfer = Number(
      prompt(`Saldo disponível: ${currentAmmount}` + "\n\nInsira o valor")
    );
    if (isNaN(ammountToTranfer) & (ammountToTranfer < 100))
      window.alert("Valor Inválido! Tente novamente");
    else transfer();
  }

  function transfer() {
    if (ammountToTranfer + FEE > currentAmmount)
      window.alert("O seu saldo é insuficiente para realizar a operação.");
    else {
      let confirmMessage = Number(
        prompt(
          `\nTransferir ${ammountToTranfer}.00MT para a conta ${accountNumber}?\n\n` +
          "1. Confirmar\n 2. Voltar"
        )
      );
      if (confirmMessage === 1) {
        currentAmmount -= ammountToTranfer + FEE;
        sucessMessage();
      } else if (confirmMessage === 2) insertAccountNumber();
      else {
        window.alert("Opção Inválida");
        return;
      }
    }
  }

  function sucessMessage() {
    popMessage =
      `Transferiu com sucesso ${ammountToTranfer}.00MT para a conta ${accountNumber}.\n` +
      `O seu novo saldo é ${currentAmmount}`;
    window.alert(popMessage);
  }

  insertNuib();*/
} while (option !== 7);
