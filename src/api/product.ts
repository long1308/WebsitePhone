import { IProduct } from "../interfaces/product";
import instance from "./insntace";
export const getAllProducts = () => {
    return instance.get("/products")
}

export const getProduct = (id: string ) => {
    return instance.get("/products/" + id)
}

export const updateProduct = (id: string | number, products:IProduct) => {
    return instance.put("/products/" + id, products)
}

export const addProduct = (products:IProduct) => {
    return instance.post("/products", products)
}

export const deleteProduct = (id: string ) => {
    return instance.delete("/products/" + id)
}

