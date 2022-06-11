import React, { useEffect, useState } from "react";
import { Text, FlatList, RefreshControl } from "react-native";
import { useProduct } from "../../Context/ProductContextAPI";
import { api } from "../../service/api";

import { Header } from "../../components/Header/";
import { Loading } from "../../components/Loading/";

import { Container, WrapProductCard } from "./styles";
import { ProductCard } from "../../components/ProductCard";

export function Home() {
  const [isLoading, setisLoading] = useState(false);

  const { products, getProducts, setProducts } = useProduct();
  
  console.log("Products vindo do Context: ", products);

  async function getProductsAPI() {
    setisLoading(true);
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getProductsAPI();
  }, []);
  return (
    <Container>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <WrapProductCard>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            data={products}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => <ProductCard product={item} />}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={getProductsAPI} />
            }
          />
        </WrapProductCard>
      )}
    </Container>
  );
}
