function mostrarDadosForm(event){
    event.preventDefault();
    //let e o nome da variavel
    let nome = document.getElementById("ipNome").value; //Se é byId vc coloca o id, se for byname coloca o name, e o value é para o input
    let email = document.getElementById("ipEmail").value;
    
    let DtNascimento = document.getElementById("ipDtNascimento").value;
    //configurando data de nascimento para o padrão brasileira
    //let dataFormatada= new Date(DtNascimento).toLocaleDateString("pt-BR"); //Nem toda data da certo por conta do padrão americano e fuso horario
    //o - é oq tá separando o dia mês e ano quando executa o codigo
    let partes = DtNascimento.split("-");
    //vetor começa no 0
    //[1]-1 pq senão não começa de janeiro, começa de fevereiro (ponteiro)
    //[0] ano, [1]-1 mês, [2] dia
    let data = new Date(partes[0],partes[1]-1,partes[2]);
    //converte para estrura de data br, dia, mês e ano
    let dataFormatada = data.toLocaleDateString("pt-BR")
    
    let mensagem = document.getElementById("taMensagem").value;
    //let motivo = document.getElementById("slMotivo").value;//serviços n aparece com ç em baixo, pq o option tá puxando o value
    let motivo = document.getElementById("slMotivo");
    let motivoSelecionado = motivo.options[motivo.selectedIndex].text;
    let retorno = "Olá, " + nome + ", confira os dados informados:";
    //let mensagem = `Olá, ${nome} dados enviados com sucesso!`;
    //alert(nome + ", dados enviados!");
    //alert(mensagem);

    //insere a mensagem no h2
    document.getElementById("resposta").innerText=retorno;
    document.getElementById("pNome").innerText="Nome: " + nome;
    document.getElementById("pEmail").innerText="Email: " + email;
    document.getElementById("pData").innerText="Data de nascimento: " + dataFormatada;
    document.getElementById("pMensagem").innerText="Mensagem: " + mensagem;
    document.getElementById("pMotivo").innerText="Motivo: " + motivoSelecionado;
    //O sinal de + é para fazer concatenização

}