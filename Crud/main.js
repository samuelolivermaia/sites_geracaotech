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
    const tarefa = JSON.parse(localStorage.getItem('tarefa'))
}