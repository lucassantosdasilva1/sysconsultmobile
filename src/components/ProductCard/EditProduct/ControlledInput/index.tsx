import React from 'react';

import { TextInputProps } from 'react-native';

import { Controller, Control } from "react-hook-form";

import {
  Container,
  ContentInput
} from './styles';

interface FormData extends TextInputProps {
    control: Control;
    name: string;
    error: number;
  }

export function ControlledInput({ control, name, error, ...rest }: FormData) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <ContentInput onChangeText={onChange} {...rest} />
        )}
      />
    </Container>
  );
}