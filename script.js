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
                        descricao: "Uma landing page que desenvolvi pensando na área de transportes do meu amigo",
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
                    }
                ]
            };
        }
    }).mount("#app");
});
