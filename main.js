function criaCartão(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao= document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    `
    container.appendChild(cartao);
}

#container{
    display: flex;
    padding: 4rem;
    gap: 3rem:
    flex-wrap: wrap;
}

.cartao{
    flex-grow: 1;
    flex-basis: calc(33% - 6rem)
    margin: 1rem;
    height: 20rem;
}