import React, {useState} from "react";
import {Modal, View, Text, Button, Stylesheet} from "react-native";

export default function modalscreen(){
    const [modalVisible, setModalVisible] = useState(false); 

    const abrirModal=() => {
        setModalVisible(true);
    };

    const cerrarModal=() =>{
        setModalVisible(false);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>ejemplo del componente modal</Text>

            <Button title="abrir Modal" onPress={abrirModal}/>

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={cerrarModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}> hola Moda</Text>
                        <Button title="Cerrar Modal" onPress={cerrarModal}/>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#FFFF',
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#rgba(0,0,0,0.4)',
    },
    modalView: {
        margin:20,
        backgroundColor: '#FFFF',
        borderRadius: 15,
        padding: 35,
        alingItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 16,
    },
    
});