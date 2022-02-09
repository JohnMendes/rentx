import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangedSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import { Container, Header, CarImages, Content, Details, 
  Description, Brand, Name, Rent, Period, Price, About, Accessories, Footer } from './styles';

  type NavigationProps = {
    navigate: (screen: string) => void;
  };

export function CarDetails() {

  const navigation = useNavigation<NavigationProps>();

  function handleConfirmRental(){
    navigation.navigate("Scheduling");
  }
  
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

        <About>
          kkkkkkkkkkkkkkkkkkkkkkkkkr3a3trf3gvcwkfbuivb.kbjnbnsroçibhnrstonbsrçorgbaeorghbaeoiugbaçrga
          ifçuwhbafgç~ehbiguoçsgbhnioaeghioewfhwuoifbhauowefwwufbiaugbersgurb
          çfhb´~woghbnioçagbvsoçugrbnserçorgbina~console.error(oafihnaçghaiog);
        </About>
      </Content>
      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}