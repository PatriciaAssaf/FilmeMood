let dados = [
    {
        titulo: "O Fabuloso Destino de Amelie Poulain",
        ano: 1999,
        descricao: "Uma comédia dramática francesa sobre Amélie, uma jovem solitária em Paris que decide melhorar a vida das pessoas ao seu redor, ao mesmo tempo em que busca a própria felicidade. Embora seja alegre em muitos aspectos, a profundidade emocional e o sentimento de solidão da protagonista podem ressoar com quem está triste.",
        link: "https://www.adorocinema.com/filmes/filme-27063/",
        tags: "feliz apaixonado ansioso"
    },
    {
        titulo: "Her",
        ano: 2013,
        descricao: "Um homem solitário se apaixona por um sistema operacional de inteligência artificial, lidando com temas de conexão emocional e solidão.",
        link: "https://adorocinema.com/filmes/filme-206799/",
        tags: "triste ansioso apaixonado"
    },
    {
        titulo: "A Vida é Bela",
        ano: 1994,
        descricao: "Uma comédia dramática sobre um pai que usa sua imaginação para proteger seu filho dos horrores de um campo de concentração durante a Segunda Guerra Mundial.",
        link: "https://www.adorocinema.com/filmes/filme-64439/",
        tags: "triste ansioso"
    },
    {
        titulo: "O Diário de uma Paixão",
        ano: 2004,
        descricao: "Um conto de amor eterno que mostra a vida de um casal através dos altos e baixos, com uma narrativa emocional que aborda o amor, a perda e a memória.",
        link: "https://www.adorocinema.com/filmes/filme-47422/",
        tags: "apaixonado"
    },
    {
        titulo: "O Grande Hotel Budapeste",
        ano: 2014,
        descricao: "Uma comédia estilizada e visualmente vibrante sobre as aventuras de um concierge e seu aprendiz em um hotel luxuoso. A história é repleta de humor e personagens excêntricos.",
        link: "https://www.adorocinema.com/filmes/filme-207825/",
        tags: "feliz"
    },
    {
        titulo: "A Vida Secreta de Walter Mitty",
        ano: 2013,
        descricao: "Uma aventura visualmente deslumbrante sobre um homem que embarca em uma jornada épica para encontrar um fotógrafo desaparecido e transformar sua vida.",
        link: "https://www.adorocinema.com/filmes/filme-206710/",
        tags: "feliz apaixonado ansioso"
    },
    {
        titulo: "Sing Street",
        ano: 2016,
        descricao: "Um musical encantador sobre um jovem que forma uma banda para impressionar uma garota e encontra seu próprio caminho na vida através da música.",
        link: "https://www.adorocinema.com/filmes/filme-227018/",
        tags: "feliz apaixonado"
    },
    {
        titulo: "Se Beber, Não Case!",
        ano: 2009,
        descricao: "Uma comédia cheia de surpresas e situações absurdas, onde um grupo de amigos se vê em uma confusão monumental após uma noite de bebedeira em Las Vegas.",
        link: "https://www.adorocinema.com/filmes/filme-131394/",
        tags: "feliz"
    },
    {
        titulo: "Toy Story",
        ano: 1995,
        descricao: "A primeira animação da Pixar, que apresenta uma história encantadora sobre brinquedos que ganham vida quando não estão sendo observados.",
        link: "https://www.adorocinema.com/filmes/filme-14264/",
        tags: "feliz"
    },
    {
        titulo: "Tudo em Todo Lugar ao Mesmo Tempo",
        ano: 2023,
        descricao: "Uma comédia de ação e ficção científica que explora a ideia de multiversos com uma trama repleta de humor e criatividade.",
        link: "https://www.adorocinema.com/filmes/filme-270743/",
        tags: "feliz"
    },
    {
        titulo: "Up - Altas Aventuras",
        ano: 2009,
        descricao: "Uma animação que mistura comédia e emoção, seguindo um viúvo idoso que realiza o sonho de sua falecida esposa, enquanto embarca em uma jornada surpreendente.",
        link: "https://www.adorocinema.com/filmes/filme-130368/",
        tags: "triste ansioso feliz"
    },
    {
        titulo: "O Labirinto do Fauno",
        ano: 2006,
        descricao: "Uma fantasia sombria que entrelaça o mundo real e um reino mágico, enquanto uma jovem enfrenta uma dura realidade e busca escapar para um mundo de imaginação.",
        link: "https://www.adorocinema.com/filmes/filme-57689/",
        tags: "triste ansioso feliz"
    },
    {
        titulo: "O Jogo da Imitação",
        ano: 2014,
        descricao: "Um drama baseado em fatos reais sobre Alan Turing, que ajudou a decifrar os códigos nazistas durante a Segunda Guerra Mundial, revelando a luta e o legado do matemático.",
        link: "https://www.adorocinema.com/filmes/filme-198371/",
        tags: "triste ansioso"
    },
    {
        titulo: "Interestelar",
        ano: 2014,
        descricao: "Um épico de ficção científica que explora a viagem intergaláctica e os limites da compreensão humana sobre o espaço e o tempo, com visuais impressionantes e uma narrativa complexa.",
        link: "https://www.adorocinema.com/filmes/filme-114782/",
        tags: "ansiedade"
    },
    {
        titulo: "A Teoria de Tudo",
        ano: 2014,
        descricao: "Um retrato inspirador da vida de Stephen Hawking, explorando seus desafios pessoais e profissionais enquanto luta contra a esclerose lateral amiotrófica.",
        link: "https://www.adorocinema.com/filmes/filme-222221/",
        tags: "triste"
    },
    {
        titulo: "Parasita",
        ano: 2019,
        descricao: "Um thriller social sul-coreano que explora as disparidades econômicas e as complexas relações de classe através de uma trama cheia de reviravoltas e crítica social.",
        link: "https://www.adorocinema.com/filmes/filme-255238/",
        tags: "triste"
    },
    {
        titulo: "La La Land: Cantando Estações",
        ano: 2016,
        descricao: "Um conto encantador sobre dois artistas em Los Angeles, cuja busca por seus sonhos pessoais e profissionais coloca à prova o romance e as escolhas de vida.",
        link: "https://www.adorocinema.com/filmes/filme-229490/",
        tags: "feliz apaixonado"
    },
    {
        titulo: "Antes do Amanhecer",
        ano: 1995,
        descricao: "Um romance íntimo e contemplativo sobre o encontro casual entre dois estranhos em um trem, que passam uma noite explorando Viena e compartilhando suas esperanças e sonhos.",
        link: "https://www.adorocinema.com/filmes/filme-38493/",
        tags: "apaixonado"
    },
    {
        titulo: "P.S. Eu Te Amo",
        ano: 2007,
        descricao: "Uma comédia romântica com um toque de drama, sobre uma mulher que encontra cartas de seu falecido marido que a ajudam a enfrentar a dor e a encontrar novos começos.",
        link: "https://www.adorocinema.com/filmes/filme-111748/",
        tags: "apaixonado"
    },
];