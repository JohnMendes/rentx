import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {StackRourtes} from './stack.routes'

export function Routes (){
  return (
    <NavigationContainer>
      <StackRourtes />
    </NavigationContainer>
  );
}