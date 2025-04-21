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
  switch(option){
    
    case 6:
      menu();

      break;
    }
} while (option !== 7);







function menu(){
  do{
    option=Number(   
      prompt(` 
      1.Verificar saldo
      2.Alterar o pin
      3.Sair
      `)

      );
      switch(option){
        case 1:
          let nr=Number(prompt("digite o pin"));
          
          if(nr===pin){
          alert(`O seu saldo é de ${saldo.toFixed(2)} MT`);
          }else{
            alert("pin errado")
          }
          break;

      }
    }while(option!==3)
}



  
  