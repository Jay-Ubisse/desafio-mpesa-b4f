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
 
  switch(option){
    case 1:// codigo  Transferir dinheiro
          break
    case 2: //codigo Levantar dinheiro
          break
    case 3:// codigo  Depositar dinheiro  
          break
    case 4: // Chamadas, sms e dados
          comprarDadosJackpot()
          break     
    case 5://codigo  Comprar credelec
          break
    case 6:// codigo  Minha conta
          break
   
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
      00. Menu principal
     
      `)
    );
      
   
  switch (Option) {
      case 1:  
                
                  Option = Number(
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
                  
                    alert(` O seu pedido foi submetido com sucesso, seu novo saldo é ${saldo}`)
                    }
                    else{
                      break
                    }

                  
              } else{
               
                  alert('O seu pedido falhou!')
              }

          }
          
          break;

          case 2: if(saldo>=15){
            let ComparePin=Number(prompt("Digite o PIN:"))
            if (pin===ComparePin) {
                saldo=saldo-15
                option=Number(prompt(`Pagar 15 MT para activar MB?
                  1.Confirmar
                  2.Cancelar`))

                if(option===1){
                
                alert(` O seu pedido foi submetido com sucesso, seu novo saldo é ${saldo}`)
                  }
                  else{
                    break
                  }

                
            } else{
             
                alert('O seu pedido falhou!')
            }

        }
              break;

          case 3:  if(saldo>=10){
            let ComparePin=Number(prompt("Digite o PIN:"))
            if (pin===ComparePin) {
                saldo=saldo-10
                option=Number(prompt(`Pagar 50 MT para activar MB?
                  1.Confirmar
                  2.Cancelar`))

                if(option===1){
                
                  alert(` O seu pedido foi submetido com sucesso, seu novo saldo é ${saldo}`)
                  }
                  else{
                    break
                  }

                
            } else{
             
                alert('O seu pedido falhou!')
            }

        }
          break

        
  
      default: alert('A opcao digitada é invalida')
          break;

         
  }


    
  case 2://Para o outro numero
}

  
}