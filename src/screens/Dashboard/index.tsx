import React from 'react';

import { 
  User,
  Photo,
  Title,
  Header,
  UserName,
  UserInfo,
  Container,
  PowerIcon,
  UserWrapper,
  Transactions,
  UserGreeting,
  HighlightCards,
  TransactionList,
} from './styles';

import { 
  TransactionCard, 
  Data 
} from '../../components/TransactionCard';
import { HighlightCard } from '../../components/HighlightCard';

export interface DataListProps extends Data {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:'Desenvolvimento De Site',
      amount:'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:'13/04/2022'
    },
    {
      id: '2',
      type: 'negative',
      title:'Hamburgueria Pizzy',
      amount:'R$ 59,90',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date:'10/04/2022'
    },
    {
      id: '3',
      type: 'negative',
      title:'Aluguel Do AP',
      amount:'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date:'13/04/2022'
    },
    {
      id: '4',
      type: 'negative',
      title:'Aluguel Do AP',
      amount:'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date:'13/04/2022'
    },
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ 
                uri: 'https://avatars.githubusercontent.com/u/65258678?v=4' 
              }} 
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gustavo</UserName>
            </User>
          </UserInfo>

          <PowerIcon name="power" />
        </UserWrapper> 
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas' 
          amount="R$ 17.400,00" 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          type='down'
          title='Saídas' 
          amount="R$ 1.259,00" 
          lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightCard
          type='total'
          title='Total' 
          amount="R$ 16.141,00" 
          lastTransaction='01 à 15 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>
        
        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
        
      </Transactions>
    </Container>
  )
}
