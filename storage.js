// /js/storage.js
const stardewStorage = {
    // PEIXES
    obterPeixes: () => JSON.parse(localStorage.getItem('peixesCapturados') || "[]"),
    salvarPeixes: (peixes) => localStorage.setItem('peixesCapturados', JSON.stringify(peixes)),
    resetarPeixes: () => localStorage.removeItem('peixesCapturados'),
    
    // ITENS DO CENTRO
    obterItens: () => JSON.parse(localStorage.getItem('itensEntregues') || "[]"),
    salvarItens: (itens) => localStorage.setItem('itensEntregues', JSON.stringify(itens))
};
