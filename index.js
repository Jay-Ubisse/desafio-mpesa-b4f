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
} while (option !== 7);
switch (option) {
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

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
          const numeroComtador = Number(prompt("numero do contador"));
          if( (numeroComtador.length === 11)
          ){
           //validar numero do contador;
            const valorCompra = Number(prompt("Insira o motante da compra"));
             
            //validar de 10mt ate 25000;
          if ( 10 < valorCompra < 2500){ 
          }
        }

          let password = Number(prompt(" digite o pin"));
          if (pin !== password) {
            alert("pin errado");

          } else {
            let comfimar = Number(prompt(`comnfirmas a compra de CREDELECT de ${valorCompra} 1. comfimar a compra 2. sair`));

          }

          break;

        default:
          break;
      }

  }
} 