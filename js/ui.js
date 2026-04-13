// ==========================================
// js/ui.js - RESPONSÁVEL POR DESENHAR NA TELA
// ==========================================

// Variáveis de estado global
let pacoteAbertoAtual = null; 
let peixeAtualSelecionado = null;
let slotAtualSelecionado = null;
let itemAtualSelecionado = null;
let elementoItemNoModal = null;
let salaAbertaAtual = null;

// Referências de Modais
const modalPeixe = document.getElementById("modal-peixe");
const modalAldeoes = document.getElementById("modal-aldeoes");
const modalItem = document.getElementById("modal-item");
const modalCentro = document.getElementById("modal-centro");
const contadorTexto = document.getElementById("contador-peixes");

function mostrarTela(telaId) {
    ["tela-inicial", "tela-menu", "tela-peixes", "tela-aldeoes", "tela-centro"].forEach(id => {
        const tela = document.getElementById(id);
        if(tela) tela.style.display = "none";
    });
    document.getElementById(telaId).style.display = "block";
}

function atualizarContador() {
    if (!contadorTexto) return;
    const total = listaPeixes.length;
    const pegos = document.querySelectorAll('.peixe-slot:not(.bloqueado)').length;
    contadorTexto.innerText = `${pegos} / ${total}`;
}

// 🐟 PEIXES
function gerarPeixes() {
    const container = document.getElementById("container-grid-peixes");
    if (!container) return; container.innerHTML = "";
    const salvos = stardewStorage.obterPeixes(); 
    
    listaPeixes.forEach(peixe => {
        const slot = document.createElement("div");
        slot.className = "peixe-slot";
        if (!salvos.includes(peixe.nome)) slot.classList.add("bloqueado");
        slot.innerHTML = `<img src="${peixe.img}" class="peixe-img"><span class="peixe-nome">${peixe.nome}</span>`;
        slot.addEventListener("click", () => {
            peixeAtualSelecionado = peixe; slotAtualSelecionado = slot;
            document.getElementById("modal-img").src = peixe.img;
            document.getElementById("modal-nome").innerText = peixe.nome;
            document.getElementById("modal-estacao").innerText = peixe.estacao;
            document.getElementById("modal-horario").innerText = peixe.horario;
            document.getElementById("modal-local").innerText = peixe.local;
            document.getElementById("modal-obs").innerText = peixe.obs;
            document.getElementById("modal-check").checked = !slot.classList.contains("bloqueado");
            modalPeixe.style.display = "flex";
        });
        container.appendChild(slot);
    });
    atualizarContador();
}

// 🧑‍🌾 ALDEÕES
function gerarAldeoes() {
    const container = document.getElementById("container-grid-aldeoes");
    if (!container) return; container.innerHTML = "";
    aldeoes.forEach(aldeao => {
        const slot = document.createElement("div");
        slot.className = "aldeao-slot";
        slot.innerHTML = `<img src="${aldeao.retrato}" class="aldeao-img"><span class="aldeao-nome">${aldeao.nome}</span>`;
        slot.addEventListener("click", () => {
            document.getElementById("modal-aldeao-img").src = aldeao.retrato;
            document.getElementById("modal-aldeao-nome").innerText = aldeao.nome;
            document.getElementById("modal-aldeao-niver").innerText = aldeao.aniversario || "N/A";
            document.getElementById("modal-aldeao-endereco").innerText = aldeao.endereco || "N/A";
            document.getElementById("modal-aldeao-familia").innerText = aldeao.familia || "N/A";

            const criarLista = (id, lista) => {
                const c = document.getElementById(id); c.innerHTML = "";
                lista.forEach(n => {
                    const info = listaItens[n]; if(!info) return;
                    const b = document.createElement("div"); 
                    b.className = "item-presente-btn";
                    const nomeParaTela = info.nome ? info.nome : n; 
                    b.innerHTML = `<img src="${info.img}"><span>${nomeParaTela}</span>`;
                    b.addEventListener("click", (e) => { e.stopPropagation(); abrirDetalhesItem(n); });
                    c.appendChild(b);
                });
            };
            criarLista("modal-aldeao-amados", aldeao.itensAmados);
            criarLista("modal-aldeao-odiados", aldeao.itensOdiados);
            modalAldeoes.style.display = "flex";
        });
        container.appendChild(slot);
    });
}

// 🏛️ CENTRO COMUNITÁRIO
function gerarCentro() {
    const container = document.getElementById("container-grid-centro");
    if (!container) return; container.innerHTML = "";
    const entregues = stardewStorage.obterItens();

    dadosCentro.forEach(comodo => {
        const slot = document.createElement("div");
        slot.className = "sala-centro-slot";
        const salaEstaCompleta = comodo.conjuntos.every(conj => 
            conj.itens.every(item => entregues.includes(item))
        );
        const imgExibir = salaEstaCompleta ? comodo.imgPronta : comodo.img;
        if (salaEstaCompleta) slot.classList.add("sala-completa");

        slot.innerHTML = `<img src="${imgExibir}" class="sala-centro-img"><span class="aldeao-nome">${comodo.nome}</span>`;
        slot.addEventListener("click", () => {
            salaAbertaAtual = comodo;
            abrirModalSala(comodo);
        });
        container.appendChild(slot);
    });
}

