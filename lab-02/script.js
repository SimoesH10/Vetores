// ARRAY PRINCIPAL
let meuArray = [];
// EXIBIÇÃO NA TELA

function mostrarArray() {
    const div = document.getElementById("meuArray");
    // Limpa a tela para evitar duplicação de elementos
    div.innerHTML = "";
    // Percorre o array atual e "desenha" cada item na tela
    for (let intem of meuArray){
        // Cada elemento do array vira um bloco visual (<p>)
        div.innerHTML += `
            <p class = "bg-gray-500 text-white py-2 rounded">
                ${intem}
            </p> `
    }
};

// PUSH (LÓGICA)
function push(array, valor) {

  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    novoArray[i] = array[i];
  }
  // Adiciona o novo valor na última posição disponível
  // (posição = tamanho atual do array)
  novoArray[array.length] = valor;

  return novoArray;
};


function executarPush(){
    // Pega o valor digitado 
    const valor = document.getElementById("elemento").value;
    // Aplica os dados no array:
    meuArray = push(meuArray, valor);
    mostrarArray();
};

// UNSHIFT (LÓGICA)
function unshift(array, valor) {
  // Inserir um elemento no INÍCIO, e obriga todos os outros elementos a "andar uma casa pra frente"
  let novoArray = [];
  // Primeiro coloca o novo valor na posição 0
  novoArray[0] = valor;
  // Copia o array original deslocando +1
  for (let i = 0; i < array.length; i++) {
    novoArray[i + 1] = array[i];
  }
  return novoArray;
}


function executarUnshift(){

  const valor = document.getElementById("elemento").value;
  meuArray = unshift(meuArray, valor);

  mostrarArray();
}

// SHIFT (LÓGICA)
function shift(array) {
  // Remover o PRIMEIRO elemento, isso exige "puxar" todos os outros para trás
  let novoArray = [];
  // Começa do índice 1 
  for (let i = 1; i < array.length; i++) {
    // Cada elemento ocupa a posição anterior (i - 1)
    novoArray[i - 1] = array[i];
  }

  return novoArray;
}


function executarShift(){

  meuArray = shift(meuArray);

  mostrarArray();
}

// POP (LÓGICA)
function pop(array) {
  // Remover o ÚLTIMO elemento, basta copiar tudo, exceto o último
  let novoArray = [];
  // Percorre até o penúltimo índice
  for (let i = 0; i < array.length - 1; i++) {
    novoArray[i] = array[i];
  }
  return novoArray;
}


function executarPop(){

  meuArray = pop(meuArray);

  mostrarArray();
}