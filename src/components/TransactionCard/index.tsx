import React from 'react';
import { 
  Container,
  Title,
  Amount,
  Category,
  Icon,
  CategoryName,
  Footer,
  Date,
} from './styled';

type Category = {
  name: string;
  icon: string;
}

export interface Data {
  date: string;
  title: string;
  amount: string;
  category: Category;
  type: 'positive' | 'negative';
}

interface TransactionCardProps {
  data: Data
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{ data.title }</Title>

      <Amount type={data.type}>
        { data.type === 'negative' && '- '}
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{ data.category.name }</CategoryName>
        </Category>
        <Date>{ data.date }</Date>
      </Footer>
    </Container>
  )
}