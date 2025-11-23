let tarefa = document.getElementById('itext')
let tarefas = []
let msg = document.querySelector('.msg')
function adicionar(){
    if(tarefa.value.length === 0 ){
        msg.innerHTML = 'Nenhuma tarefa digitada'
        msg.style.display = 'block'
        msg.style.color = '#000'
        msg.style.backgroundColor = 'rgba(255, 255, 255, 0.28)'
        setTimeout(function(){
            msg.style.display = 'none'
        }, 5000)
    }else{
      let novaTarefa = tarefa.value
      tarefas.push(novaTarefa)
      tarefa.value = ''
      listarTarefas(novaTarefa)
    }  
}

function listarTarefas(novaTarefa){
    let listar = document.querySelector('.listar-tarefas')
    let li = document.createElement('li')  
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

    li.appendChild (document.createTextNode(novaTarefa))
    li.appendChild(divIcones)
    listar.appendChild(li)

    
    img.addEventListener('click', () =>{
    li.remove()
        msg.innerHTML = 'Tarefa removida com sucesso'
        msg.style.display = 'block'
        msg.style.color = '#fff0f0ff'
        msg.style.backgroundColor = 'rgba(255, 0, 0, 1)'
        setTimeout(function(){
            msg.style.display = 'none'
        }, 5000)})

    imgVerificar.addEventListener('click', () =>{
        li.style.textDecoration = 'line-through'
        li.style.color = '#86c297ff'
        msg.innerHTML = 'Parabéns! Tarefa concluída'
        msg.style.display = 'block'
        msg.style.color = '#fff0f0ff'
        msg.style.backgroundColor = 'rgba(14, 124, 4, 1)'
        setTimeout(function(){
            msg.style.display = 'none'
        }, 5000)})
    }