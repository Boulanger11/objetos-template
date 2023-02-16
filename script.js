///////////////// ABAIXO ESTA UMA MANEIRA INICIANTE PARA VER OS DOIS MODO (ORIGINAL E CÓPIA). ////////
/*  const estudante = {
nome: "Buda",
sobrenome: "Peste",
numeroDaMatricula: 1516161,
notasDoSemestre: [6.5, 7, 10, 5, 6]
}

estudante.modulo = 3
const moduloAtual = estudante.modulo

console.log(`Nome o aluno: ${estudante.nome}`)
console.log(`Segunda nota do semestre: ${estudante.notasDoSemestre[1]}`)
console.log(`Moduloa atual: ${moduloAtual}`)
console.log(estudante)

const copiaEstudante = {
    ...estudante,
    nome: `Astrodev`,
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    numeroDaMatricula: 01350
}
// OU
//  copiaEstudante.nome = "Astrodev"
//  copiaEstudante.modulo = 4
//  copiaEstudante.notasDoSemestre = 9

console.log(copiaEstudante)

///////////////// ABAIXO ESTA UMA MANEIRA QUE VER O "ORIGINAL" E "CÓPIA" EM UMA ABA. /////////////////
const estudanteLabunu = []

estudanteLabunu.push(estudante, copiaEstudante)
console.log(estudanteLabunu)*/


/* FIXAÇÃO */
// 1)
const carrinho = {
    nome: `leonardo`,
    forma: `cartão de crédito`,
    endereço: `vila madalena`
    
}

carrinho.compras = [
    produto1 = {
        nome: `arroz`,
        preço: 8,
        quantidade: 2

    },
    produto2 = {
        nome: `feijão`,
        preço: 10,
        quantidade: 1
    }]

    const quantidaDeProduto = carrinho.compras.length

    //criando copia Carrinho para Presente

    const carrinhoPresente = {
        ...carrinho,
        nome: `Ingrid`,
        formaDePagamento: `pix`
    }


console.log(carrinho)
console.log(quantidaDeProduto)
console.log('Carrinho original:', carrinho)
console.log('Carrinho presente:', carrinhoPresente)

const unSegundoProduto = carrinho.compras[0].quantidade
console.log(unSegundoProduto)