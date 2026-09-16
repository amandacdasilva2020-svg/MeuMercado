const slides = document.querySelectorAll('.slide');
let slideAtual = 0;
function trocarSlide() {
    slides[slideAtual].classList.remove('ativo');
    slideAtual++;
    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }
    slides[slideAtual].classList.add('ativo');
}
setInterval(trocarSlide, 5000);

console.log(slides);
// Categorias

const botaoCategorias = document.getElementById("botao-categorias");
const listaCategorias = document.getElementById("lista-categorias");
botaoCategorias.addEventListener("click", function(){  
if (listaCategorias.style.display === "none") {
    listaCategorias.style.display = "block";
} else {
    listaCategorias.style.display = "none";
}

});
// busca de pesquisa
const produtos = [
    "Samsung Galaxy A15",
    "Egeo Original",
    "Fone Bluetooth"
];
console.log(produtos);

const campoPesquisa = document.getElementById("campo-pesquisa");
const botaoPesquisa = document.getElementById("botao-pesquisa");
const resultadoPesquisa = document.getElementById("resultado-pesquisa");

botaoPesquisa.addEventListener("click", function(){

    const produto = campoPesquisa.value;

    console.log("o usuário digitau:", produto);



if (produto ==="") {    
  alert("Digite o nome de um produto.");
} else {
    const encontrado = produtos.find(item =>
        item.toLowerCase().includes(produto.toLowerCase())
    );

    if(encontrado) {
        alert("Produto encontrado: " + encontrado);

    resultadoPesquisa.innerHTML = `
        <div class="card-produto">
            <img src="img/a15.webp" alt="Samsung Galaxy A15">
            <h3>${encontrado}</h3>
            <p>⭐ 4,7/5</p>
            <p>Produto encontrado no MeuMercado</p>
            <button>Comprar</button>
        </div>
        `;
    } else {
        alert("Produto não encontrado.");
    }
}
});
//login

const botaoConta = document.getElementById("botao-conta");

botaoConta.addEventListener("click",function(){
  window.location.href = "login.html";
});