import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native';

import ArrowSvg from '../../assets/arrow.svg'

import { Container, Header, Title, RentalPeriod, DataInfo, DataTitle, DataValue, Content , Footer } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

type NavigationProps = {
  navigate: (screen: string) => void;
};
export function Scheduling() {
  const theme = useTheme()
  const navigation = useNavigation<NavigationProps>();

  function handleConfirmRental(){
    navigation.navigate("SchedulingDetails");
  }
  return (
    <Container>
      <Header>
        <StatusBar translucent barStyle='light-content' backgroundColor="transparent" />
        <BackButton onPress={() => { }} color={theme.colors.shape} />
        <Title>Escolha uma{'\n'}data de inicio e {'\n'}fim do aluguel</Title>
        <RentalPeriod>

          <DataInfo>
            <DataTitle>DE</DataTitle>
            <DataValue selected={false}></DataValue>
          </DataInfo>

          <ArrowSvg />

          <DataInfo>
            <DataTitle>DE</DataTitle>
            <DataValue selected={false}></DataValue>
          </DataInfo>

        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Footer>

    </Container>
  );
}