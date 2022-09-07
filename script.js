function alimentosGramas(){
    var nome = document.getElementById("nome").value;
    var quan = document.getElementById("quan").value;
    var usad = document.getElementById("dias").value;
    var inte = document.getElementById("inte").value;
    var quantQui = quan;
    var quantSen = quantQui * usad;
    var quantMen = quantSen * 4;
    var quantCad = quan / inte;


    var caixa = document.getElementById("resposta");

    caixa.innerHTML = `<p>O produto foi ${nome}`;
    caixa.innerHTML += `<p>A quantidade foi ${quan} g`;
    caixa.innerHTML += `<p>Os dia usados ${usad}`;
    caixa.innerHTML += `<p>Os integrantes que usaram ${inte}`;
    caixa.innerHTML += `<p>A quantidade semanal consumida foi ${quantSen} kg`;
    caixa.innerHTML += `<p>A quantidade mensal consumida foi ${quantMen} kg`;
    caixa.innerHTML += `<p>Quantidade usada por cada integrante semanalmente: ${quantSen} g e mensalmente: ${quantMen}`;

}