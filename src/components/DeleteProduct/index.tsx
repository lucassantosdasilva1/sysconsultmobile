import React from "react";
import { useProduct } from "../../Context/ProductContextAPI";

import {
  Container,
  Body,
  QuestionContainer,
  ConfirmDelete,
  ButtonContainer,
  YesButton,
  YesText,
  NoButton,
  NoText,
} from "./styles";

interface DeleteProps {
  id: number;
  closeModal: () => void;
}

export function DeleteProduct({ id, closeModal }: DeleteProps) {
  const { deleteProduct } = useProduct();

  async function handleDelete() {
    try {
      console.log("id------------: ", id);
      await deleteProduct(id);
    } catch (error) {
      throw error;
    } finally {
      closeModal();
    }
  }

  function handleNoDelete() {
    closeModal();
  }

  return (
    <Container>
      <Body>
        <QuestionContainer>
          <ConfirmDelete>
            Você tem certeza que deseja apagar este produto?
          </ConfirmDelete>
        </QuestionContainer>

        <ButtonContainer>
          <YesButton onPress={handleDelete}>
            <YesText>YES</YesText>
          </YesButton>
          <NoButton onPress={handleNoDelete}>
            <NoText>NO</NoText>
          </NoButton>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