function abrirModalSala(comodo) {
    pacoteAbertoAtual = null;
    document.getElementById("btn-fechar-modal-centro").style.display = "block";
    const imgSala = document.getElementById("modal-centro-sala-img");
    document.getElementById("modal-centro-nome").innerText = comodo.nome;
    const container = document.getElementById("container-conjuntos");
    container.innerHTML = `<div class="banner-recompensa">🎁 Recompensa: ${comodo.recompensa}</div>`;
    
    const gridConjuntos = document.createElement("div");
    gridConjuntos.className = "lista-presentes";
    const entregues = stardewStorage.obterItens();

    const salaCompleta = comodo.conjuntos.every(conj => 
        conj.itens.every(item => entregues.includes(item))
    );
    imgSala.src = salaCompleta ? comodo.imgPronta : comodo.img;
    imgSala.style.filter = salaCompleta ? "drop-shadow(0 0 10px gold)" : "none";

    comodo.conjuntos.forEach(conjunto => {
        const btnConjunto = document.createElement("div");
        btnConjunto.className = "conjunto-slot";
        const completo = conjunto.itens.every(item => entregues.includes(item));
        if (completo) btnConjunto.classList.add("completo");
        else btnConjunto.classList.add("bloqueado");

        btnConjunto.innerHTML = `<img src="${conjunto.icone}" class="conjunto-img"><span class="conjunto-nome">${conjunto.nome}</span>`;
        btnConjunto.addEventListener("click", () => abrirItensDoConjunto(conjunto));
        gridConjuntos.appendChild(btnConjunto);
    });
    container.appendChild(gridConjuntos);
    modalCentro.style.display = "flex";
}

function abrirItensDoConjunto(conjunto) {
    pacoteAbertoAtual = conjunto;
    document.getElementById("btn-fechar-modal-centro").style.display = "none";
    const container = document.getElementById("container-conjuntos");

    // 👇 Atualiza a imagem da sala aqui dentro também
    if (salaAbertaAtual) {
        const imgSala = document.getElementById("modal-centro-sala-img");
        const entregues = stardewStorage.obterItens();
        const salaCompleta = salaAbertaAtual.conjuntos.every(c => 
            c.itens.every(item => entregues.includes(item))
        );
        imgSala.src = salaCompleta ? salaAbertaAtual.imgPronta : salaAbertaAtual.img;
        imgSala.style.filter = salaCompleta ? "drop-shadow(0 0 10px gold)" : "none";
    }
    
    container.innerHTML = `
        <div class="tag-conjunto-topo"><span class="texto-titulo-conjunto">${conjunto.nome}</span></div>
        <div class="banner-recompensa-conjunto">🎁 Recompensa: ${conjunto.recompensa || "Não informada"}</div>
        <div id="grid-itens-bundle" class="lista-presentes"></div>
        <button id="btn-voltar-conjuntos" class="btn-voltar-modal">⬅ Voltar aos Conjuntos</button>
    `;

    const gridItens = document.getElementById("grid-itens-bundle");
    const entregues = stardewStorage.obterItens();

    conjunto.itens.forEach(nome => {
        const info = listaItens[nome]; if (!info) return;
        const btn = document.createElement("div");
        btn.className = "item-presente-btn";
        if (!entregues.includes(nome)) btn.classList.add("bloqueado");
        const nomeParaTela = info.nome ? info.nome : nome; 
        btn.innerHTML = `<img src="${info.img}"><span>${nomeParaTela}</span>`;
        btn.addEventListener("click", (e) => { e.stopPropagation(); abrirDetalhesItem(nome, btn); });
        gridItens.appendChild(btn);
    });

    document.getElementById("btn-voltar-conjuntos").addEventListener("click", () => {
        pacoteAbertoAtual = null; 
        abrirModalSala(salaAbertaAtual);
    });
}

function abrirDetalhesItem(nomeItem, elementoClicado = null) {
    const item = listaItens[nomeItem]; if (!item) return;
    itemAtualSelecionado = nomeItem;
    elementoItemNoModal = elementoClicado;
    const nomeParaTela = item.nome ? item.nome : nomeItem;
    
    document.getElementById("modal-item-img").src = item.img;
    document.getElementById("modal-item-nome").innerText = nomeParaTela;
    document.getElementById("modal-item-preco").innerText = item.preco || "N/A";
    document.getElementById("modal-item-local").innerText = item.local;
    document.getElementById("modal-item-obs").innerText = item.obs;
    
    const secaoEntrega = document.getElementById("secao-entrega-item");
    if (elementoClicado) {
        secaoEntrega.style.display = "block";
        const entregues = stardewStorage.obterItens();
        document.getElementById("check-item-entregue").checked = entregues.includes(nomeItem);
    } else {
        secaoEntrega.style.display = "none";
    }
    modalItem.style.display = "flex";
}
