const showTicketFormButton = document.getElementById('show-ticket-form');
const ticketForm = document.getElementById('ticket-form');
const createTicketForm = document.getElementById('create-ticket-form');
const ticketList = document.querySelector('#ticket-list');

// Recupere os chamados salvos no armazenamento local e adicione-os à lista
const savedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
savedTickets.forEach((ticketData) => {
    createTicketItem(ticketData);
});

showTicketFormButton.addEventListener('click', function () {
    ticketForm.style.display = 'block';
});

createTicketForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Obtenha os valores do formulário
    const organization = document.getElementById('organization').value;
    const creator = document.getElementById('creator').value;
    const description = document.getElementById('description').value;
    const department = document.getElementById('department').value;
    const assignee = document.getElementById('assignee').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;
    const additionalAssignee = document.getElementById('additionalAssignee').value;

    // Crie um objeto para representar o chamado
    const ticketData = {
        organization,
        creator,
        description,
        department,
        assignee,
        priority,
        category,
        additionalAssignee,
    };

    // Crie o elemento li para o chamado e adicione-o à lista
    createTicketItem(ticketData);

    // Salve o chamado no armazenamento local
    savedTickets.push(ticketData);
    localStorage.setItem('tickets', JSON.stringify(savedTickets));

    // Limpe o formulário
    createTicketForm.reset();

    // Oculte o formulário novamente
    ticketForm.style.display = 'none';
});

// Função para criar o elemento li e adicioná-lo à lista
function createTicketItem(data) {
    const ticketItem = document.createElement('li');
    ticketItem.id = 'ticket-item';
    ticketItem.innerHTML = `
        <p><strong>Organização:</strong> ${data.organization}</p>
        <p><strong>Criador:</strong> ${data.creator}</p>
        <p><strong>Descrição:</strong> ${data.description}</p>
        <p><strong>Setor:</strong> ${data.department}</p>
        <p><strong>Cessionário:</strong> ${data.assignee}</p>
        <p><strong>Prioridade:</strong> ${data.priority}</p>
        <p><strong>Categoria:</strong> ${data.category}</p>
        <p><strong>Cessionário Adicional:</strong> ${data.additionalAssignee}</p>
    `;
    ticketList.appendChild(ticketItem);
}

