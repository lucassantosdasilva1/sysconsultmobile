import React from 'react';

export function deleteProduct(id){
  return id;
}

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
} from './styles';

interface DeleteProps {
  id: number,
  closeModal: () => void
}

export function DeleteProduct({id, closeModal} : DeleteProps) {
  
  function handleDelete(){
    deleteProduct(id);
    closeModal()
  }

  function handleNoDelete(){
    closeModal();
  }

  return (
    <Container>
      <Body>

        <QuestionContainer>
          <ConfirmDelete>Você tem certeza que deseja apagar este produto?</ConfirmDelete>
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