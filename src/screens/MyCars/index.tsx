import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { AntDesign } from "@expo/vector-icons"

import { StatusBar, FlatList } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { BackButton } from '../../components/BackButton';
import { Car } from "../../components/Car"
import { LoadAnimation } from "../../components/LoadAnimation"

import {
  Container, Header, Title, SubTitle, Content, Appointments, AppointmentsTitle, AppointmentsQuantity,
  CarWrapper, CarFooter, CarFooterTitle, CarFooterPeriod, CarFooterData
} from './styles';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {

  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <Container>
      <Header>
        <StatusBar translucent barStyle='light-content' backgroundColor="transparent" />
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />
        <Title>Escolha uma{'\n'}data de inicio e {'\n'}fim do aluguel</Title>
        <SubTitle>Conforto, Segurança e Praticidade</SubTitle>
      </Header>
      {loading ? <LoadAnimation /> :
        <Content >
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos </AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList data={cars} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterData>{item.startDate}</CarFooterData>
                    <AntDesign name='arrowright' size={20} color={theme.colors.title} style={{ marginHorizontal: 10 }} />
                    <CarFooterData>{item.endDate}</CarFooterData>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>

            )} />

        </Content>
      }

    </Container>
  );
}