class ProductManager {
    constructor()

    async getProduct() {
    
    }
}

import { promises as fs } from 'fs'

const path = './productos.json'

const getProducts = async () => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    console.log(prods)
}

const getProductById = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto)
        console.log(producto)
    else
        console.log("Producto desconocido")

}

const addProduct = async (product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === product.id)

    if (producto) {
        console.log("Producto ya agregado")
    } else {
        prods.push(product)
        await fs.writeFile(path, JSON.stringify(prods))
    }

}

const updateProduct = async (id, product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const indice = prods.findIndex(prod => prod.id === id)
    //0   1   2
    //[{}, {}, {}]
    if (indice != -1) {
        prods[indice].nombre = product.nombre

        await fs.writeFile(path, JSON.stringify(prods))
    } else {
        console.log("Producto desconocido")
    }

}

const deleteProduct = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto) {
        await fs.writeFile(path, JSON.stringify(prods.filter(prod => prod.id != id)))
    } else {
        console.log("Producto desconocido")
    }

}


const product1 = { id: 1, nombre: "Carne" }
const product2 = { id: 2, nombre: "Fideos" }
const product3 = { id: 3, nombre: "Papas" }

deleteProduct(2)