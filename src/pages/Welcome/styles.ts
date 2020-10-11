import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #5e4d39;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #ff9000;
  font-size: 26px;
  font-family: 'RobotoSlab-Medium';
  line-height: 28px;
`;

export const AppInfoContainer = styled.View``;

export const InfoText = styled.Text`
  font-size: 25px;
  margin-bottom: 15px;
  padding: 15px 20px 20px 20px;
  color: #3e3b47;
  font-family: 'RobotoSlab-Medium';
`;

export const ButtonContainer = styled.View`
  padding: 20px 20px 20px 20px;
`;
