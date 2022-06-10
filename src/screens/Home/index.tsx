import React, { useEffect, useState } from "react";
import { Text, FlatList, RefreshControl } from "react-native";
import { useProduct } from "../../hooks/ProductContextAPI";
import { api } from "../../service/api";

import { Header } from "../../components/Header/";
import { Loading } from "../../components/Loading/";

import { Container, WrapProductCard } from "./styles";
import { ProductCard } from "../../components/ProductCard";

export function Home() {
  const [isLoading, setisLoading] = useState(false);

  const { products } = useProduct();
  console.log("Products vindo do Context: ", products);

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
            renderItem={({ item }) => <ProductCard dataOfApi={item} />}
            // refreshControl={
            //   <RefreshControl refreshing={isLoading} onRefresh={} />
            // }
          />
        </WrapProductCard>
      )}
    </Container>
  );
}
