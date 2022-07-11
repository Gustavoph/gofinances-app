import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { CategorySelect } from '../CategorySelect';

import { 
  Form,
  Title,
  Fields,
  Header,
  Container,
  TransactionTypes
} from './styles';

export function Register() {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }
  
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      
      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />

          <Input 
            placeholder="Preço"
          />

          <TransactionTypes>
            <TransactionTypeButton 
              type="up"
              title="Income"
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionsTypeSelect('up')}
            />

            <TransactionTypeButton 
              type="down"
              title="Outcome"
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionsTypeSelect('down')}
            />
          </TransactionTypes>

          <CategorySelectButton 
            title={category.name} 
            onPress={handleOpenSelectCategoryModal} 
          />
        </Fields>
        

        <Button title="Enviar" />
          
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}