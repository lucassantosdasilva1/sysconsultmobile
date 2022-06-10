import React from "react";

import { Container, Title } from "./styles";

export function TitleComp(props : string) {
  return (
    <Container>
      <Title>
        {props}
      </Title>
    </Container>
  );
}
