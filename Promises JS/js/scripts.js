
'use strict'

// Criação de promessa.
const myPromise = new Promise((resolve, reject) => {
    const nome = "Renan"

    if(nome === "Renan") {
        resolve('Usuário Renan encontrado!')
    } else {
        reject('Usuário Renan não foi encontrado!')
    } 
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's.
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Renan"

    if(nome === "Renan") {
        resolve('Usuário Renan encontrado!')
    } else {
        reject('Usuário Renan não foi encontrado!')
    } 
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch.
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Joao'

    if(nome === 'Renan') {
        resolve('Usuário Renan encontrado!')
    } else {
        reject('O usuário Renan não foi encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro' + err)
})

// Resolver várias promesas com .all 
const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise4 ok!')
    }, 2000)
})

const myPromise5 = new Promise((resolve, reject) => {
    resolve('Promise5 ok!')
})

const myPromise6 = new Promise((resolve, reject) => {
    resolve('Promise6 ok!')
})

const resolveAllPromises = Promise.all([myPromise4, myPromise5, myPromise6]).then((data) => {
    console.log(data)
})

// Resolver várias promesas com .race
const myPromise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise7 ok!')
    }, 2000)
})

const myPromise8 = new Promise((resolve, reject) => {
    resolve('Promise8 ok!')
})

const myPromise9 = new Promise((resolve, reject) => {
    resolve('Promise9 ok!')
})

const resolveAllRace = Promise.race([myPromise7, myPromise8, myPromise9]).then((data) => {
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'renawmontanari'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`O nome do usuário é ${data.name}`)
        console.log(data)
    })
    .catch((err) => {
        console.log(`Houve algum erro: ${err}`)
    })
