import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import BotonesScreen from './Botones/BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextImput from './TextScreen';
import ScrollView from './ScrollView';
import ImageBackgroung from './ImageBackgroung';
import ActivityIndicator from './ActivityIndicator';
import FlatList from './FlatList';
import Modal from './Modal';
import BottonSheet from './BottonSheet';

export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'EntradaTexto':
            return <TextImput/>;
        case 'ScrollView':
            return <ScrollView/>;
        case 'ImageBackgroung':
            return <ImageBackgroung/>;
        case 'ActivityIndicator':
            return <ActivityIndicator/>;
        case 'FlatList':
            return <FlatList/>;
        case 'Modal':
            return <Modal/>;
        case 'BottonSheet':
            return <BottonSheet/>;
        case 'menu':
            default:
                 return (
                     <View>
                     <Text>Menu de Practicas</Text>
                     <Button color='red' onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                     <Button color='red' onPress={()=>setScreen('botones')} title='Pract: Botones'/>
                     <Button color='red' onPress={()=>setScreen('EntradaTexto')} title='Pract: Entrada de Texto'/>
                     <Button color='red' onPress={()=>setScreen('ScrollView')} title='Pract: ScrollView'/>
                     <Button color='red' onPress={()=>setScreen('ImageBackgroung')} title='Pract: Backgroung'/>
                     <Button color='red' onPress={()=>setScreen('ActivityIndicator')} title='Pract: Indicador de actividad'/>
                     <Button color='red' onPress={()=>setScreen('FlatList')} title='Pract: Lista Plana'/>
                     <Button color='red' onPress={()=>setScreen('Modal')} title='Pract: Modal'/>
                     <Button color='red' onPress={()=>setScreen('BottonSheet')} title='Pract: BottonSheet'/>                    
                     
                     </View>
    )

    }

}

const styles = StyleSheet.create({

})