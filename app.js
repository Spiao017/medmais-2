function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value
     if(!campoPesquisa){
        section.innerHTML = "<p> Digite os sintomas ou o nome da doença </p>"
           return }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado e constrói o HTML para cada resultado
        for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
              <div class="item-resultado">
              <h2>
              <a href="https://www.youtube.com/youtube.com/watch?v=6DHlzOoA7GU" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Saiba Mais...</a>
            </div>
          `;

        }
      }

      if (!resultados){
           resultados = "<p> nada foi encontrado </p>"

      }
  
    // Insere o HTML construído na seção selecionada
    section.innerHTML = resultados;
  }
