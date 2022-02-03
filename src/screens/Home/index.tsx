import React from 'react';
import { StatusBar, Button } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';
import { Car } from "../../components/Car"

import { Container, Header, TotalCars, HeaderContent, CarsList } from './styles';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function Home() {

  const navigation = useNavigation<NavigationProps>();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 300,
    },
    thumbnail: "https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515593745747.png?s=fill&w=440&h=330&q=80&t=true",
  }

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Button title='Teste' onPress={handleCarDetails}></Button>
      <CarsList
        data={[1, 2]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car data={carData} onPress={handleCarDetails} />
        } />


    </Container>
  );
}