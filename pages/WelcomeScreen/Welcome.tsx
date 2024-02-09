import React from "react";
import { Dimensions, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button/Button";
import Footer from "../../components/footer/Footer";
import {useFonts} from "expo-font"
import { TextHeader, TextMini, ViewButton, ViewContainer, ViewText } from "./_style";

const {height} = Dimensions.get("window");
const WelcomePage=({navigation: {navigate}})=>{
    const [fontsLoaded] = useFonts({
        Ultra: require("../../assets/fonts/ProtestStrike-Regular.ttf")
    })
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <ViewContainer>
                <ImageBackground source={{uri:'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=996&t=st=1707320934~exp=1707321534~hmac=7ff7c8c3ae875ca19f92734a43f0ac82aaee1311e92676f6d04bd4128a4fa9e2'}} resizeMode="cover"
                style={{height:height/2.5}}/>

                <ViewText>
                    <TextHeader>Merhaba</TextHeader>
                    <TextMini>Kampüs Hayatım uygulamasına hoşgeldiniz</TextMini>
                </ViewText>

                <ViewButton>
                    <Button onPress={()=>navigate('Register')} text="Kayıt Ol"/>
                    <Button onPress={()=>navigate('Login')} text="Giriş Yap"/>
                </ViewButton>
            </ViewContainer>
            
            <Footer/>
        </SafeAreaView>
    )
}

export default WelcomePage