document.addEventListener("DOMContentLoaded", function () {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                projetos: [
                    {
                        id: 1,
                        imagem: "Imagens/transportes318/landingpage.png",
                        titulo: "318 Transportes",
                        descricao: "Uma landing page que desenvolvi pensando na empresa de transportes de meu amigo ",
                        icones: ["fa-brands fa-html5", "fa-brands fa-css3-alt"],
                        linkSite: "https://joaogabrielrlp.github.io/318.transportes.io/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/318.transportes.io.git"
                    },

                    {
                        id: 2,
                        imagem: "Imagens/Cooper/GifCooper.gif",
                        titulo: "Coopernorte Telecom",
                        descricao: "Site de vendas para uma empresa de provedor de internet que trabalhei",
                        icones: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js"],
                        linkSite: "https://www.coopernortetelecom.com.br/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/Coopernorte-telecom"
                    },

                    {
                        id: 3,
                        imagem: "Imagens/SybaseLogManager/SybaseGif.gif",
                        titulo: "SybaseLogManager",
                        descricao: "O Sybase Log Manager é uma ferramenta auxiliar para a aplicação, desvincúlo e gerenciamento de banco de dados e logs do Sybase 17, projetada para ser utilizada com o sistema Domínio ou o SQL Anywhere versão 17.",
                        icones: ["fa-brands fa-python"],
                        linkRepo: "https://github.com/JoaoGabrielRLP/SybaseLogManager"
                    },

                    {
                        id: 4,
                        imagem: "Imagens/WeatherApp/WeatherApp.png",
                        titulo: "Clima App",
                        descricao: "Este é um aplicativo web simples de previsão do tempo que permite aos usuários pesquisar pelo clima de qualquer cidade em tempo real. Ele usa a API do OpenWeatherMap para obter informações como temperatura, descrição do clima, umidade e velocidade do vento.",
                        icones: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js"],
                        linkSite: "https://joaogabrielrlp.github.io/ClimaApp.io/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/SybaseLogManager"
                    }
                ]
            };
        }
    }).mount("#app");
});
