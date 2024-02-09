import React from "react"
import { Dimensions, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import {useFonts} from "expo-font"
import { IconView, TextHeader, TextPassword, ViewContainer } from "./_style";

const {height} = Dimensions.get("window");
const Login = ({navigation}) =>{
    const [fontsLoaded] = useFonts({
        Ultra: require("../../assets/fonts/ProtestStrike-Regular.ttf")
    })
    return(
        <SafeAreaView style={{marginTop:40}}>

            <ImageBackground source={{ uri:'https://img.freepik.com/free-vector/college-class-concept-illustration_114360-10544.jpg?w=996&t=st=1707315012~exp=1707315612~hmac=da20521d78542752310bff7b6c72fc1e6dd0eae08adec75b0b66ebea1960678f'}} resizeMode="contain"
                style={{height:height/2.7}}/>

            <ViewContainer>
                <View style={{alignItems:"center"}}>
                    <TextHeader>Giriş Yap</TextHeader>
                </View>

                <Input placeholder="Email"/>
                <Input placeholder="Şifre"/>
                <TextPassword>Şifremi Unuttum</TextPassword>
                
                <Button onPress={()=>navigation.navigate('')} text="Giriş Yap"/>

                <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={{padding:10}}>
                    <Text style={{textAlign:"center"}}>Yeni hesap oluştur</Text>
                </TouchableOpacity>

                <Text style={{textAlign:"center", marginTop:30}}>Bununla devam et</Text>
                
                <IconView>
                    <IconButton name="logo-google"/>
                    <IconButton name="logo-github"/>
                    <IconButton name="logo-facebook"/>
                </IconView>
            </ViewContainer>
        </SafeAreaView>
    )
}

export default Login