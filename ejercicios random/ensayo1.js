function dadoA() {
    return Math.floor(Math.random() * (6) + 1);
  }
  
  const dadoB = () => {
    const dadoUno = dadoA
    console.log(dadoA())
    let dadoDos 
    do{
      dadoDos = dadoA
    }
    while(dadoUno != dadoDos)
    console.log()
  }
  dadoB()
  console.log(dadoB())