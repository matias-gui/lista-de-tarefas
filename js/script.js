let tarefa = document.getElementById('itext')
let tarefas = []
let msg = document.querySelector('.msg')

function salvarLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function carregarLocalStorage() {
    const dados = localStorage.getItem('tarefas')
    if (dados) {
        tarefas = JSON.parse(dados)
        tarefas.forEach(t => listarTarefas(t))
    }
}

function adicionar() {
    if (tarefa.value.trim().length === 0) {
        msg.innerHTML = 'Nenhuma tarefa digitada'
        msg.style.display = 'block'
        msg.style.color = '#000'
        msg.style.backgroundColor = 'rgba(255, 255, 255, 0.28)'
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000)
    } else {
        let novaTarefa = {
            id: Date.now(),
            texto: tarefa.value.trim(),
            concluida: false
        }
        tarefas.push(novaTarefa)
        salvarLocalStorage()
        tarefa.value = ''
        listarTarefas(novaTarefa)
    }
}

function listarTarefas(tarefaObj) {
    let listar = document.querySelector('.listar-tarefas')
    let li = document.createElement('li')
    li.dataset.id = tarefaObj.id

    let divIcones = document.createElement('div')
    divIcones.classList.add('icones')

    let img = document.createElement('img')
    img.src = 'imagens/bloquear.png'
    img.classList.add('icone-lixeira')

    let imgVerificar = document.createElement('img')
    imgVerificar.src = 'imagens/check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png'
    imgVerificar.classList.add('icone-verificar')
    divIcones.appendChild(imgVerificar)
    divIcones.appendChild(img)

    li.appendChild(document.createTextNode(tarefaObj.texto))
    li.appendChild(divIcones)
    listar.appendChild(li)

    if (tarefaObj.concluida) {
        li.style.textDecoration = 'line-through'
        li.style.color = '#000000ff'
        li.style.backgroundColor = 'rgba(14, 124, 4, 0.2)'
        imgVerificar.style.display = 'none'
    }

    img.addEventListener('click', () => {
        li.remove()
        tarefas = tarefas.filter(t => t.id !== tarefaObj.id)
        salvarLocalStorage()
        msg.innerHTML = 'Tarefa removida com sucesso'
        msg.style.display = 'block'
        msg.style.color = '#fff0f0ff'
        msg.style.backgroundColor = 'rgba(255, 0, 0, 1)'
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000)
    })

    imgVerificar.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'
        li.style.color = '#000000ff'
        li.style.backgroundColor = 'rgba(14, 124, 4, 0.2)'
        imgVerificar.style.display = 'none'

        const idx = tarefas.findIndex(t => t.id === tarefaObj.id)
        if (idx > -1) {
            tarefas[idx].concluida = true
            salvarLocalStorage()
        }
        msg.innerHTML = 'Parabéns! Tarefa concluída'
        msg.style.display = 'block'
        msg.style.color = '#fff0f0ff'
        msg.style.backgroundColor = 'rgba(14, 124, 4, 1)'
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000)
    })
}


document.addEventListener('DOMContentLoaded', carregarLocalStorage)