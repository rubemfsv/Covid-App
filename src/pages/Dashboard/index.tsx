import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ListTitle,
  AppInfoContainer,
  AppName,
  LogoffButton,
  ProvinceList,
  ProvinceContainer,
  CountryName,
  StatusName,
  StatusNumber,
} from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const user = auth().currentUser?.displayName;
  const [provinces, setProvinces] = useState([]);
  const name = auth().currentUser?.photoURL;

  const logOff = useCallback(() => {
    auth().signOut();
  }, []);

  useEffect(() => {
    api
      .get('/country', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key':
            'ee2a440104mshf0fc2d4112946a2p196e67jsn8b4373c311f5',
        },
        params: {
          name,
        },
      })
      .then(response => {
        setProvinces(response.data);
      })
      .catch(err => {
        if (err) {
          console.log("Ops, I think it's connecting with the API");
        }
      });
  }, [name]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Welcome,
          {'\n'}
          <UserName>{user}</UserName>
        </HeaderTitle>

        <AppInfoContainer>
          <AppName>Covid APP</AppName>
          <LogoffButton onPress={logOff}>
            <Icon name="power" size={22} color="#ff9000" />
          </LogoffButton>
        </AppInfoContainer>
      </Header>

      <ProvinceList
        data={provinces}
        keyExtractor={() => auth().currentUser.uid.toString()}
        ListHeaderComponent={<ListTitle>Covid Situation</ListTitle>}
        renderItem={({ item: province }) => (
          <ProvinceContainer>
            <CountryName>{province.country}</CountryName>
            <StatusName>Confirmed:</StatusName>
            <StatusNumber>{province.confirmed}</StatusNumber>

            <StatusName>Critical:</StatusName>
            <StatusNumber>{province.critical}</StatusNumber>

            <StatusName>Recovered:</StatusName>
            <StatusNumber>{province.recovered}</StatusNumber>

            <StatusName>Deaths:</StatusName>
            <StatusNumber>{province.deaths}</StatusNumber>
          </ProvinceContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
