const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
function objetoMaiusculo(obj){
    for (let i in obj){
        obj[i] = obj[i].toUpperCase()
    }
    return obj
}
console.log(objetoMaiusculo(objeto))

//2. A segunda deve retornar os valores do objeto como texto corrido.
function objetoValores(obj){
    let text = ""
    for (let i in obj){
        text += `${obj[i]} | `
    }
    return text.trim()
}
console.log(objetoValores(objeto))
//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

function objetoCallBack(obj, func){
    console.log(func(obj))
}
objetoCallBack(objeto, objetoMaiusculo)
objetoCallBack(objeto, objetoValores)