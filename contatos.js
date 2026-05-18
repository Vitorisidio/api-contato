// 'use strict'

// const URL = 'https://bakcend-fecaf-render.onrender.com/contatos'

// export async function getContatos() {
//     const response = await fetch(URL)//Faz a requisição para a URL da API
//     if (!response.ok) throw new Error('Erro ao buscar contatos') // força lançar um erro caso haja algum, mesmo usando try/catch
//     return response.json()// Converte a resposta da API para JSON e retorna os dados

// }

// export async function postContatos(contato) {
//     // Configurações da requisição
//     const options = {
//         // Define o método da requisição como POST
//         method: 'POST',
//         // Define o tipo de conteúdo enviado para a API
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // Converte o objeto contato para JSON
//         // para conseguir enviar no body da requisição
//         body: JSON.stringify(contato)
//     }
//     // Faz a requisição enviando os dados do contato
//     const response = await fetch(URL, options)
//     if (!response.ok) throw new Error('Erro ao buscar contatos') // força lançar um erro caso haja algum, mesmo usando try/catch
//     return response.json()
// }

// export async function putContato(id, contato) {

//     const options = {
//         method: 'PUT',
//         headers: {
//              'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(contato)
//     }
//     const response = await fetch(`${URL}/${id}`, options)
//     if (!response.ok) throw new Error('Erro ao atualizar contatos') // força lançar um erro caso haja algum, mesmo usando try/catch
//     return response.json()

// }

// export async function deleteContato(id) {
//     const options = {
//         method: 'DELETE'
//     }
//     const response = await fetch(`${URL}/${id}`, options)
//     if (!response.ok) throw new Error('Erro ao deletar contatos') // força lançar um erro caso haja algum, mesmo usando try/catch
//     return true
// }