import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  margin-bottom: 8px;
  padding: 18px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
`;