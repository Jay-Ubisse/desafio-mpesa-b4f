let saldo = 150;
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
  case 1:
    
    break;
  case 2:
    break
    case 3:
  case 4:  comprarDadosJackpot()
  default:
    break;
}




} while (option !== 7);




function comprarDadosJackpot() {
  
Option = Number(
  prompt(`
  M-pesa

  1. Para o meu numero
  2. Para o outro numero
  00. Menu principal
  `)
);

switch (Option) {

  case 1:Option = Number(
      prompt(`
      M-pesa
    
      1. WFT
      2. Por hora
      3.Diario
      4.Semanal
      5.Mensal
      6.Infinito
      7.ticket( Netflix, musica e Game)
      0. Voltar
      00.Menu principal
      `)
    );
      
  switch (Option) {
      case 1:  Option = Number(
      prompt(`
      M-pesa
   
          1. 50MT=175MB
          2. 15MT=75MB
          3. 10MT=45MB
          0.Voltar
          00.Menu principal
      `)
    );
  
          if(saldo>=50){
              let ComparePin=Number(prompt("Digite o PIN:"))
              if (pin===ComparePin) {
                  saldo=saldo-50
                  option=Number(prompt(`Pagar 50 MT para activar MB?
                    1.Confirmar
                    2.Cancelar`))

                  if(option===1){
                  
                  alert(" O seu pedido foi submetido com sucesso")
                    }
                    else{
                      break
                    }

                  
              } else{
               
                  alert('O seu pedido falhou!')
              }

          }
          
          break;

          case 2:
              break;

          case 3: 
          break

          case 4:
              break
  
      default:
          break;
  }

  case 2:
}

  
}