document.addEventListener("DOMContentLoaded", function () {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                projetos: [
                    {
                        id: 11,
                        imagem: "Imagens/NFTMarketplace/Img.png",
                        titulo: "NFT Marketplace",
                        descricao: "Marketplace demonstrativo em React e TypeScript, com catálogo, busca, filtros, favoritos, carrinho e pedidos simulados. Não utiliza blockchain nem processa pagamentos reais.",
                        tecnologias: ["TypeScript", "React", "Vite"],
                        linkSite: "https://nft-marketplace-alpha-henna.vercel.app/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/NFT-MARKETPLACE"
                    },
                    {
                        id: 10,
                        imagem: "Imagens/SistemaXadrez/Img.png",
                        titulo: "Streamers de xadrez",
                        descricao: "Aplicação web em React e TypeScript que consulta uma API para apresentar informações sobre streamers de xadrez.",
                        tecnologias: ["HTML", "CSS", "TypeScript", "React"],
                        linkSite: "https://joaogabrielrlp.github.io/StreamersChess.com/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/StreamersChess.com"
                    },
                    {
                        id: 8,
                        imagem: "Imagens/ClimaApp2.0/Img.jpeg",
                        titulo: "Clima App 2.0",
                        descricao: "Versão atualizada do Clima App, desenvolvida com TypeScript e Vite para consultar as condições do tempo por cidade.",
                        tecnologias: ["HTML", "CSS", "TypeScript", "Vite"],
                        linkSite: "https://joaogabrielrlp.github.io/ClimaApp-2.0/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/ClimaApp-2.0.git"
                    },
                    {
                        id: 9,
                        imagem: "Imagens/OrlandoCity/Img.png",
                        titulo: "Orlando City",
                        descricao: "Site de e-commerce sobre o Orlando City, com informações do time e fluxos de conta e compra, desenvolvido com Angular, PHP e MySQL.",
                        tecnologias: ["HTML", "CSS", "JavaScript", "Angular", "PHP", "MySQL"],
                        linkSite: "https://orlandocity.infinityfree.io/index",
                        linkRepo: "https://github.com/JoaoGabrielRLP/Orlando-City"
                    },
                    {
                        id: 7,
                        imagem: "Imagens/BudgetManager/Img.jpeg",
                        titulo: "Budget Manager",
                        descricao: "Aplicação web para organizar orçamentos e acompanhar despesas.",
                        tecnologias: ["HTML", "CSS", "TypeScript"],
                        linkSite: "https://joaogabrielrlp.github.io/budget-manager/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/Budget-Manager.git"
                    },
                    {
                        id: 1,
                        imagem: "Imagens/BuscaRepo/Img.jpeg",
                        titulo: "Busca de Repositórios",
                        descricao: "Aplicação que consulta a API do GitHub para buscar e explorar repositórios.",
                        tecnologias: ["HTML", "CSS", "TypeScript"],
                        linkSite: "https://joaogabrielrlp.github.io/BuscaRepositorios/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/BuscaRepositorios"
                    },
                    {
                        id: 5,
                        imagem: "Imagens/SGD-Notifier/Extensao.gif",
                        titulo: "SGD Assistente de Chamados",
                        descricao: "Extensão para ajudar equipes de suporte a organizar tarefas e horários de pico com notificações e tarefas personalizadas.",
                        tecnologias: ["HTML", "CSS", "JavaScript"],
                        linkRepo: "https://github.com/JoaoGabrielRLP/SGD-Assistente-de-Chamados"
                    },
                    {
                        id: 4,
                        imagem: "Imagens/WeatherApp/WeatherApp.png",
                        titulo: "Clima App",
                        descricao: "Aplicação web que consulta a API OpenWeatherMap para exibir as condições atuais, temperatura, umidade e vento por cidade.",
                        tecnologias: ["HTML", "CSS", "JavaScript"],
                        linkSite: "https://joaogabrielrlp.github.io/ClimaApp.io/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/ClimaApp.io"
                    },
                    {
                        id: 2,
                        imagem: "Imagens/Cooper/GifCooper.gif",
                        titulo: "Coopernorte Telecom",
                        descricao: "Site comercial para um provedor de internet, com informações sobre seus serviços e planos.",
                        tecnologias: ["HTML", "CSS", "JavaScript"],
                        linkSite: "http://www.coopernortetelecom.com.br/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/Coopernorte-telecom"
                    },
                    {
                        id: 6,
                        imagem: "Imagens/transportes318/landingpage.png",
                        titulo: "318 Transportes",
                        descricao: "Landing page criada para apresentar os serviços e as informações de uma empresa de transportes.",
                        tecnologias: ["HTML", "CSS", "Bootstrap"],
                        linkSite: "https://joaogabrielrlp.github.io/318.transportes.io/",
                        linkRepo: "https://github.com/JoaoGabrielRLP/318.transportes.io.git"
                    }
                ],
                extras: [
                    {
                        id: "sybase-log-manager",
                        imagem: "Imagens/SybaseLogManager/SybaseGif.gif",
                        titulo: "Sybase Log Manager",
                        descricao: "Ferramenta em Python para apoiar o vínculo e desvínculo de bancos de dados e o gerenciamento de logs do Sybase 17, com foco nos sistemas Domínio e SQL Anywhere 17.",
                        tecnologias: ["Python"],
                        linkRepo: "https://github.com/JoaoGabrielRLP/SybaseLogManager"
                    },
                    {
                        id: "crosscode-item-tracker",
                        titulo: "CrossCode Item Tracker",
                        descricao: "Mod em JavaScript para CCLoader 2 que acompanha materiais de receitas, atualiza o progresso no HUD e permite organizar várias listas. Também ajuda a localizar itens e salva os dados separadamente do save do jogo.",
                        tecnologias: ["JavaScript", "CCLoader 2", "CrossCode"],
                        linkRepo: "https://github.com/JoaoGabrielRLP/Crosscode-item-tracker",
                        imagemAtual: 0,
                        mouseOver: false,
                        focused: false,
                        imagens: [
                            {
                                src: "Imagens/CrossCodeItemTracker/ItemTracker-HUD.png",
                                alt: "HUD do CrossCode Item Tracker mostrando os materiais necessários para criar o Manto Rubro durante o jogo."
                            },
                            {
                                src: "Imagens/CrossCodeItemTracker/ItemTracker-Lists.png",
                                alt: "A aba Lists no menu de missões do CrossCode exibindo a lista de materiais do Manto Rubro."
                            }
                        ]
                    }
                ],
                carouselTimer: null
            };
        },
        mounted() {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }

            this.carouselTimer = window.setInterval(() => {
                if (document.hidden) {
                    return;
                }

                this.extras.forEach((projeto) => {
                    if (projeto.imagens && !projeto.mouseOver && !projeto.focused && projeto.imagens.length > 1) {
                        projeto.imagemAtual = (projeto.imagemAtual + 1) % projeto.imagens.length;
                    }
                });
            }, 6500);
        },
        beforeUnmount() {
            if (this.carouselTimer !== null) {
                window.clearInterval(this.carouselTimer);
            }
        },
        methods: {
            mudarImagem(projeto, direcao) {
                projeto.imagemAtual = (projeto.imagemAtual + direcao + projeto.imagens.length) % projeto.imagens.length;
            },
            selecionarImagem(projeto, indice) {
                projeto.imagemAtual = indice;
            },
            retomarCarrossel(event, projeto) {
                projeto.focused = Boolean(event.relatedTarget && event.currentTarget.contains(event.relatedTarget));
            }
        }
    }).mount("#app");
});
