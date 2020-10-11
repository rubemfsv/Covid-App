import React from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTitle,
  AppInfoContainer,
  InfoText,
  ButtonContainer,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>COVID-19 APP</HeaderTitle>
      </Header>

      <AppInfoContainer>
        <InfoText>
          Every 15 minutes updated statistic about Coronavirus. Latest stats by
          country, are collected from several reliable sources. You can see
          total stats. We are using an API the fastest API related with COVID-19
          on RapidAPI marketplace.
        </InfoText>
        <ButtonContainer>
          <Button
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            Check your country
          </Button>
        </ButtonContainer>
      </AppInfoContainer>
    </Container>
  );
};

export default Welcome;
