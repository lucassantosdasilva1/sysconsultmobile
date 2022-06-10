import React, { useEffect, useState } from 'react';

// import * as Updates from 'expo-updates';
import { NativeModules } from "react-native";

// import { EditProps, getProducts, sendEditProduct } from '../../../services';

// import { Question } from '../CreatePost/styles';

// import { EditPostAPI, EditProps } from '../../services/api';

import {
  Container,
  ContainerPostCreation,
  Body,
  Header,
  TitleHeader,
  ContentWrap,
  Label,
  ContentInput,
  Footer,
  Button,
  ButtonText,
} from './styles';
// import { useDispatch } from 'react-redux';
// import { setDataAction } from '../../../redux/dataSlice';

interface Props {
    id: number,
    nome: string,
    estoque: number,
    preco: number,
    closeModal: () => void;
}

export function EditProduct({ id, nome, estoque, preco, closeModal} : Props ) {
    const [nomeEditado, setNome] = useState(nome);
    const [estoqueEditado, setEstoque] = useState(estoque.toString());
    const [precoEditado, setPreco] = useState(preco.toString());
    
    // let dataToSent : EditProps = {
    //     nome: nomeValue,
    //     estoque: estoqueValue,
    //     preco: Number(precoValue),
    // }

    // async function reloadApp () {
    //     await Updates.reloadAsync();
    // }    
    
    // async function handlePost(){
    //     //NativeModules.DevSettings.reload();
    //     closeModal();
    //     await sendEditProduct(id, dataToSent);
    // }    

    // function handleCancel(){
    //     closeModal();
    // }

    return (
    <Container>
        <ContainerPostCreation>

            <Body>
                <Header>
                    <TitleHeader>Editar Produto</TitleHeader>
                </Header>
                {/* <Question>What's on your mind?</Question> */}



                <ContentWrap>
                    <Label>Nome</Label>
                    <ContentInput placeholder="Type your post title here" onChangeText={setNome}>{nome}</ContentInput>
                </ContentWrap>

                <ContentWrap>
                    <Label>Estoque</Label>
                    <ContentInput keyboardType='decimal-pad' placeholder="Content here" textAlignVertical="top" multiline onChangeText={setEstoque}>{estoque}</ContentInput>
                </ContentWrap>

                <ContentWrap>
                    <Label>preco</Label>
                    <ContentInput keyboardType='decimal-pad' placeholder="Content here" textAlignVertical="top" multiline onChangeText={setPreco}>{preco}</ContentInput>
                </ContentWrap>
            </Body>

            <Footer>
                {/* <Button onPress={() => handlePost()} colorBackground='#6558F5'  style={{ borderWidth: 1, marginRight: 10}}> */}
                <Button onPress={() =>{}} colorBackground='#6558F5'  style={{ borderWidth: 1, marginRight: 10}}>
                    <ButtonText colorText='white'>Editar</ButtonText>
                </Button>

                {/* <Button onPress={() => handleCancel()} colorBackground='' style={{ borderWidth: 1}}> */}
                <Button onPress={() => {}} colorBackground='' style={{ borderWidth: 1}}>
                    <ButtonText colorText='black'>Cancelar</ButtonText>
                </Button>
            </Footer>

            </ContainerPostCreation>
       

    </Container>
  );
}
