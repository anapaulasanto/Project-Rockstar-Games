//pegar o botao que vou clicar
const botao = document.querySelector('.btn-plataforma');

//pegar o conteudo que vou mostrar quando clicar
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

//pegar o clique do usuario
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle('ativo');
});



