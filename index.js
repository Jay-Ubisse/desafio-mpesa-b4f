let saldo = 500;
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
} while (option !== 7);
switch (option) {
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    let opcao = Number(prompt(
      `1.Comprar para meu número
       2.Comprar para outro número
       3.voltar`

    ));
    /*function validarpin() {
      let password = Number(prompt(" digite o seu pin"));
      if (pin !== password) {
        alert("pin Incorrecto");

      }
    }*/
    //ate so para chamar a funcoies
    switch (opcao) {
      case 1:

        function ComprarmeuNumero() {
          let pacotes = Number(prompt(`
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
              validarpin(password);
              if (saldo > 0.0) {
                saldo -= 2;
                return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
              } else {
                alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
              }


              break;
            case 2:
              validarpin(password);
              if (saldo > 0.0) {
                saldo -= 4;
                return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
              } else {
                alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
              }

              break;
            case 3:
              validarpin(password);
              if (saldo > 0.0) {
                saldo -= 10;
                return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
              } else {
                alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
              }
              break;
            case 4:
              validarpin(password);
              if (saldo > 0.0) {
                saldo -= 20;
                return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
              } else {
                alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
              }
              break;
            case 5:
              validarpin(password);
              if (saldo > 0.0) {
                saldo -= 40;
                return (`PARABÉNS, comprou sms's no valor de 2MT, o saldo da sua conta é ${saldo}.`)
              } else {
                alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
              }
          }
        }


        break;
      case 2:
        const receberNumero = prompt("digita o numero");
        if (
          (receberNumero.length === 9 && receberNumero.charAt(1) === 4)
            (receberNumero.length == 9 && receberNumero.charAt(1) !== 6)
            ((receberNumero.length == 9 && receberNumero.charAt(1) !== 2))
        ) {
          const selecionarOpcao = Number(
            prompt(
              `1. 2mt = 200 SMS/1d
      2. 4mt = 400mt SMS/3d
      3. 10mt = 1000 SMS/7d
      4. 20mt = 2000 SMS/7d
      5. 40mt = 4000 SMS/30d 
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

        break;
      default: alert("opcao ivalida");
        break;
    }
    break;
  case 5:
    alert(comprarCedelec());

    break;

  case 6:

    break;

  default:
    break;
}
function comprarCedelec() {

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
        default: alert("opcao ivalida");
          break;
      }

  }

}
function isValidatedPassword() {
  let password = Number(prompt(" digite o pin"));
  if (pin !== password) {
    alert("pin errado");

  } else {
    let comfimar = Number(prompt(`comnfirmas a compra de CREDELECT de ${valorCompra} 1. comfimar a compra 2. sair`));

  }

}
function isValidatedNumberCont() {
  let numeroComtador = Number(prompt("numero do contador"));

  if ((numeroComtador.length === 11)
  ) {
    //validar numero do contador;
    const valorCompra = Number(prompt("Insira o motante da compra"));

    //validar de 10mt ate 25000;

  }
}

function isValidatedAmount(params) {
  if (10 < valorCompra < 2500) {
  }


}