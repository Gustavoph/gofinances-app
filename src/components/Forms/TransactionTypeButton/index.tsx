import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Icon,
  Title,
  Button,
  Container
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface TransactionTypeButtonProps extends RectButtonProps {
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
    >
      <Button { ...rest }>
        <Icon 
          type={type}
          name={icons[type]}
        />
        <Title>
          { title }
        </Title>
      </Button>
    </Container>
  )
}