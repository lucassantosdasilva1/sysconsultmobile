//Consertar a tipagem
//Fazer a edicao, exclusao, adicao por meio do context

import React, { createContext, ReactNode, useContext, useEffect, useState} from "react";
import { ProductDTO } from "../DTO/ProductDTO";
import { api } from "../service/api";

interface ProductContextProps {
    children: ReactNode;
}

interface IDataContext {
    products: ProductDTO[] 
}

const x : ProductDTO[] =  [{
    id: 0,
    nome: "",
    preco: 0,
    estoque: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
}]
    

//
const ProductsContext = createContext(x);



function ProductProvider({children} : ProductContextProps ) {
    const [products, setProducts] = useState<ProductDTO>([] as ProductDTO);

    useEffect(() => {
        async function Get() {
          const response =  await api.get("/product");
          const data = response.data;
          console.log("data vindo da api: --- ",data)
          setProducts(data)
        }
        Get();
      },[])

    return (
        <ProductsContext.Provider value={{
            products
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProduct() {
    const context = useContext(ProductsContext);   
    return context;
}

export {ProductProvider, useProduct};