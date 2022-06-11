import React, { useEffect, useState } from "react";

import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";

import {
  EditButton,
  Container,
  WrapPhoto,
  Photo,
  WrapInfos,
  Title,
  WrapEstoque,
  Estoque,
  Price,
  WrapOptionsPrice,
  WrapOptions,
  DeleteButton,
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
//import { useDispatch } from "react-redux";
//import { setDataAction } from "../../redux/dataSlice";

interface data {
  dataOfApi: ProductDTO;
}

export function ProductCard({ dataOfApi }: data) {
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [timeAgo, setTimeAgo] = useState(Number);
  const [wordOfAgo, setWordOfAgo] = useState(String);

  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  const [data, setData] = useState(dataOfApi);

  // const dispatch = useDispatch();

  //function to receive timestamp and return time ago in days or hours or minutes
  function calculateHoursAgo() {
    const dateOfPost = new Date(data.createdAt);

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
    <EditButton onPress={handleModalEditOpen}>
      <Modal visible={visibleEditModal} transparent>
        <EditProduct
          closeModal={handleModalEditClose}
          id={data.id}
          nome={data.nome}
          estoque={data.estoque}
          preco={data.preco}
        />
      </Modal>

      <Container>
        <WrapPhoto>{/* <Photo source={getImage(data)} /> */}</WrapPhoto>

        <WrapInfos>
          <Title>
            {data.nome.substring(0, 42)}
            {data.nome.length > 42 ? "..." : ""}
          </Title>
          
          <Price>R$ {data.preco}</Price>

          <WrapEstoque>
            <Estoque>Restam apenas {data.estoque}</Estoque>
          </WrapEstoque>
        </WrapInfos>

        <WrapOptionsPrice>
          <WrapOptions>
            <DeleteButton onPress={handleModalDeleteOpen}>
              <DeleteIcon name="md-trash-sharp" size={20} color="red" />
            </DeleteButton>

            <Modal visible={visibleDeleteModal} transparent>
              <DeleteProduct id={data.id} closeModal={handleModalDeleteClose} />
            </Modal>
          </WrapOptions>
        </WrapOptionsPrice>
      </Container>
      {/* 
      <CreatedAt>
          <CreatedAtText>Created at {timeAgo} {wordOfAgo}</CreatedAtText>
      </CreatedAt> */}
    </EditButton>
  );
}
