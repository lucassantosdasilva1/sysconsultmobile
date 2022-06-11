import React, { useEffect, useState } from "react";

import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";

import {
  MainContainer,
  EditProductButton,
  Container,
  WrapPhoto,
  Photo,
  WrapInfos,
  Title,
  WrapEstoque,
  Estoque,
  Price,
  WrapDelete,
  DeleteIcon,
} from "./styles";

//import { DTO,  } from "../../services";
import { Modal } from "react-native";
import {
  differenceInDays,
  differenceInMinutes,
  minutesToHours,
} from "date-fns";
import { ProductDTO } from "../../DTO/ProductDTO";
import { useProduct } from "../../Context/ProductContextAPI";
//import { useDispatch } from "react-redux";
//import { setproductAction } from "../../redux/productSlice";

interface product {
  product: ProductDTO;
}

export function ProductCard({ product }: product) {
  const [timeAgo, setTimeAgo] = useState(Number);
  const [wordOfAgo, setWordOfAgo] = useState(String);

  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  const {editProduct} = useProduct()

  // const product = product;
  // const dispatch = useDispatch();

  //function to receive timestamp and return time ago in days or hours or minutes
  function calculateHoursAgo() {
    const dateOfPost = new Date(product.createdAt);

    const today = new Date();

    const hojeparsed = Date.parse(today.toString());

    const result = differenceInMinutes(hojeparsed, dateOfPost);

    switch (true) {
      case result >= 1 && result < 60:
        setWordOfAgo("minutes ago");
        setTimeAgo(result);
        break;
      case result >= 60 && result < 1440:
        setWordOfAgo("hours ago");
        const hours = minutesToHours(result);
        setTimeAgo(hours);
        break;
      case result >= 1440:
        setWordOfAgo("days ago");
        const days = differenceInDays(hojeparsed, dateOfPost);
        setTimeAgo(days);
        break;
    }
  }

  const handleModalEditOpen = () => {
    setVisibleEditModal(true);
  };

  function handleModalEditClose() {
    setVisibleEditModal(false);
  }

  function handleModalDeleteOpen() {
    setVisibleDeleteModal(true);
  }

  function handleModalDeleteClose() {
    setVisibleDeleteModal(false);
  }

  useEffect(() => {
    calculateHoursAgo();
  }, []);

  return (
    <MainContainer>
      <EditProductButton onPress={handleModalEditOpen}>
        <Modal visible={visibleEditModal} transparent>
          <EditProduct
            closeModal={handleModalEditClose}
            product={product}
          />
        </Modal>

        <Container>
          <WrapPhoto>{/* <Photo source={getImage(product)} /> */}</WrapPhoto>

          <WrapInfos>
            <Title>
              {product.nome.substring(0, 63)}
              {product.nome.length > 62 ? "..." : ""}
            </Title>

            <Price>R$ {product.preco}</Price>

            <WrapEstoque>
              <Estoque>Restam apenas {product.estoque}</Estoque>
            </WrapEstoque>
          </WrapInfos>
        </Container>
    
        {/* 
      <CreatedAt>
          <CreatedAtText>Created at {timeAgo} {wordOfAgo}</CreatedAtText>
      </CreatedAt> */}
      </EditProductButton>
      <WrapDelete onPress={handleModalDeleteOpen}>
        <DeleteIcon />
        <Modal visible={visibleDeleteModal} transparent>
          <DeleteProduct id={product.id} closeModal={handleModalDeleteClose} />
        </Modal>
      </WrapDelete>
    </MainContainer>
  );
}
