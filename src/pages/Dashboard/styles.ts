import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #5e4d39;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

export const AppInfoContainer = styled.View`
  align-items: center;
`;

export const AppName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 15px;
`;

export const LogoffButton = styled.TouchableOpacity``;

export const ProvinceList = styled(FlatList as new () => FlatList)`
  padding: 32px 24px 16px;
`;

export const ListTitle = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
  color: #3e3b47;
  font-family: 'RobotoSlab-Medium';
`;

export const CountryName = styled.Text`
  font-size: 30px;
  margin-bottom: 15px;
  color: #3e3b47;
  font-family: 'RobotoSlab-Medium';
`;

export const ProvinceContainer = styled.View`
  background: #ab8c68;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
`;

export const StatusName = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const StatusNumber = styled.Text`
  font-size: 22px;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 25px;
`;
