import React, { use, useEffect, useRef, useState } from "react";
import {View, Text, Animated, StyleSheet, Dimensions, ImageBackground, TextInput, Alert, Button, Switch} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function SplashScreenPro() {
  const [encendido, setEncentido] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [showMain, setShowMain] = useState(false); // controla la pantalla principal

  const enviarDatos = () => {
      if (nombre.trim() === '') {
        Alert.alert('Error', 'nombre no ingresado');
        alert('Error: nombre no ingresado');
      } else if (correo.trim() === '') {
        Alert.alert('Error', 'correo no ingresado');
        alert('Error: correo no ingresado');
      } else if (!correo.includes('@gmail.com')) {
        Alert.alert('Error', 'correo no valido');
        alert('Error: correo no valido');
      } else if (!encendido) {
        Alert.alert('Error', 'Debes aceptar los terminos y condiciones');
        alert('Error: Debes aceptar los terminos y condiciones');
      } else {
        Alert.alert('Exito', 'Datos enviados correctamente');
        alert('Exito: Datos enviados correctamente');
      }
    };

    

  // Animaciones Splash
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;


  useEffect(() => {
    // Animación inicial del logo: fade + scale + rotación
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    // Animación del texto: slide + fade
    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    // Después de 3s, fade-out del Splash y mostrar contenido principal
    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync(); // oculta splash de Expo
        setShowMain(true); // muestra contenido principal
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/FondoCOD.jpeg")}
        style={styles.background}
        resizeMode="cover" // 'cover' hace que la imagen llene toda la pantalla
      >
        <View style={styles.content}>
            <Text style={styles.title}> Registro de usuario </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
            />

            <View style={styles.switchContainer}>
              <Text>¿Aceptas los términos y condiciones?</Text>
              <Switch value={encendido} onValueChange={setEncentido}/>
            </View>

            <Button title="Enviar datos" onPress={enviarDatos} />
        </View>

      </ImageBackground>

    );
  }




  // Splash animado
  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/IconoProgreso.jpg")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          {
            opacity: fadeLogo,
            transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
          },
        ]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        Cargando aplicación...
      </Animated.Text>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo,
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e6f82ff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1, // ocupa toda la pantalla
    width: "100%", // ancho completo
    height: "100%", // alto completo
    justifyContent: "center",
    alignItems: "center",

  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 20,
    borderRadius: 10,
    gap: 10,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },

  title:{
    fontSize:40,
    fontWeight:'bold'
  },

  input:{
    width:'100%',
    borderWidth:1,
    borderColor:'#86828fff',
    padding:10,
    borderRadius:10,

  },

  switchContainer:{
    flexDirection:'row',
    gap:10,
  },

});