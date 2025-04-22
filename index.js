let saldo = 500;
let pin = 1234;
let option;
let pacotes;
let opcao;
function isValidatedPassword() {
  let password = Number(prompt(" digite o pin"));
  if (pin !== password) {
    alert("pin errado");

  } else {
   return true;

  }}
 
function ComprarmeuNumero() {
pacotes = Number(prompt(`
1. 2MT = 100 SMS/1d
2. 4MT = 180 SMS/3d
3. 10MT = 500 SMS/7d
4. 20MT = 1000 SMS/7d
5. 40MT = 2000 SMS/30d
6. voltar
7. Menu Principal
`));
switch (pacotes) {
  case 1:
    isValidatedPassword();
if (saldo > 0.0) {
  saldo -= 2;
  return (`PARABÉNS, comprou sms's no valor de 2MT, o teu novo saldo M-pesa é ${saldo}.`)
} 

    break;
  case 2:
    isValidatedPassword();
if (saldo > 0.0) {
  saldo -= 4;
  return (`PARABÉNS, comprou sms's no valor de 4MT, o teu novo saldo M-pesa é ${saldo}.`)
} 

    break;
  case 3:
    
  isValidatedPassword();
  if (saldo > 0.0) {
    saldo -= 10;
    return (`PARABÉNS, comprou sms's no valor de 10MT, o teu novo saldo M-pesa é ${saldo}.`)
  } 
    break;
  case 4:
    isValidatedPassword();
    if (saldo > 0.0) {
      saldo -= 20;
      return (`PARABÉNS, comprou sms's no valor de 20MT, o teu novo saldo M-pesa é ${saldo}.`)
    } 
    break;
  case 5:
    
  isValidatedPassword();
  if (saldo > 0.0) {
    saldo -= 40;
    return (`PARABÉNS, comprou sms's no valor de 40MT, o teu novo saldo M-pesa é ${saldo}.`)
  }
  break;
  default:alert(`Saldo Insuficiente, o saldo da sua conta é ${saldo}. Obrigado!`);
  case 6: ComprarmeuNumero();
  break;
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
    opcao = Number(prompt(
      `1.Comprar para meu número
       2.Comprar para outro número
       3.voltar`

    ));
    break;
  }
  
}while (option !== 7);
    switch (opcao) {
      case 1:
//funcao para comprar sms para meu número
      alert(ComprarmeuNumero());  
          

        break;
        //case para comprar sms para outro numero
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
        }
        break;
      case 3:
  
        break;

      default:
        break;
    
  case 5:
    alert(comprarCedelec());
    break;
    }
function comprarCedelec() {

  option = Number(
    prompt(`
      
              1. Novo contador
              2. Lista dos favoritos
              3. Reenviar a ultima Compra
              4. Sair
    `)
  );
  switch (option) {
    case 1:
      option = Number(
        prompt(`
      
           1. Novo contador
           2. Lista dos favoritos
           3. Sair
         `)
      );
      switch (option) {
        case 1:
          alert(isValidatedNumberCont());
          alert(isValidatedNumberCont());
          alert(isValidatedPassword());
          break;

        default:
          break;
      }

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