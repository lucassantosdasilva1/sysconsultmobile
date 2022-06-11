import React, { useEffect, useState } from "react";

import { NativeModules, TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import * as yup from "yup";

import { useForm, Controller, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useProduct } from "../../../Context/ProductContextAPI";

import { ProductDTO } from "../../../DTO/ProductDTO";

import {
  Container,
  ContainerPostCreation,
  Body,
  Header,
  TitleHeader,
  ContentWrap,
  Label,
  Footer,
  Button,
  ButtonText,
} from "./styles";
import { ControlledInput } from "./ControlledInput";


interface Props {
  product: ProductDTO;
  closeModal: () => void;
}

interface ProductToEdit {
  
}

export function EditProduct({ product, closeModal }: Props) {
  const theme = useTheme();

  const schema = yup.object().shape({
    name: yup.string().default(product.nome).required("Campo Obrigatório"),
    estoque: yup
      .number()
      .default(product.estoque)
      .required("Campo Obrigatório"),
    preco: yup
      .number()
      .default(Number(product.preco))
      .required("Campo Obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { editProduct } = useProduct();

  async function handlePut(values: any) {
    try {
      await editProduct({ ...product, ...values });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    closeModal();
  }

  return (
    <Container>
      <ContainerPostCreation>
        <Body>
          <Header>
            <TitleHeader>Editar Produto</TitleHeader>
          </Header>

          <ContentWrap>
            <Label>Nome</Label>
            <ControlledInput
              control={control}
              name="name"
              error={errors.name}
              defaultValue={product.nome}
            />
          </ContentWrap>

          <ContentWrap>
            <Label>Estoque</Label>
            <ControlledInput
              control={control}
              name="estoque"
              error={errors.estoque}
              defaultValue={String(product.estoque)}
            />
          </ContentWrap>

          <ContentWrap>
            <Label>preco</Label>
            <ControlledInput
              control={control}
              name="preco"
              error={errors.preco}
              defaultValue={String(product.preco)}
            />
          </ContentWrap>
        </Body>

        <Footer>
          <Button
            onPress={handleSubmit(handlePut)}
            colorBackground={theme.colors.main}
            style={{ borderWidth: 1, marginRight: 10 }}
          >
            <ButtonText colorText="white">Editar</ButtonText>
          </Button>

          <Button
            onPress={() => handleCancel()}
            colorBackground=""
            style={{ borderWidth: 1 }}
          >
            <ButtonText colorText="black">Cancelar</ButtonText>
          </Button>
        </Footer>
      </ContainerPostCreation>
    </Container>
  );
}
