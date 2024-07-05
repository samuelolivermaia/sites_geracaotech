const taskForm = document.getElementById('todoForm')
const listatarefas = document.getElementById('listaTarefas')

taskForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nomeTarefa = document.getElementById('descricaoTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaTarefa = { nome: nomeTarefa, descricao: descricaoTarefa};
    salvarTarefa(novaTarefa);
    taskForm.reset();

});

const salvarTarefa = (tarefa) => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa')) || [];
    tarefa.push(tarefa);
    localStorage.setItem('tarefa', JSON.stringify(tarefa));
    carregarTarefas();
};

const carregarTarefas  = () => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa')) || [];
    tarefa.forEach((tarefa, index) => {
        const cartao = document.createElement('div');
    });
};