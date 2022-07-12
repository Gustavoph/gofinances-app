import * as yup from 'yup';
import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { CategorySelect } from '../CategorySelect';

interface FormData {
  [name: string]: any;
  [amount: number]: any;
}

import { 
  Form,
  Title,
  Fields,
  Header,
  Container,
  TransactionTypes
} from './styles';
import { InputForm } from '../../components/Forms/InputForm';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório'),
  amount: yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativos')
    .required('O valor é obrigatório')
})

export function Register() {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="price"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
          <Button 
            onPress={handleSubmit(handleRegister)} 
            title="Enviar" 
          />
            
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
    
  )
}