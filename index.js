let saldo = 200;
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


function comprarDadosJackpot(){
  option = Number(
    prompt(`
    M-pesa
  
    1. Para o meu numero
    2. Para o outro numero
    0. Menu principal
    `)
  );

  switch(option){
    case 1: 
                  option = Number(
                    prompt(`
                    M-pesa
                  
                    1. Comprar Jackpots
                    2. Comprar dados
                    0. Menu principal
                    `)
                  );
            switch(option){
                  case 1: //Comprar Jackpots
                          comprarJackpot()
                        break
                  case 2://Comprar dados
                    comprarDados()
                        break
                  case 0: //menu principal
                        break
                  default: alert('Opcao Invalida!')

                        
              
            }
          break
    case 2://Pra o outro numero
            const numeroRecebido = prompt(
      "Digite o número para o qual pretende converter")
            if(numeroRecebido.length === 9 && (numeroRecebido.charAt(1) === "4"|numeroRecebido.charAt(1) === "5") ){
              option = Number(
                prompt(`
                M-pesa
              
                1. Comprar Jackpots
                2. Comprar dados
                0. Menu principal
                `)
              );
        switch(option){
              case 1: //Comprar Jackpots
                 comprarJackpot()
                    break
              case 2://Comprar dados
                comprarDados()
                    break
              case 0: //menu principal
                    break
              default: alert('Opcao Invalida!')

                    
          
        }
            }
            else{
              alert('O numero digitado é invalido')
            }
          break
             
  }
}


function comprarDados(){
  option = Number(
    prompt(`
    M-pesa
  
    1. WFT
    2. Por hora
    3.Diario
    4.Semanal
    5.Mensal
    6.Infinito
    7.Ticket( Netflix, musica e Game)
    0. Voltar
    00. Menu principal
   
    `)
  );
    
  switch(option){
    case 1:// WFT
                wft()
        break
    case 2: // Por hora
                porHora()
        break
    case 3: //Diario
              comprarDiario()
        break  
    case 4://Semanal
      comprarSemanal()
        break
    case 5://Mensal
        comprarMensais()
        break
    case 6://Infinito     
    comprarInfinito()
        break
    case 7://Ticket( Netflix, musica e Game)
    comprarTicket()
        break
    case 0: //voltar
            break
    default: mostrarMensagem()
  }
}


function wft(){

  option = Number(
    prompt(`
    M-pesa

        1. 50MT=WFTTI(1.9GB)/7d
        2. 15MT=WFTTI(572MB)/1d
        3. 10MT=WFTTI(381MB)/1d
        4. 10MT=Facebook(381MB)/1d
        0.Voltar
        00.Menu principal
    `)
  );
  
  switch(option){
    case 1://50MT
        efectuarCompra(50)
        break
    case 2://15MT
        efectuarCompra(15)
        break
    case 3://10MT
            efectuarCompra(10)
        break
    case 4: efectuarCompra(10)
    case 0://voltar
       break
    default:mostrarMensagem()           
  }
 

}

function porHora(){
  option = Number(
    prompt(`
    Validas por 1h
    1. 5MT=188MB
    2. 6MT=226MB
    3. 7MT=264MB
    0.Voltar
    00.Menu principal
    `)
  );

  switch(option){
      case 1: //5MT=188MB
        efectuarCompra(5)
          break
      case 2: // 6MT=226MB
        efectuarCompra(6)
          break
      case 3: //7MT=264MB
            efectuarCompra(7)
          break
      default:mostrarMensagem()

      
  }

}

function   comprarDiario(){
  option = Number(
    prompt(`
    Validas por 7 dias
    1. 7MT = 241MB
    2. 10MT= 353MB
    3. 15MT = 529MB
    4. 20MT = 715MB
    5. 30MT = 1.4GB
    6. 40MT = 1GB
    7. 50MT =1.75GB
    0.Voltar
    00.Menu principal
    `)
  );

  switch(option){
    case 1: // 7MT = 241MB
            efectuarCompra(7)
            break
    case 2: //10MT= 353MB
            efectuarCompra(10)
            break
    case 3:// 15MT = 529MB
            efectuarCompra(15)
            break
    case 4://20MT = 715MB
            efectuarCompra(20)
            break
    case 5://30MT = 1.4GB
          efectuarCompra(30)
          break
    case 6: // 40MT = 1GB
          efectuarCompra(40)
    case 5: case 6: // 50MT =1.75GB
    efectuarCompra(50)

    default:mostrarMensagem()

  }

}

