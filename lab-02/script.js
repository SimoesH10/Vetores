let meuArray = [];

function mostrarArray() {
    const div = document.getElementById("meuArray")
    div.innerHTML = ""

    for (let intem of meuArray){
        div.innerHTML += `
            <p class = "bg-gray-500 text-white  py-2  rounded">
                ${intem}
            </p> `
    }
};


function push(array, valor) {

  for (let i = 0; i < array.length; i++) {
    meuArray[i] = array[i];
  }

  meuArray[array.length] = valor;

  return meuArray;
};

function executarPush(){
    const valor = document.getElementById("elemento").value
    meuArray.push(valor)
    mostrarArray()
};
