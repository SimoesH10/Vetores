let meuArray = [];

function mostrarArray() {
    const div = document.getElementById("meuArray")
    div.innerHTML = ""

    for (let intem of meuArray){
        div.innerHTML += `
            <span class = "bg-gray-500 text-white text-3xl py-2 rounded">
                ${intem}
            </span> `
    }
};

function executarPush(){
    const valor = document.getElementById("elemento").value
    meuArray.push(valor)
    mostrarArray()
};


function executarUnshift(){
    const valor =  document.getElementById("elemento").value
    meuArray.unshift(valor)
    mostrarArray()
};

function executarShift(){
    meuArray.shift()
    mostrarArray()
};

function executarPop(){
    meuArray.pop()
    mostrarArray()
};