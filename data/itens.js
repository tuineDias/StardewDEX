const listaItens = {
    "Raiz forte": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png", 
        preco: "50g", 
        local: "Coleta", 
        obs: "Raiz picante." 
    },
    "Narciso": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png", 
        preco: "30g", 
        local: "Coleta", 
        obs: "Flor amarela." 
    },
    "alho-porô": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png", 
        preco: "30g", 
        local: "Coleta", 
        obs: "Um item maneiro." 
    },
    "Dente-de-leão": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png", 
        preco: "30g", 
        local: "Coleta", 
        obs: "Um item legal." 
    },
    "Uva": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", 
        preco: "30g", 
        local: "Coleta", 
        obs: "Doce e roxa." 
    },
    "Café de jardim": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png", 
        preco: "30g", 
        local: "Coleta", 
        obs: "Baga vermelha de verão." 
    },
    "Ervilha-de-cheiro": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png", 
        preco: "50g", 
        local: "Verão", 
        obs: "Fragrante." 
    },
    "Cogumelo comum": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png", 
        preco: "40g", 
        local: "Outono", 
        obs: "Pode ser frito." 
    },
    "Ameixa selvagem": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png", 
        preco: "80g", 
        local: "Outono", 
        obs: "Fruta ácida." 
    },
    "Avelã": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png", 
        preco: "90g", 
        local: "Outono", 
        obs: "Esquilos adoram." 
    },
    "Amora": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png", 
        preco: "20g", 
        local: "Outono", 
        obs: "Cresce em arbustos." 
    },
    "Raiz de inverno": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png", 
        preco: "70g", 
        local: "Inverno", 
        obs: "Cava na neve." 
    },
    "Fruta de cristal": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png", 
        preco: "150g", 
        local: "Inverno", 
        obs: "Parece gelo." 
    },
    "Inhame de neve": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png", 
        preco: "100g", 
        local: "Inverno", 
        obs: "Tubérculo gelado." 
    },
    "Flor de açafrão": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png", 
        preco: "60g", 
        local: "Inverno", 
        obs: "Flor de inverno." 
    },
    "Barra de cobre": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f0/Copper_Bar.png", 
        preco: "60g", 
        local: "Fornalha", 
        obs: "5 minérios + carvão." 
    },
    "Barra de ferro": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png", 
        preco: "120g", 
        local: "Fornalha", 
        obs: "Fundição." 
    },
    "Barra de ouro": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png", 
        preco: "250g", 
        local: "Fornalha", 
        obs: "Valor alto." 
    },
    "Quartzo": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png", 
        preco: "25g", 
        local: "Minas", 
        obs: "Gema comum." 
    },
    "Cristal de terra": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png", 
        preco: "50g", 
        local: "Minas", 
        obs: "Níveis baixos." 
    },
    "Lágrima congelada": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png", 
        preco: "75g", 
        local: "Minas", 
        obs: "Nível 40+." 
    },
    "Essência solar": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png", 
        preco: "40g", 
        local: "Monstros", 
        obs: "Cai de Fantasmas." 
    },
    "Baba solar": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png", 
        preco: "5g", 
        local: "Slimes", 
        obs: "Gosma comum." 
    },
    "Asa de morcego": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/3/3c/Bat_Wing.png", 
        preco: "15g", 
        local: "Morcegos", 
        obs: "Asa preta." 
    },
    "Essência vazia": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png", 
        preco: "50g", 
        local: "Xamãs", 
        obs: "Poder sombrio." 
    },
        "ametista": { 
        nome: "Ametista", // <-- O nome real que aparece na tela
        img: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Amethyst.png", 
        preco: "100g", 
        local: "Caverna", 
        obs: "Joia roxa." 
    },
    "bolo_chocolate": { 
        nome: "Bolo de Chocolate", // <-- O nome real que aparece na tela
        img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png", 
        preco: "200g", 
        local: "Cozinha,conjunto cofre 2.500 ouros", 
        obs: "RECEITA: açúcar, trigo e ovo(obtido da rainha do molho)"
        
    },
    // ... os outros itens (como Argila, Narciso, etc) continuam do jeito antigo sem problema!

    "Argila": { 
        img: "https://stardewvalleywiki.com/mediawiki/images/a/af/Clay.png", 
        preco: "20g", 
        local: "Solo", 
        obs: "Solo arado." 
},
"item_madeira": { 
        nome: "Madeira (99)", // <-- O nome real que aparece na tela
        img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png", 
        preco: "2g", 
        local: "Corte árvores com um machado", 
        obs: "A Madeira é um recurso básico recursos que pode ser obtido cortando árvores e galhos com um machado ou comprado da Robin na Carpintaria por Gold.png10 ouros no ano 1 e por Gold.png50 ouros no ano 2+. Também pode ser encontrado Baús do Tesouro da pescaria. Noventa e nove madeiras também podem ser recebidas como presente de Robin na Festival da Estrela Invernal."
        },
"item_pedra": { 
        nome: "pedra (99)",// <-- O nome real que aparece na tela
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png", 
        preco: "2g", 
        local: "Corte árvores com um machado", 
        obs: "Pedra é um recurso obtido minerando rochas com uma picareta. Pedras também podem ser compradas com a Robin na Carpintaria por Gold.png20 ouros no ano 1 e por Gold.png100 ouros no ano 2+ ou encontrada em baus de pesca. Vinte pedras também podem ser recebidas como um presente de Robin na Festival da Estrela Invernal."
        },
        "item_madeira-de-lei (10)":{ 
        nome: "Madeira de Lei",
        img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png", 
        preco: "20g", 
        local: "Solo", 
        obs: "Madeira de lei é um recurso. Pode ser obtido cortando um toco grande com um machado de cobre ou superior, ou um tronco grande com um machado de aço ou superior.Seis (6) tocos grandes reaparecem diariamente no Bosque Secreto, possibilitando a obtenção de 12 madeiras de lei por dia. Se você tem o mapa da Fazenda de Floresta, há mais oito (8) tocos no lado esquerdo da sua fazenda, que reaparecem diariamente. Também pode ser encontrado ao quebrar Caixas e Barris nas minas. Árvore de mogno e Tocos também podem ser encontradas nas As Minas, nos níveis 41 ao 79, durante a missão Perigo nas Profundezas ou após ativar o Santuário do Desafio, fornecendo mais um meio de adquirir a Madeira de Lei.Árvores normais possuem uma chance de fornecer madeira de lei com a habilidade de lenhador. Robin pode também lhe presentar com 25 madeiras de lei no Festival da Estrela Invernal. Você também pode obter 8-13 madeiras de lei cortando uma Árvore de mogno." 
        }
};


