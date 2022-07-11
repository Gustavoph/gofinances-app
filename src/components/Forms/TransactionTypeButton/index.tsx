import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Icon,
  Title,
  Container
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
  type: 'up' | 'down';
};

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <Container 
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon 
        type={type}
        name={icons[type]}
      />
      <Title>
        { title }
      </Title>
    </Container>
  )
}