
let listaCompras = []

function adicionaritem() {
    let item = document.getElementById("item").value
    if (item == "") {
        alert("Campo Item não Prenchido")
    }
    // listaCompras[listaCompras.length] = item
    else {

        if (listaCompras.indexOf(item) < 0) {

            listaCompras.push(item)

            Imprimir()
        } else {
            alert("item adicionado")
            Limpar()
        }
    }

}

function Limpar() {
    document.getElementById("item").value = ""
    let itemremover = document.getElementById("Itemremover").value = ""
}

function Imprimir() {

    document.getElementById("lista").innerText = listaCompras.join(" | ")

}

function removeritem() {
    let itemremover = document.getElementById("Itemremover").value

    let indiceRemover = listaCompras.indexOf(itemremover)

    if (indiceRemover < 0) {
        alert("Item não encontrado")

    }
    else {

        listaCompras.splice(indiceRemover, 1)
        alert("item removido com sucesso")
        Imprimir()

    }

    Limpar()
}


