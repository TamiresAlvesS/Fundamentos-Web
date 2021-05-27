let nome = window.document.getElementById('nome')

/*
Case Sentive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName() 
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('name')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.nodeValue.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
    }

    function validaEmail(){
        let txt = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') ==-1 || email.value.indexof('.')== -1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'
        }
    }

    function validaAssunto(){
        let txtAssunto = document.querySelector('#txtassunto')
        if (assunto.value.length >= 100) {
            txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color='red'
            txtAssunto.style.display = 'block'
        } else {
            txtAssunto.style.display = 'none'

        }
    }