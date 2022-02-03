import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components'

import ArrowSvg from '../../assets/arrow.svg'

import { Container, Header, Title, RentalPeriod, DataInfo, DataTitle, DataValue, Content , Footer } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme()
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
        <Button title='Confirmar' />
      </Footer>

    </Container>
  );
}