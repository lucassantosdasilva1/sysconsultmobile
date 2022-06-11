//Consertar a tipagem
//Fazer a edicao, exclusao, adicao por meio do context

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductDTO } from "../DTO/ProductDTO";
import { api } from "../service/api";

interface ProductContextProps {
  children: JSX.Element;
}

interface IDataContext {
  products: ProductDTO[];
  setProducts: React.Dispatch<React.SetStateAction<ProductDTO[]>>;
  getProducts: () => Promise<{ data: ProductDTO[] }>;
  editProduct: (value: ProductDTO) => void;
  deleteProduct: (id : number) => void;
}

//
const ProductsContext = createContext({} as IDataContext);

export function ProductProvider({ children }: ProductContextProps) {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  async function getProducts() {
    try {
      return await api.get("/product");
      // console.log("data vindo da api: --- ", data);
      // setProducts(data);
    } catch (error) {
      throw error;
    }
  }

  async function editProduct(value: ProductDTO) {
    const newProducts = products.map((product) => {
      if (product.id === value.id) {
        product = value;
      }
      return product; // retorna o produto atualizado
    });
    setProducts(newProducts);

    try {
      await api.put(`/product/${value.id}`, value); // value é o produto atualizado
    } catch (error) {
      throw error;
    }
  }

  async function deleteProduct(id: number) {
    const newProducts = products.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    });
    setProducts(newProducts);

    try {
      await api.delete(`/product/${id}`);
    }
    catch (error) {
      throw error;
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        editProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductsContext);
}
