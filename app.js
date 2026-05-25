'use strict'

import {
    getContatos,
    getContato,
    postContatos,
    putContato,
    deleteContato
} from './contatos.js'

const table = document.querySelector('table')
const btnSalvar = document.querySelector('.salvar')

const foto = document.getElementById('foto')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const endereco = document.getElementById('endereco')
const cidade = document.getElementById('cidade')

// controla edição
let idEditando = null

// cria linha da tabela
function criarLinha(contato){

    const tr = document.createElement('tr')

    // ID
    const tdId = document.createElement('td')
    tdId.textContent = contato.id

    // FOTO
    const tdFoto = document.createElement('td')

    const img = document.createElement('img')
    img.src = contato.foto
    img.classList.add('foto-contato')

    tdFoto.appendChild(img)

    // NOME
    const tdNome = document.createElement('td')
    tdNome.textContent = contato.nome

    // EMAIL
    const tdEmail = document.createElement('td')
    tdEmail.textContent = contato.email

    // ENDEREÇO
    const tdEndereco = document.createElement('td')
    tdEndereco.textContent = contato.endereco

    // CIDADE
    const tdCidade = document.createElement('td')
    tdCidade.textContent = contato.cidade

    // AÇÕES
    const tdAcao = document.createElement('td')

    const div = document.createElement('div')
    div.classList.add('update-delete')

    const btnEditar = document.createElement('button')
    btnEditar.textContent = 'update'
    btnEditar.classList.add('acao', 'editar')

    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = 'delete'
    btnExcluir.classList.add('acao', 'excluir')

    div.appendChild(btnEditar)
    div.appendChild(btnExcluir)

    tdAcao.appendChild(div)

    // adiciona tudo na linha
    tr.appendChild(tdId)
    tr.appendChild(tdFoto)
    tr.appendChild(tdNome)
    tr.appendChild(tdEmail)
    tr.appendChild(tdEndereco)
    tr.appendChild(tdCidade)
    tr.appendChild(tdAcao)

    // DELETE
    btnExcluir.addEventListener('click', async () => {

        await deleteContato(contato.id)

        await carregarContatos()
    })

    // UPDATE
    btnEditar.addEventListener('click', async () => {

        const contatoAtualizado = await getContato(contato.id)
    
        foto.value = contatoAtualizado.foto
        nome.value = contatoAtualizado.nome
        email.value = contatoAtualizado.email
        endereco.value = contatoAtualizado.endereco
        cidade.value = contatoAtualizado.cidade
    
        idEditando = contatoAtualizado.id
    })

    table.appendChild(tr)
}

// carrega contatos da API
async function carregarContatos(){

    // remove linhas antigas
    const linhas = document.querySelectorAll('tr')

    linhas.forEach((linha, index) => {
        if(index > 0){
            linha.remove()
        }
    })

    const contatos = await getContatos()

    contatos.forEach(criarLinha)
}

// SALVAR
btnSalvar.addEventListener('click', async () => {

    const contato = {
        foto: foto.value,
        nome: nome.value,
        email: email.value,
        endereco: endereco.value,
        cidade: cidade.value
    }

    // UPDATE
    if(idEditando){

        await putContato(idEditando, contato)

        idEditando = null

    } else {

        // CREATE
        await postContatos(contato)
    }

    // limpa inputs
    foto.value = ''
    nome.value = ''
    email.value = ''
    endereco.value = ''
    cidade.value = ''

    // recarrega tabela
    await carregarContatos()
})

// inicia tabela
carregarContatos()