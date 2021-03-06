import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native';


import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

import {
  Container, Header, CarImages, Content, Details,
  Description, Brand, Name, Rent, Period, Price, Accessories, Footer,
  RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValeu,
  RentalPrice, RentalPricelabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal
} from './styles';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';
;

interface Params {
  car: CarDTO;
  dates: string[];
}


interface RentalPeriod {
  start: string;
  end: string;
}
export function SchedulingDetails() {

  const [rentalPeriod, setReantalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [loading,setLoading] = useState(false)

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);
  async function handleConfirmRental() {
    setLoading(true)
    const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...scheduleByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('/schedules_byuser',{
      user_id:1,
      car,
      startDate: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
      .then(() => navigation.navigate("SchedulingComplete"))
      .catch(() =>{ 
        setLoading(false)
        Alert.alert("N??o foi poss??vel realizar o agendamento")})

  }
  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    setReantalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>

        <ImageSlider imagesUrl={car.photos} />

      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))
          }

        </Accessories>

        <RentalPeriod >
          <CalendarIcon >
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValeu>{rentalPeriod.start}</DateValeu>
          </DateInfo>
          <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text} />
          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValeu>{rentalPeriod.end}</DateValeu>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPricelabel>Total</RentalPricelabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diarias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>
      <Footer>
        <Button title='Alugar agora' 
        color={theme.colors.success} 
        onPress={handleConfirmRental}
        enabled={!loading}
        loading={loading} />
      </Footer>
    </Container>
  );
}