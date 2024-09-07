// Armazenar filmes mostrados para cada emoção
const filmesMostrados = {};

// Função para pesquisar e exibir um filme
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma emoção</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Filtra os dados com base na emoção pesquisada
    const filmesFiltrados = dados.filter(dado => dado.tags.toLowerCase().includes(campoPesquisa));

    // Verifica se há filmes filtrados
    if (filmesFiltrados.length === 0) {
        section.innerHTML = "<p>Nenhum filme encontrado para a emoção especificada.</p>";
        return;
    }

    // Inicializa a lista de filmes mostrados para a emoção atual
    if (!filmesMostrados[campoPesquisa]) {
        filmesMostrados[campoPesquisa] = [];
    }

    // Filtra os filmes que ainda não foram mostrados
    const filmesNaoMostrados = filmesFiltrados.filter(filme => !filmesMostrados[campoPesquisa].includes(filme));

    // Verifica se há filmes não mostrados
    if (filmesNaoMostrados.length === 0) {
        section.innerHTML = "<p>Todos os filmes para esta emoção já foram mostrados.</p>";
        return;
    }

    // Seleciona um filme aleatório da lista de filmes não mostrados
    const indiceAleatorio = Math.floor(Math.random() * filmesNaoMostrados.length);
    const filmeSelecionado = filmesNaoMostrados[indiceAleatorio];

    // Marca o filme como mostrado
    filmesMostrados[campoPesquisa].push(filmeSelecionado);

    // Cria um novo elemento HTML para o resultado
    const resultado = `
        <div class="item-resultado">
            <h2>
                <a href="${filmeSelecionado.link}" target="_blank">${filmeSelecionado.titulo}</a>
            </h2>
            <p class="descricao-meta">${filmeSelecionado.descricao}</p>
            <a href="${filmeSelecionado.link}" target="_blank">Mais informações</a>
        </div>
    `;
    
    // Atribui o resultado gerado à seção HTML
    section.innerHTML = resultado;
}

// Função para limpar a busca
function limparBusca() {
    // Limpa o campo de pesquisa
    document.getElementById("campo-pesquisa").value = "";

    // Limpa os resultados
    document.getElementById("resultados-pesquisa").innerHTML = "";

    // Limpa a lista de filmes mostrados para evitar mostrar o mesmo filme após uma nova busca
    for (let chave in filmesMostrados) {
        filmesMostrados[chave] = [];
    }
}
