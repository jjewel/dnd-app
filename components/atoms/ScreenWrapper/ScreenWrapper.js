import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const ScreenWrapper = styled.View`
  flex: 1;
  padding-top: ${StatusBar.currentHeight};
  align-items: center;
  justify-content: center;
  width: 80%;
`;
