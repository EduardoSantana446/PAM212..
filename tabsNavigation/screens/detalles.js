import { View, Text, StyleSheet } from 'react-native';

export default function Detalles() {
    return (

        <View style = {styles.container}>
            <View style= {styles.iconRow}>
                <Text style = {styles.title}>Detalles de Usuario</Text>
                <Text style={styles.subtitulo}>Usando navigation stack</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'blue',
        marginLeft: 10,
        color: 'black',
    },
    subtitulo: {
        color: 'blue',
        alignItems: 'center',
    }
});