function comprarSemanal(){
  option = Number(
    prompt(`
    Validas por 7 dias
    1. 30MT = 857MB
    2. 50MT = 1.7GB
    3. 85MT = 2.9GB
    4. 100MT = 3.4GB
    5. 150MT = 5.2GB
    6. 200MT = 7.1GB
    0.Voltar
    00.Menu principal
    `)
  );

  switch(option){
    case 1://30MT = 857MB
      efectuarCompra(30)
        break
    case 2://50MT = 1.7GB
      efectuarCompra(50)
        break
    case 3://85MT = 2.9GB
       efectuarCompra(85)
        break
    case 4://100MT = 3.4GB
       efectuarCompra(100)
        break
    case 5://150MT = 5.2GB
       efectuarCompra(150)
        break
    case 6://200MT = 7.1GB
       efectuarCompra(200)
        break
    default: mostrarMensagem()
  }

}


function comprarMensais(){
  option = Number(
    prompt(`
    Validas por 7 dias
    1. 100MT = 2.8GB
    2. 200MT = 7GB
    3. 300MT = 10.5GB
    4. 500MT = 17.9GB
    5. 1000MT = 35.8GB
    6. 1500MT = 53.6GB
    0.Voltar
    00.Menu principal
    `)
  );

  switch(option){
    case 1: //100MT = 2.8GB
            efectuarCompra(100)
            break
    case 2: //200MT = 7GB
            efectuarCompra(200)
            break
    case 3://300MT = 10.5GB
            efectuarCompra(300)
            break
    case 4://500MT = 17.9GB
            efectuarCompra(500)
            break
    case 5://1000MT = 35.8GB
          efectuarCompra(1000)
          break
    case 6: //1500MT = 53.6GB
          efectuarCompra(1500)

    default:mostrarMensagem()

  }

}

function  comprarInfinito(){
  option = Number(
    prompt(`
    Infinitas (Sem validade)
    1. 10MT = 181MB
    2. 20MT = 362MB
    3. 30MT = 542MB
    4. 500MT = 903MB
    5. 100MT = 1.7GB
    6. 1500MT = 2.6GB
    0.Voltar
    00.Menu principal
    `)
  );

  switch(option){
    case 1://10MT = 181MB
        efectuarCompra(10)
        break
    case 2: //20MT = 362MB
        efectuarCompra(20)
        break
    case 3: //30MT = 542MB
        efectuarCompra(30)
    case 4://500MT = 903MB
      efectuarCompra(500)
      break
      case 5://100MT = 1.7
      efectuarCompra(1000)
      break
    case 6://1500MT = 2.6GB
        efectuarCompra(1500)
      break
      default:mostrarMensagem()
  }
  

}

   function comprarTicket(){
    option = Number(
      prompt(`
      Infinitas (sem validade)
      1. 100MT = NetFlix/youTube (4GB)/1d
      2. 10MT = Musica (381MB)/1d
      3. 10MT = Game(381MB)/d
     
    
      0.Voltar
      00.Menu principal
      `)
    );
    switch(option){
      case 1://100MT = NetFlix/youTube (4GB)/1d
             efectuarCompra(100)
      break
      case 2:// 10MT = Musica (381MB)/1d
            efectuarCompra(10)
            break
      case 3:// 100MT = Game(381MB)/d
            efectuarCompra(10)
        break
      default:mostrarMensagem()
    }
  
   }




function efectuarCompra(valor){
  if(saldo>=valor){
    let ComparePin=Number(prompt("Digite o PIN:"))
    if (pin===ComparePin) {
        saldo=saldo-valor
        option=Number(prompt(`Pagar ${valor} MT para activar?
          1.Confirmar
          2.Cancelar`))

        if(option===1){
        
          alert(` O seu pedido foi submetido com sucesso, seu novo saldo é ${saldo}`)
          }
          else{
            return
          }

        
    } else{
     
        alert('O seu pedido falhou!')
    }
  } else{
    alert('O seu saldo é insuficiente!')
  }
    

}

function mostrarMensagem(){
 alert('A opcao inserida é invalida')
}


function comprarJackpot(){
  option = Number(
    prompt(`
    Dados+SMS e Minutos p/todas redes
    1. 10MT = 13min+200MB+100SMS/1d
    2. 20MT = 26min+400MB+100SMS/1d
    3. 50MT = 54min+1GB+25SMS/1d
    0.Voltar
    00.Menu principal
    `)
  );

    switch(option){
      case 1://10MT = 13min+200MB+100SMS/1d
          efectuarCompra(10)
          break
      case 2:// 20MT = 26min+400MB+100SMS/1d
          efectuarCompra(20)
          break
      case 3://50MT = 54min+1GB+25SMS/1d
          efectuarCompra(50)
          break
      default:mostrarMensagem() 
    }
}