import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangedSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  Container, Header, CarImages, Content, Details,
  Description, Brand, Name, Rent, Period, Price, Accessories, Footer,
  RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValeu,
  RentalPrice, RentalPricelabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal
} from './styles';
;

export function SchedulingDetails() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>
      <CarImages>

        <ImageSlider imagesUrl={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515593745747.png?s=fill&w=440&h=330&q=80&t=true']} />

      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380Km/h' icon={SpeedSvg} />
          <Accessory name='3.2s' icon={AccelerationSvg} />
          <Accessory name='800 HP' icon={ForceSvg} />
          <Accessory name='Gasolina' icon={GasolineSvg} />
          <Accessory name='Auto' icon={ExchangedSvg} />
          <Accessory name='2 pessoas' icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod >
          <CalendarIcon >
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValeu>18/06/2021</DateValeu>
          </DateInfo>
          <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text} />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValeu>18/06/2021</DateValeu>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPricelabel>Total</RentalPricelabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diarias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}