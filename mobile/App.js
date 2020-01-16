import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';


//REACT NATIVE NÃO TEM HERANÇA DE ESTILIZAÇÃO, OU SEJA, CADA ELEMENTO TEM SUA ESTLICIZAÇÃO
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroudColor="#7D40E7"/>
      <Routes />
    </>
    
  );
}
