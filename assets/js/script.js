let bancoDeDados = [
    {nome: "Rabo de Raposa", altura: "13m a 20m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/rabo_de_raposa.jpg"},
    {nome: "Palmeira Fenix", altura: "2m a 4m", luminosidade: "Sol Pleno ou Meia Sombra", imagem: "../assets/imgs/plantas/fenix.jpg"},
    {nome: "Palmeira Veitchia", altura: "4m a 8m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/veitchia.jpg"},
    {nome: "Palmeira Áreca Banbu", altura: "6m a 12m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/areca_bambu.jpg"},
    {nome: "Palmeira Ráfia", altura: "2m a 3m", luminosidade: "Sombra ou Meia Sombra", imagem: "../assets/imgs/plantas/rafia.jpg"},
    {nome: "Palmeira Imperial", altura: "18m a 40m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/imperial.jpg"},
    {nome: "Guaimbê", altura: "1,5m a 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/guaimbe.jpg"},
    {nome: "Xanadu", altura: "60cm a 90cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/xanadu.jpg"},
    {nome: "Costela de Adão", altura: "80 cm a 1,5m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/costela_de_adao.jpg"},
    {nome: "Filodendro Ondulado", altura: "90 cm a 1,50m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/filodendro_ondulado.jpg"},
    {nome: "Maranta Charuto", altura: "Até 4m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/marata_charuto.jpg"},
    {nome: "Dracena Tricolor", altura: "Até 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/dracena_tricolor.jpg"},
    {nome: "Dracena Vermelha", altura: "1m a 1,5m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/dracena_vermelha.jpg"},
    {nome: "Bruxinhos", altura: "60 cm a 80 cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/bruxinho.jpg"},
    {nome: "Kaizuka", altura: "4m a 6m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/kaizuka.jpg"},
    {nome: "Cipreste Italiano", altura: "12m a 25m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/cipreste_italiano.jpg"},
    {nome: "Moreia", altura: "50cm a 70cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/moreia.jpg"},
    {nome: "Pleomele", altura: "1,5m a 3m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/pleomele.jpg"},
    {nome: "Ficus Lyrata", altura: "1m a 2m", luminosidade: "Sombra", imagem: "../assets/imgs/plantas/ficus_lyrata.jpg"},
    {nome: "Croton", altura: "1,5m a 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/croton.jpg"},
    {nome: "Jasmim Manga", altura: "4m a 6m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/jasmim_manga.jpg"},
    {nome: "Sulpaties", altura: "60cm a 80cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/sulpaties.jpg"},
    {nome: "Barba de Serpente", altura: "40cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/barba_de_serpente.jpg"},
    {nome: "Dianella", altura: "30cm a 50cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/dianella.jpg"},
    {nome: "Agapanthus", altura: "80cm a 1,2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/agapanthus.jpg"},
    {nome: "Alpinia Vermelha", altura: "1m a 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/alpinia_vermelha.jpg"},
    {nome: "Espada de São Jorge", altura: "80cm a 1,2m", luminosidade: "Sol, Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/espada_de_sao_jorge.jpg"},
    {nome: "Lança de São Jorge", altura: "50cm a 1m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/lanca_de_sao_jorge.jpg"},
    {nome: "Clusia", altura: "Até 5m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/clusia.jpg"},
    {nome: "Capim do Texas Rubro", altura: "1m a 1,2m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/capim_do_texas_rubro.jpg"},
    {nome: "Capim do Texas Verde", altura: "1m a 1,2m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/capim_do_texas_verde.jpg"},
    {nome: "Aspargo Plumoso Real", altura: "40cm a 60cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/aspargo_plumoso_real.jpg"},
    {nome: "Aspargo Alfinete Pendente", altura: "40cm a 60cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/aspargo_alfinete_pendente.jpg"},
    {nome: "Arvore do Viajante", altura: "12m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/arvore_do_viajante.jpg"},
    {nome: "Iris da Praia", altura: "90cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/iris_da_praia.jpg"},
    {nome: "Strelitzia", altura: "1,2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/strelitzia.jpg"},
    {nome: "Podocarpus", altura: "1m a 4m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/podocarpus.jpg"},
    {nome: "Pata de Elefante", altura: "3m a 5m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/pata_de_elefante.jpg"},
    {nome: "Tamareira", altura: "20m a 30m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/tamareira.jpg"},
    {nome: "Oliveira", altura: "5m a 20m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/oliveira.jpg"},
    {nome: "Bela Da Manhã", altura: "30cm a 50cm", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/bela_da_manha.jpg"},
    {nome: "Clorofito", altura: "15cm a 30cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/clorofito.jpg"},
    {nome: "Bela Emília", altura: "30cm a 50cm", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/bela_emilia.jpg"},
    {nome: "Begônia Cerosa", altura: "80cm a 1m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/begonia_cerosa.jpg"},
    {nome: "Trevo Roxo", altura: "40cm a 80cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/trevo_roxo.jpg"},
    {nome: "Hibisco", altura: "2m a 5m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/hibisco.jpg"},
    {nome: "Amaryllis", altura: "70cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/amaryllis.jpg"},
    {nome: "Camarão Amarelo", altura: "80cm a 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/camarao_amarelo.jpg"},
    {nome: "Rosa Do Deserto", altura: "40cm a 80cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/rosa_do_deserto.jpg"},
    {nome: "Dracena Arborea", altura: "3m a 6m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/dracena_arborea.jpg"},
    {nome: "Tostão Pendente", altura: "80cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/tostao_pendente.jpg"},
    {nome: "Bromélia Imperial", altura: "1m a 1,5m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/bromelia_imperial.jpg"},
    {nome: "Dracena Baby", altura: "80cm a 4m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/dracena_baby.jpg"},
    {nome: "Trapoeraba Roxa", altura: "20cm a 35cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/trapoeraba_roxa.jpg"},
    {nome: "Singónio", altura: "30cm a 40cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/singonio.jpg"},
    {nome: "Câmara Lantana", altura: "1m a 1,8m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/camara_lantana.jpg"},
    {nome: "Cyca", altura: "1,5m a 2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/cyca.jpg"},
    {nome: "Alocasia", altura: "1m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/alocasia.jpg"},
    {nome: "Bambú Mosso", altura: "1,5m a 4m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/bambu_mosso.jpg"},
    {nome: "Bambú da Sorte", altura: "1,5m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/bambu_da_sorte.jpg"},
    {nome: "Agave Palito", altura: "1,4m a 1,6m", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/agave_palito.jpg"},
    {nome: "Yuca Rostrata", altura: "2m a 3m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/yuca_rostrata.jpg"},
    {nome: "Lavanda", altura: "50cm a 70cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/lavanda.jpg"},
    {nome: "Asplênio Crespo", altura: "70cm a 1m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/anturio.jpg"},
    {nome: "Assistacia Rendada", altura: "60cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/assistacia_rendada.jpg"},
    {nome: "Azulzinha", altura: "30cm a 40cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/azulzinha.jpg"},
    {nome: "Capim Barba de Bode", altura: "30cm a 50cm", luminosidade: "Sol Pleno", imagem: "../assets/imgs/plantas/capim_barba_de_bode.jpg"},
    {nome: "Batata Roxa", altura: "15cm a 40cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/batata_roxa.jpg"},
    {nome: "Bromélia Rosa", altura: "40cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/bromelia_rosa.jpg"},
    {nome: "Bromélia Tricolor", altura: "30cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/bromelia_tricolor.jpg"},
    {nome: "Calatheia", altura: "40cm a 60cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/calatheia.jpg"},
    {nome: "Calathea Pavão", altura: "30cm a 50cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/calathea_pavao.jpg"},
    {nome: "Coleus", altura: "90cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/coleus.jpg"},
    {nome: "Comigo Ninguém Pode", altura: "90cm a 2m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/comigo_ninguem_pode.jpg"},
    {nome: "Inhame Preto", altura: "1,2m", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/inhame_preto.jpg"},
    {nome: "Pacová", altura: "1m a 1,5m", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/pacova.jpg"},
    {nome: "Russélia", altura: "60cm a 90cm", luminosidade: "Sol Pleno e Meia Sombra", imagem: "../assets/imgs/plantas/russelia.jpg"},
    {nome: "Véu de Noiva", altura: "90cm", luminosidade: "Sombra e Meia Sombra", imagem: "../assets/imgs/plantas/veu_de_noiva.jpg"}
];

function carregarDados() {
    let tabela = document.getElementById("tabela-dados");
    tabela.innerHTML = "";
    bancoDeDados.forEach((item) => {
        let linha = `<tr class="tableDisplay">
            <td><img src="${item.imagem}" alt="${item.nome}" class="imageDisplay"></td>
            <td class="nameDisplay">Nome: ${item.nome}</td>
            <td class="heightDisplay">Altura: ${item.altura}</td>
            <td class="luminosityDisplay">Luminosidade: ${item.luminosidade}</td>
        </tr>`;
        tabela.innerHTML += linha;
    });

}

window.onload = carregarDados;