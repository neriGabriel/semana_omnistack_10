import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

//REACT NATIVE NÃO TEM HERANÇA DE ESTILIZAÇÃO, OU SEJA, CADA ELEMENTO TEM SUA ESTLICIZAÇÃO
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroudColor="#7D40E7"/>
      <Routes />
    </>
    
  );
}
