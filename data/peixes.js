// 🔹 LISTA DE PEIXES (BASE DE DADOS)
// =====================================================
     const listaPeixes = [
    {
        nome: "Baiacu",
        img: "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png",
        local: "Oceano",
        estacao: "Verão",
        horario: "12h — 16h",
        obs: "O baiacu é um peixe que pode ser pego no oceano, em dias ensolarados de verão do meio-dia às 4 da tarde ou na Ilha Gengibre durante qualquer estação, ao Oeste da ilha (no oceano), Sul, Sudeste e na Caverna do Pirata. Pode ser encontrado aleatoriamente em Latas de lixo durante o verão, podendo ser comprado no Carrinho de Viagem por 600-100 ouros 🪙,Pode ser pego independente do clima, tempo ou estação se for utilizada uma Isca Mágica."

    },
    {
        nome: "Anchova",
        img: "https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png",
         local: "Oceano",
         estacao: "Primavera e Outono",
         horario: "Qualquer horário",
         obs: "A Anchova é um peixe que pode ser encontrado na Primavera e Outono.Parece ser mais fácil de pescar na frente da casa de Willy, usando arremessos fracos."
    },
    {
        nome: "Atum",
        img: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
        local: "Oceano",
        estacao: "Verão e Inverno",
        horario: "6h — 19h",
        obs: "O Atum é um peixe que pode ser pego no Oceano durante o Verão e Inverno, entre as 06:00 e as 19:00 da noite. Apesar de não ser comum, também pode ser encontrado em latas de lixo."
    },
    {
        nome: "Sardinha",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
        local: "Oceano",
        estacao: "Primavera/Outono/Inverno",
        horario: "6h — 19h",
        obs: "A Sardinha é um peixe que pode ser pego no Oceano durante a Primavera, o Outono e o Inverno entre as 06:00 e as 19:00. Também pode ser encontrada em latas de lixo."
    },
    {
        nome: "Brema",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/8/82/20170223215511%21Bream.png",
        local: "Rio",
        estacao: "Todas as Estações",
        horario: "18h — 2h",
        obs: "Brema é um peixe encontrado no rio durante todas as estações após as 18:00."
    },
    {
        nome: "Achigã",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/1/11/20191126194706%21Largemouth_Bass.png",
        local: "Lago da Montanha",
        estacao: "Todas as Estações",
        horario: "6h — 19h",
        obs: "O Achigã é um peixe encontrado no lago da Montanha em todas as estações."
    },
    {
        nome: "Achigã-pequeno",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Smallmouth_Bass.png",
        local: "Rio ou Lago",
        estacao: "Primavera e Outono",
        horario: "Qualquer horário",
        obs: "O Achigã-pequeno é um peixe encontrado no rio da cidade e na lagoa da floresta durante a Primavera e o Outono"
    },
    {
        nome: "Truta Arco-íris",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png",
        local: "Rio ou Lago",
        estacao: "Verão",
        horario: "6h — 19h",
        obs: "A truta arco-íris é um peixe que pode ser achado no rio e no lago da montanha durante o verão. Ao coloca-la no Lago de Peixes ela tem uma pequena chance de gerar um Fragmento prismático, se a população for ≥ 9."
    },
    {
        nome: "Salmão",
        img: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png",
        local: "Rio",
        estacao: "Outono",
        horario: "6h — 19h",
        obs: "O Salmão é um peixe que pode ser encontrado no rio durante o Outono. Pode também ser comprado pelo Carrinho de Viagem por  225 ouros ou encontrado nas latas de lixo durante o Outono."
    },
    {
        nome: "Picão-verde",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png",
        local: "Rio ou Lago",
        estacao: "Outono",
        horario: "12h — 2h",
        obs: "O picão-verde é um peixe que pode ser encontrado nos rio e nos lagos durante o outono enquanto está chovendo. Ele também pode ser encontrado nas latas de lixo, durante o outono e o inverno.Se o jogador escolher a fazenda na floresta, o picão-verde também pode ser pescado na lagoa da fazenda."
    },
    {
        nome: "Perca",
        img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png",
        local: "Rio ou Lago",
        estacao: "Inverno",
        horario: "Qualquer horário",
        obs: "A perca é um peixe que pode ser encontrado no rio e no lago da montanha e na lagoa da floresta Cinzaseiva. Também pode ser comprada no Carrinho de Viagem por 165–1000 ouros ou encontrada na latas de lixo durante o inverno."
    },
    {
        nome: "Carpa",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png",
        local: "Lago da Montanha",
        estacao: "Todas (Exceto Inverno)",
        horario: "Qualquer horário",
        obs: "A Carpa é um peixe que pode ser pego durante qualquer estação, se você souber onde procurar. O melhor lugar para tentar é no lado oeste da Lago da Montanha, próximo às minas. Carpas podem ser encontradas em lagos na Floresta Cinzaseiva durante a Primavera, Verão, ou Outono. Além disso, está disponível em qualquer estação no lago do Bosque Secreto ou no Esgoto."
    },
    {
        nome: "Bagre",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/9/99/20170225192119%21Catfish.png",
        local: "Rio ou Pântano",
        estacao: "Primavera e Outono",
        horario: "6h — 0h",
        obs: "O Bagre é um peixe que pode ser encontrado no rio (Vila+Floresta) durante a Primavera ou Outono quando estiver chovendo, assim como no Pântano da bruxa. No Verão, só pode ser encontrado na lagoa do Bosque Secreto. Tambem pode ser encontrado em Lata de lixo na Primavera, Outono, ou Inverno."
    },
    {
        nome: "Lúcio",
        img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Pike.png",
        local: "Rio ou Lago",
        estacao: "Verão e Inverno",
        horario: "Qualquer horário",
        obs: "Lúcio é um peixe que pode ser encontrado no rio durante o verão e o inverno.."
    },
    {
        nome: "Peixe-sol",
        img: "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
        local: "Rio",
        estacao: "Primavera e Verão",
        horario: "6h — 19h",
        obs: "O peixe-sol é um peixe que pode ser encontrado no rio durante a primavera e o verão. Também pode ser comprado do Carrinho de Viagem por 100–1000 ouros, ou encontrado em uma lata de lixo nessas mesmas estações."
    },
    {
        nome: "Salmonete",
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png",
        local: "Oceano",
        estacao: "Verão e inverno",
        horario: "6h — 19h",
        obs: "Há muito tempo, este peixe era mantido como animal de estimação"
    },
    {
        nome: "Arenque",
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png",
        local: "Oceano",
        estacao: "Primavera e Inverno",
        horario: "Qualquer horário",
        obs: "Um peixe comum de oceano."
    },
    {
        nome: "Enguia",
        img: "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png",
        local: "Oceano",
        estacao: "Primavera e Outono",
        horario: "16h — 2h",
        obs: "A enguia é um peixe que pode ser encontrado no oceano durante a primavera e o outono, quando estiver chovendo, das 16h às 2h. Raramente pode ainda ser encontrado em latas de lixo nas mesmas estações."
    },
    {
        nome: "Polvo",
        img: "https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png",
        local: "Oceano",
        estacao: "Verão",
        horario: "6h — 13h",
        obs: "Extremamente difícil de fisgar e lutar!"
    },
    {
        nome: "Cioba",
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png",
        local: "Oceano",
        estacao: "Verão e Outono",
        horario: "6h — 19h",
        obs: "Só pode ser pescado quando está CHOVENDO."
    },
    {
        nome: "Lula",
        img: "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
        local: "Oceano",
        estacao: "Inverno",
        horario: "18h — 2h",
        obs: "Só aparece à noite no inverno."
    },
    {
        nome: "Algas Marinhas",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png",
        local: "Oceano",
        estacao: "Todas",
        horario: "Qualquer",
        obs: "Usado para Sashimi e Rolinho de Alga."
    },
    {
        nome: "Algas Verdes",
        img: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Green_Algae.png",
        local: "Água Doce",
        estacao: "Todas",
        horario: "Qualquer",
        obs: "Pode ser pescado em quase qualquer lugar de água doce."
    },
    {
        nome: "Pepino-do-mar",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png",
        local: "Oceano",
        estacao: "Outono e Inverno",
        horario: "6h — 19h",
        obs: "Usado para fazer a Sopa da Sorte."
    },
    {
        nome: "Superpepino",
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Super_Cucumber.png",
        local: "Oceano",
        estacao: "Verão e Outono",
        horario: "18h — 2h",
        obs: "Raro e valioso peixe noturno do oceano."
    },
    {
        nome: "Peixe-fantasma",
        img: "https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png",
        local: "Minas (Lagos)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Encontrado nos níveis 20 e 60 das minas. Também deixado por Fantasmas."
    },
    {
        nome: "Algas Brancas",
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f7/White_Algae.png",
        local: "Minas / Esgoto",
        estacao: "Todas",
        horario: "Qualquer",
        obs: "Pode ser pescada em lagos subterrâneos ou no esgoto."
    },
    {
        nome: "Peixe-pedra",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/03/Stonefish.png",
        local: "Minas (Nível 20)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Um peixe pesado e difícil de fisgar nas profundezas."
    },
    {
        nome: "Peixe-carmim",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/d/dc/20170225201236%21Crimsonfish.png",
        local: "Oceano (Píer Leste)",
        estacao: "Verão",
        horario: "6h — 20h",
        obs: "Lendário! Requer nível 5 de pesca. Vive após a ponte de madeira na praia."
    },
    {
        nome: "Tamboril",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/b/bf/20170222220740%21Angler.png",
        local: "Rio (Norte)",
        estacao: "Outono",
        horario: "Qualquer horário",
        obs: "Lendário! Encontrado na ponte de madeira ao norte do JojaMart."
    },
    {
        nome: "Chione",
        img: "https://stardewvalleywiki.com/mediawiki/images/6/63/Ice_Pip.png",
        local: "Minas (Nível 60)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Um peixe gelado muito agitado. Exige paciência!"
    },
    {
        nome: "Enguia de Lava",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/12/Lava_Eel.png",
        local: "Minas (Nível 100)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Vive no magma. Um dos peixes mais difíceis de todo o jogo."
    },
    {
        nome: "Lenda",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/10/Legend.png",
        local: "Lago da Montanha",
        estacao: "Primavera",
        horario: "6h — 20h",
        obs: "O Rei dos Peixes! Só aparece se estiver CHOVENDO e você for nível 10."
    },
    {
        nome: "Areinha",
        img: "https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png",
        local: "Deserto",
        estacao: "Todas as Estações",
        horario: "6h — 20h",
        obs: "Comum no pequeno lago que fica no deserto de Calico."
    },
    {
        nome: "Carpa Escorpiônica",
        img: "https://stardewvalleywiki.com/mediawiki/images/7/76/Scorpion_Carp.png",
        local: "Deserto",
        estacao: "Todas as Estações",
        horario: "6h — 20h",
        obs: "Muito difícil! Requer nível 4 de pesca para ser fisgada no deserto."
    },
    {
        nome: "Linguado",
        img: "https://stardewvalleywiki.com/mediawiki/images/8/85/Flounder.png",
        local: "Oceano",
        estacao: "Primavera e Verão",
        horario: "6h — 20h",
        obs: "Um peixe achatado que vive no fundo do mar."
    },
    {
        nome: "Carpa da Meia-noite",
        img: "https://stardewvalleywiki.com/mediawiki/images/3/33/Midnight_Carp.png",
        local: "Lago da Montanha",
        estacao: "Outono e Inverno",
        horario: "22h — 2h",
        obs: "Só pode ser pescada tarde da noite em águas doces."
    },
    {
        nome: "Concha",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/e/ed/20170225194328%21Clam.png",
        local: "Oceano, Praia, Minas",
        estacao: "Todas as Estações",
        horario: "Qualquer",
        obs: "Pode ser coletada na praia ou pega com Covo no oceano."
    },
    {
        nome: "Carpa Mutante",
        img: "https://stardewvalleywiki.com/mediawiki/images/c/cb/Mutant_Carp.png",
        local: "Esgotos",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Lendário! Uma das criaturas que vivem no esgoto da cidade."
    },
    {
        nome: "Esturjão",
        img: "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png",
        local: "Lago da Montanha",
        estacao: "Verão e Inverno",
        horario: "6h — 19h",
        obs: "Difícil de pescar. Suas ovas produzem o Caviar."
    },
    {
        nome: "Salmão Híbrido",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png",
        local: "Rio",
        estacao: "Outono e Inverno",
        horario: "6h — 19h",
        obs: "Um peixe raro que não pode se reproduzir em tanques."
    },
    {
        nome: "Peixe-gato-cabeçudo",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/d/db/20170223215908%21Bullhead.png",
        local: "Pântano da Bruxa",
        estacao: "Todas as Estações",
        horario: "Qualquer",
        obs: "Encontrado nas águas sombrias do pântano da Bruxa."
    },
    {
        nome: "Tilápia",
        img: "https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png",
        local: "Oceano",
        estacao: "Verão e Outono",
        horario: "6h — 14h",
        obs: "Um peixe comum de águas quentes."
    },
    {
        nome: "Esquálio",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/b/bd/20170225193954%21Chub.png",
        local: "Rio ou Lago",
        estacao: "Todas as Estações",
        horario: "Qualquer",
        obs: "Um peixe de água doce muito fácil de encontrar."
    },
    {
        nome: "Dourado",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/18/Dorado.png",
        local: "Rio (Floresta)",
        estacao: "Verão",
        horario: "6h — 19h",
        obs: "Peixe brilhante encontrado apenas nos rios durante o verão."
    },
    {
        nome: "Albacora",
        img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png",
        local: "Oceano",
        estacao: "Outono e Inverno",
        horario: "6h — 11h / 18h — 2h",
        obs: "Prefere as temperaturas mais frias do oceano."
    },
    {
        nome: "Alocine",
        img: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png",
        local: "Rio",
        estacao: "Prim./Ver./Out.",
        horario: "9h — 2h",
        obs: "Atenção: Só aparece quando está CHOVENDO."
    },
    {
        nome: "Ófis",
        img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png",
        local: "Rio ou Lago",
        estacao: "Inverno",
        horario: "Qualquer",
        obs: "Fica muito agitado na barra de pesca durante o inverno."
    },
    {
        nome: "Halibute",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/02/Halibut.png",
        local: "Oceano",
        estacao: "Primavera/Verão/Inverno",
        horario: "6h — 11h / 19h — 2h",
        obs: "Um peixe plano e grande do mar."
    },
    {
        nome: "Lagosta",
        img: "https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png",
        local: "Covo (Oceano)",
        estacao: "Todas",
        horario: "Qualquer",
        obs: "Encontrada usando o Covo no mar."
    },
    {
        nome: "Lagostim",
        img: "https://stardewvalleywiki.com/mediawiki/images/5/53/Crayfish.png",
        local: "Covo (Água Doce)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Pego com o Covo em rios ou no lago da fazenda."
    },
    {
        nome: "Caranguejo",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/6/63/20170225200935%21Crab.png",
        local: "Covo (Oceano)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Pode ser pego no mar com Covo ou dropado por caranguejos nas Minas."
    },
    {
        nome: "Berbigão",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Cockle.png",
        local: "Oceano / Praia",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Encontrado na areia da praia ou pego no Covo no oceano."
    },
    {
        nome: "Mexilhão",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png",
        local: "Oceano / Praia",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Comum nas rochas da praia ou pego no Covo no oceano."
    },
    {
        nome: "Camarão",
        img: "https://stardewvalleywiki.com/mediawiki/images/9/91/Shrimp.png",
        local: "Covo (Oceano)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Crustáceo pego exclusivamente com Covo no mar."
    },
    {
        nome: "Lesma",
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png",
        local: "Covo (Água Doce)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Pego com o Covo em água doce. O Vincent adora!"
    },
    {
        nome: "Caramujo",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png",
        local: "Covo (Água Doce)",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Muito comum de encontrar em Covos colocados em rios."
    },
    {
        nome: "Ostra",
        img: "https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png",
        local: "Oceano / Praia",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Pode ser coletada na praia ou pega com o Covo no mar."
    },
    {
        nome: "Madeirão",
        img: "https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png",
        local: "Bosque Secreto",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
        obs: "Vive no lago escondido do Bosque Secreto."
    },
    {
        nome: "Peixe-gelo",
        img: "https://stardewvalleywiki.com/mediawiki/images/archive/f/fd/20180513191701%21Glacierfish.png",
        local: "Rio (Floresta)",
        estacao: "Inverno",
        horario: "6h — 20h",
        obs: "Lendário! Pescado na ponta sul da Ilha Arrowhead."
    },
    {
        nome: "Salmão Nulo",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png",
        local: "Pântano da Bruxa",
        estacao: "Todas as Estações",
        horario: "Qualquer horário",
     },
];
        
