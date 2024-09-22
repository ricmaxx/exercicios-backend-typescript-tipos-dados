const  gerarEtiquetas = (infos: {produto: string, lote: number, ano: number, qtd: number}): string[] => {

    const resultado: string[] = [];

    for (let i = 1; i < infos.qtd; i++) {
        resultado.push(`${infos.lote}-${infos.ano}-${i.toString().padStart(3,"0")}`);
        
    }

    return resultado
}

console.log(gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));