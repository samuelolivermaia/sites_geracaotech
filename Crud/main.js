document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('todoForm');
    const listaTarefas = document.getElementById('listaTarefas');

    const carregarTarefas = () => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        listaTarefas.innerHTML = '';
        tarefas.forEach((tarefa, index) => {
            const cartao = document.createElement('div');
            cartao.className = 'col-md-4 mb-4';
            cartao.innerHTML = `
          <div class="card text-bg-dark mb-3 task-card">
            <div class="card-body">
              <h5 class="card-title">${tarefa.name}</h5>
              <p class="card-text">${tarefa.description}</p>
              <button class="btn btn-warning" onclick="editarTarefa(${index})">Editar</button>
              <button class="btn btn-danger" onclick="deletarTarefa(${index})">Excluir</button>
            </div>
          </div>
        `;
            listaTarefas.appendChild(cartao);
        });
    };

    const salvarTarefa = (tarefa) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeTarefa = document.getElementById('nomeTarefa').value;
        const descricaoTarefa = document.getElementById('descricaoTarefa').value;
        const newTask = { name: nomeTarefa, description: descricaoTarefa };
        salvarTarefa(newTask);
        taskForm.reset();
    });

    window.deletarTarefa = (index) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    };

    window.editarTarefa = (index) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        const task = tarefas[index];
        document.getElementById('nomeTarefa').value = task.name;
        document.getElementById('descricaoTarefa').value = task.description;
        tarefas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    };

    carregarTarefas();
    }
);