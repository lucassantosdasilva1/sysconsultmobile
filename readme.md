

  
 
</p>
<h1 align="center">
	React Native Challenge 20200810
</h1>

<h4 align="center"> 
	🚧  API + Mobile ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

♻️ O aplicativo tras uma forma fácil de gerenciar um estoque variado de produtos eletrônicos que certa empresa possui.


Projeto desenvolvido durante a avaliação para o teste de Desenvolvedor React Native para **SYSCONSULT**.

---

## ⚙️ Funcionalidades

- [x] Ver os produtos e suas características
- [x] Ver a quantidade em estoque
- [x] Editar os Produtos
- [x] Deletar os produtos

- [x] Os usuários tem acesso ao aplicativo móvel, onde podem:
  - [x] Consultar produtos
  - [x] Editar
  - [x] Apagar


## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. [Backend](https://github.com/lucassantosdasilva1/sysconsultbackendOK) 
2. [Mobile](https://github.com/lucassantosdasilva1/BeTruckApp) ([link](https://github.com/lucassantosdasilva1/BeTruckApp)do github)

💡O Mobile precisa que o Backend esteja sendo executado para funcionar (No nosso caso localhost).

### 🎲 Iniciando o projeto - NodeJS


Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Após ter o **Node** instalado, instale as dependências

```sh
# Instale as dependencias:
$ npm install
```

### Tudo certo agora rode o comando
```
$ npm run dev
```

### Se tudo correu bem, agora você estará com seu backend funcionando perfeitamente!
### o banco de dados está hospedado na nuvem e está pre carregado com informações com algumas informações

#

### Pré-requisitos - React native

---

Primeiro, você precisa ter o <kbd>[EXPO](https://expo.dev)</kbd> instalado na sua máquina. 

Após ter o **React Native (Expo)** instalado, instale as dependências do **React Native (Expo)**, utilizando os comandos:

```sh
# Instale as dependencias:
$ npm install
```

### Apenas um ultimo detalhe para ficar tudo pronto
- #### Acesse a pasta service e o arquivo api.ts. Altere a linha onde recebe o ip local da máquina
```sh
import axios from "axios";

#ALTERE O IP BASE PARA O IP DA SUA MAQUINA
 const api = axios.create({ baseURL: "http://IP.DA.SUA.MAQ:3333" });

export { api };

```








### Tudo certo agora rode o comando
```
$ expo start
```

### Se tudo correu bem, agora você estará com seu aplicativo funcionando perfeitamente!

### Baixe o arquivo expo go e scaneie o QRCODE com seu celular para acessar o app!

#### 🎲 Utilizando o Backend (servidor)

O servidor está hospedado no Heroku pode ser acessado clicando [aqui](https://api-betruck.herokuapp.com/)

A [Documentação da API](https://api-betruck.herokuapp.com/swagger-ui.html) foi produzida utlizando conceito [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) na sua mais nova versão [(v3)](https://github.com/OAI/OpenAPI-Specification)


#### 🧭 Rodando a aplicação Mobile 
- Acessar o [link](https://expo.dev/@lucassantosdasilva1/BETRUCKAPP) expo e visualizar o QRcode do app online. 

- Após ler o QRcode ele vai abrir automaticamente o expo go em seu smartphone com o app em funcionamento


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([Spring](https://spring.io/projects/spring-framework)  +  [Java](https://docs.oracle.com/en/java/))

  - **Express**
  - **CORS**
  - **Sequelize**
  - **Postgres**
  - **ts-node**
  - **dotENV**

> Veja o arquivo  package.json

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-    **[Styled Components](https://www.styled-components.com)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Native Gesture Handler](https://)**
-   **[React Native Responsive Fontsize](https://)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://)

---

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Lucas Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/lucas-santos-758084112)

---
