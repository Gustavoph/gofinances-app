import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';
import { Container, Error } from './styles';

interface InputFormProps extends TextInputProps {
  name: string;
  error?: any;
  control: Control;
}

export function InputForm({name, error, control, ...rest}: InputFormProps) {
  return (
    <Container>
      <Controller 
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest} 
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}