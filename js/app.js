// /js/app.js

window.onload = () => { 
    mostrarTela("tela-inicial"); 
};

// 🔹 NAVEGAÇÃO PRINCIPAL
document.getElementById("btn-iniciar")?.addEventListener("click", () => mostrarTela("tela-menu"));
document.getElementById("btn-voltar-menu")?.addEventListener("click", () => mostrarTela("tela-inicial"));

document.getElementById("btn-peixedex")?.addEventListener("click", () => { mostrarTela("tela-peixes"); gerarPeixes(); });
document.getElementById("btn-aldeoes")?.addEventListener("click", () => { mostrarTela("tela-aldeoes"); gerarAldeoes(); });
document.getElementById("btn-centro")?.addEventListener("click", () => { mostrarTela("tela-centro"); gerarCentro(); });

document.querySelectorAll(".voltar").forEach(b => b.addEventListener("click", (e) => { 
    if (e.target.id !== "btn-voltar-menu") mostrarTela("tela-menu"); 
}));

// 🔹 FECHAR MODAIS
document.getElementById("btn-fechar-modal")?.addEventListener("click", () => modalPeixe.style.display = "none");
document.getElementById("btn-fechar-modal-aldeoes")?.addEventListener("click", () => modalAldeoes.style.display = "none");
document.getElementById("btn-fechar-modal-item")?.addEventListener("click", () => modalItem.style.display = "none");
document.getElementById("btn-fechar-modal-centro")?.addEventListener("click", () => modalCentro.style.display = "none");

// 🔹 CHECKBOXES E RESET
document.getElementById("btn-resetar")?.addEventListener("click", () => {
    if (confirm("Deseja resetar todo o progresso da PeixeDex?")) {
        stardewStorage.resetarPeixes();
        gerarPeixes();
    }
});

document.getElementById("modal-check")?.addEventListener("change", (e) => {
    if (e.target.checked) slotAtualSelecionado.classList.remove("bloqueado");
    else slotAtualSelecionado.classList.add("bloqueado");
    atualizarContador();
    
    const caps = Array.from(document.querySelectorAll('.peixe-slot:not(.bloqueado)')).map(s => s.querySelector('.peixe-nome').innerText);
    stardewStorage.salvarPeixes(caps);
});

document.getElementById("check-item-entregue")?.addEventListener("change", (e) => {
    let ents = stardewStorage.obterItens();
    if (e.target.checked) { 
        if(!ents.includes(itemAtualSelecionado)) ents.push(itemAtualSelecionado); 
        elementoItemNoModal?.classList.remove("bloqueado"); 
    } else { 
        ents = ents.filter(i => i !== itemAtualSelecionado); 
        elementoItemNoModal?.classList.add("bloqueado"); 
    }
    stardewStorage.salvarItens(ents);
    

    // --- 👇 AS LINHAS QUE RESOLVEM O SEU PROBLEMA 👇 ---
    gerarCentro(); // Atualiza os ícones das salas no menu principal (o fundo)
    if (pacoteAbertoAtual) {
        // Se você estava dentro de um pacote (ex: Inverno), ele abre o pacote direto!
        abrirItensDoConjunto(pacoteAbertoAtual);
    } else if (salaAbertaAtual) {
        // Se por algum motivo não tiver pacote aberto, volta pra sala
        abrirModalSala(salaAbertaAtual);
    }
});
// [COLE AQUI A LÓGICA DE FILTROS DOS PEIXES QUE CONSTRUÍMOS ANTES]

// =====================================================
// 🔹 LÓGICA DO FILTRO DA PEIXEDEX
// =====================================================
const btnFiltroPrincipal = document.getElementById('btn-filtro-principal');
const menuFiltroOpcoes = document.getElementById('menu-filtro-opcoes');
const botoesOpcaoFiltro = document.querySelectorAll('.btn-estacao-filtro');

// 1. Abrir e Fechar o menu de filtro
btnFiltroPrincipal?.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique feche o menu na mesma hora
    menuFiltroOpcoes.classList.toggle('mostrar');
});

// 2. Fechar o menu se clicar em qualquer lugar fora dele
window.addEventListener('click', () => {
    menuFiltroOpcoes?.classList.remove('mostrar');
});

// 3. A mágica de filtrar os peixes
botoesOpcaoFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // A) Pinta o botão clicado de marrom e tira a cor dos outros
        botoesOpcaoFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');

        // B) Pega qual foi a estação escolhida
        const filtro = botao.getAttribute('data-estacao');
        const peixes = document.querySelectorAll('.peixe-slot');

        // C) Esconde ou mostra os peixes
        peixes.forEach(slot => {
            const nomePeixe = slot.querySelector('.peixe-nome').innerText;
            // Como o arquivo data/peixes.js carrega primeiro, o app.js conhece a listaPeixes!
            const dadosPeixe = listaPeixes.find(p => p.nome === nomePeixe);

            if (filtro === 'todos') {
                slot.style.display = 'flex';
            } else if (filtro === 'Outros') {
                // Se for especial, verifica se não pertence às 4 estações normais
                const estacoesComuns = ["Primavera", "Verão", "Outono", "Inverno"];
                const eEspecial = !estacoesComuns.some(est => dadosPeixe.estacao.includes(est));
                slot.style.display = eEspecial ? 'flex' : 'none';
            } else {
                // Verifica se a estação do peixe inclui a estação clicada
                slot.style.display = dadosPeixe.estacao.includes(filtro) ? 'flex' : 'none';
            }
        });
        
        // D) Fecha o menu automaticamente depois de escolher
        menuFiltroOpcoes.classList.remove('mostrar');
    });
});




// =====================================================
// 🔹 LÓGICA DE PESQUISA DA PEIXEDEX
// =====================================================
const inputBusca = document.getElementById('input-busca');

if (inputBusca) {
    inputBusca.addEventListener('input', (evento) => {
        // Pega o que você digitou e transforma tudo em minúsculo (para não ter erro de maiúscula/minúscula)
        const termoDigitado = evento.target.value.toLowerCase();
        
        // Pega todas as caixinhas de peixes da tela
        const todosOsPeixes = document.querySelectorAll('.peixe-slot');

        todosOsPeixes.forEach(slot => {
            // Pega o nome do peixe que está escrito na caixinha
            const nomeDoPeixe = slot.querySelector('.peixe-nome').innerText.toLowerCase();

            // Se o nome do peixe tem as letras que você digitou, ele aparece. Se não, ele some.
            if (nomeDoPeixe.includes(termoDigitado)) {
                slot.style.display = 'flex';
            } else {
                slot.style.display = 'none';
            }
        });
    });
}
