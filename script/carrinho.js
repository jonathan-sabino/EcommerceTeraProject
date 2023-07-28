function diaDataHora() {
    // Array com os nomes dos dias da semana
    let diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    // Obter o elemento onde o dia da semana, data e hora serão exibidos
    let diaDataHoraElement = document.getElementById('diaDataHora');
    
    // Obter a data e hora atual
    let dataHoraAtual = new Date();

    // Obter o dia da semana atual
    let diaSemanaAtual = diasSemana[dataHoraAtual.getDay()];

    // Formatar a data e hora (opcional, você pode personalizar conforme sua preferência)
    let dataFormatada = dataHoraAtual.toLocaleDateString(); // Exemplo: "27/07/2023"
    let horaFormatada = dataHoraAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Exemplo: "15:30

    // Exibir o dia da semana, data e hora no elemento HTML
    diaDataHoraElement.textContent = diaSemanaAtual + ': ' + dataFormatada + ' - ' + horaFormatada;
}

// Chamar a função para atualizar o dia da semana, data e hora assim que a página carregar
diaDataHora();

// Atualizar o dia da semana, data e hora a cada segundo (1000 milissegundos)
setInterval(atualizarDiaDataHora, 60000);