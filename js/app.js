// immediate invoked function expression






(function() {
  const frases = [
    {
      texto:
        "E TEM QUE SE FUDER E ACABOU",
      autor: " Bolsonaro"
    },
    {
      texto:
        "É só uma gripezinha",
      autor: "Bolsonaro"
    },
    {
      texto:
        "ACABOU  A MAMATA",
      autor: "Jair Messias Bolsonaro "
    },
    {
      texto: "Esse bosta do governador de SP  e esse estrume do governador do rio ",
      autor: "Bolsonaro"
    },
    {
      texto:
        "Pelo meu histórico  de Atleta",
      autor: "Jair mito Bolsonaro"
    },
    {
      texto:
        "E o Lula?",
      autor: " Bonoraro"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * frases.length);
    

    document.getElementById("quote").textContent = frases[random].texto;
    document.querySelector(".author").textContent = frases[random].autor;
  });
})();
