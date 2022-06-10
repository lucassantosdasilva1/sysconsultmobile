import React, { useEffect, useState } from "react";

import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";

import {
  EditButton,
  Container,
  WrapPhoto,
  Photo,
  WrapInfos,
  WrapTitlesType,
  Title,
  Estoque,
  WrapDescription,
  Description,
  WrapRatingPrice,
  WrapRate,
  RateComponent,
  WrapOptionsPrice,
  WrapOptions,
  DeleteButton,
  DeleteIcon,
  Price,
  CreatedAt,
  CreatedAtText
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

// export function getImage(data: DTO) {
//   switch (data.filename) {
//     case "0.jpg":
//       return require("../../assets/0.jpg");
//     case "1.jpg":
//       return require("../../assets/1.jpg");
//     case "2.jpg":
//       return require("../../assets/2.jpg");
//     case "3.jpg":
//       return require("../../assets/3.jpg");
//     case "4.jpg":
//       return require("../../assets/4.jpg");
//     case "5.jpg":
//       return require("../../assets/5.jpg");
//     case "6.jpg":
//       return require("../../assets/6.jpg");
//     case "7.jpg":
//       return require("../../assets/7.jpg");
//     case "8.jpg":
//       return require("../../assets/8.jpg");
//     case "9.jpg":
//       return require("../../assets/9.jpg");
//     case "10.jpg":
//       return require("../../assets/10.jpg");
//     case "11.jpg":
//       return require("../../assets/11.jpg");
//     case "12.jpg":
//       return require("../../assets/12.jpg");
//     case "13.jpg":
//       return require("../../assets/13.jpg");
//     case "14.jpg":
//       return require("../../assets/14.jpg");
//     case "15.jpg":
//       return require("../../assets/15.jpg");
//     case "16.jpg":
//       return require("../../assets/16.jpg");
//     case "17.jpg":
//       return require("../../assets/17.jpg");
//     case "18.jpg":
//       return require("../../assets/18.jpg");
//     case "19.jpg":
//       return require("../../assets/19.jpg");
//     case "20.jpg":
//       return require("../../assets/20.jpg");
//     case "21.jpg":
//       return require("../../assets/21.jpg");
//     case "22.jpg":
//       return require("../../assets/22.jpg");
//     case "23.jpg":
//       return require("../../assets/23.jpg");
//     case "24.jpg":
//       return require("../../assets/24.jpg");
//     case "25.jpg":
//       return require("../../assets/25.jpg");
//     case "26.jpg":
//       return require("../../assets/26.jpg");
//     case "27.jpg":
//       return require("../../assets/27.jpg");
//     case "28.jpg":
//       return require("../../assets/28.jpg");
//     case "29.jpg":
//       return require("../../assets/29.jpg");
//     case "30.jpg":
//       return require("../../assets/30.jpg");
//     case "31.jpg":
//       return require("../../assets/31.jpg");
//     case "32.jpg":
//       return require("../../assets/32.jpg");
//     case "33.jpg":
//       return require("../../assets/33.jpg");
//     case "34.jpg":
//       return require("../../assets/34.jpg");
//     case "35.jpg":
//       return require("../../assets/35.jpg");
//     case "36.jpg":
//       return require("../../assets/36.jpg");
//     case "37.jpg":
//       return require("../../assets/37.jpg");
//     case "38.jpg":
//       return require("../../assets/38.jpg");
//     case "39.jpg":
//       return require("../../assets/39.jpg");
//     case "40.jpg":
//       return require("../../assets/40.jpg");
//     case "41.jpg":
//       return require("../../assets/41.jpg");
//     case "42.jpg":
//       return require("../../assets/42.jpg");
//     case "43.jpg":
//       return require("../../assets/43.jpg");
//     case "44.jpg":
//       return require("../../assets/44.jpg");
//     case "45.jpg":
//       return require("../../assets/45.jpg");
//     case "46.jpg":
//       return require("../../assets/46.jpg");
//     case "47.jpg":
//       return require("../../assets/47.jpg");
//     case "48.jpg":
//       return require("../../assets/48.jpg");
//     case "49.jpg":
//       return require("../../assets/49.jpg");
//     case "50.jpg":
//       return require("../../assets/50.jpg");
//   }
// }

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
        <WrapPhoto>
          {/* <Photo source={getImage(data)} /> */}
        </WrapPhoto>

        <WrapInfos>
          <WrapTitlesType>
            <Title>
              {data.nome.substring(0, 15)}
              {data.nome.length > 15 ? "..." : ""}
            </Title>
            <Estoque>{data.estoque}</Estoque>
          </WrapTitlesType>

          {/* <WrapDescription>
            <Description>
              {data.description.substring(0, 20)}
              {data.description.length > 20 ? "..." : ""}
            </Description>
          </WrapDescription> */}

          {/* <WrapRatingPrice>
            <WrapRate>
              {rating.map((item, index) => (
                <RateComponent
                  key={index}
                  name={index < data.rating ? "star-fill" : "star"}
                  size={24}
                  color="black"
                />
              ))}
            </WrapRate>
          </WrapRatingPrice> */}
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
          <Price>R$ {data.preco}</Price>
        </WrapOptionsPrice>
      </Container>

      <CreatedAt>
          <CreatedAtText>Created at {timeAgo} {wordOfAgo}</CreatedAtText>
      </CreatedAt>

  
    </EditButton>
  );
}
