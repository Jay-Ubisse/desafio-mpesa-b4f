 
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
} while (option !== 7);
